import { AlgorithmFnType, AlgorithmHashType } from "@/shared/types/sortviz";

const mergeSort: AlgorithmFnType = (init) => {
    const arr = init.slice()
    const steps = [arr]
    const key: AlgorithmHashType[] = [{}]
    if (arr.length < 2) {
        return { steps: [arr], key };
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    // return merge(mergeSort(leftArr), mergeSort(rightArr));
    return { steps, key }
}


const merge = (leftArr: number[], rightArr: number[]) => {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

export default mergeSort