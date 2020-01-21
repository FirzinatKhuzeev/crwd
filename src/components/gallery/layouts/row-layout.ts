// Google Plus Layout – Find Best Breaks -> http://blog.vjeux.com/2014/image/google-plus-layout-find-best-breaks.html

import { findShortestPath } from '../utils/dijkstra';
import { round, ratio } from '../utils/image-helper';

const getHeight = (row: [], containerWidth: number, margin: number) => {
    const rowWidth = containerWidth - row.length * (margin * 2);
    const totalAspectRatio = row.reduce((acc: any, photo: any) => acc + ratio(photo), 0);

    return rowWidth / totalAspectRatio;
};

const cost = (
    photos: [],
    i: number,
    j: number,
    width: number,
    targetHeight: number,
    margin: number
) => {
    const row: any = photos.slice(i, j);
    const commonHeight = getHeight(row, width, margin);

    return Math.pow(Math.abs(commonHeight - targetHeight), 2);
};

const makeGetNeighbors = (
    targetHeight: number,
    containerWidth: number,
    photos: [],
    limitNodeSearch: number,
    margin: number
) => (start: number) => {
    const results: any = {};
    start = +start;
    results[+start] = 0;
    for (let i = start + 1; i < photos.length + 1; ++i) {
        if (i - start > limitNodeSearch) {
            break;
        }
        results[i.toString()] = cost(photos, start, i, containerWidth, targetHeight, margin);
    }

    return results;
};

export const computeRowLayout = ({
    containerWidth,
    limitNodeSearch,
    targetRowHeight,
    margin,
    photos
}: any) => {
    const getNeighbors = makeGetNeighbors(
        targetRowHeight,
        containerWidth,
        photos,
        limitNodeSearch,
        margin
    );
    let path = findShortestPath(getNeighbors, '0', photos.length);
    path = path.map((node: string | number) => +node);
    for (let i = 1; i < path.length; ++i) {
        const row = photos.slice(path[i - 1], path[i]);
        const height = getHeight(row, containerWidth, margin);
        for (let j = path[i - 1]; j < path[i]; ++j) {
            photos[j].width = round(height * ratio(photos[j]), 1);
            photos[j].height = height;
        }
    }

    return photos;
};
