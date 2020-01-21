import { BinaryHeap } from './binary-heap';

const buildPrecedentsMap = (graph: any, startNode: any, endNode: any) => {
    const precedentsMap: any = {};
    const visited: any = {};
    const storedShortestPaths: any = {};
    storedShortestPaths[startNode] = 0;

    const pQueue = new BinaryHeap((n: any) => n.weight);
    pQueue.push({ id: startNode, weight: 0 });

    while (pQueue.size()) {
        const shortestNode: any = pQueue.pop();
        const shortestNodeId = shortestNode.id;

        if (visited[shortestNodeId]) {
            continue;
        }

        const neighboringNodes = graph(shortestNodeId) || {};
        visited[shortestNodeId] = 1;

        for (const neighbor in neighboringNodes) {
            const newTotalWeight = shortestNode.weight + neighboringNodes[neighbor];
            if (
                typeof storedShortestPaths[neighbor] === 'undefined' ||
                storedShortestPaths[neighbor] > newTotalWeight
            ) {
                storedShortestPaths[neighbor] = newTotalWeight;
                pQueue.push({ id: neighbor, weight: newTotalWeight });
                precedentsMap[neighbor] = shortestNodeId;
            }
        }
    }

    if (typeof storedShortestPaths[endNode] === 'undefined') {
        throw new Error(`There is no path from ${startNode} to ${endNode}`);
    }

    return precedentsMap;
};

const getPathFromPrecedentsMap = (precedentsMap: any, endNode: any) => {
    const nodes = [];
    let n = endNode;
    while (n) {
        nodes.push(n);
        n = precedentsMap[n];
    }

    return nodes.reverse();
};

export const findShortestPath = (graph: any, startNode: any, endNode: any) => {
    const precedentsMap = buildPrecedentsMap(graph, startNode, endNode);

    return getPathFromPrecedentsMap(precedentsMap, endNode);
};
