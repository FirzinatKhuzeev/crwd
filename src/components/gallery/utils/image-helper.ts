export const round = (value: string | number, decimals = 0) => {
    const num = +(value + 'e' + decimals);

    return Number(Math.round(num) + 'e-' + decimals);
};

export const ratio = ({ width, height }: any) => round(width / height, 2);

export const findIdealNodeSearch = (targetRowHeight: number, containerWidth: number) => {
    const rowAR = containerWidth / targetRowHeight;

    return round(rowAR / 1.5, 0) + 8;
};
