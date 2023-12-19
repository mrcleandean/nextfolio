import type { AlgorithmFnType, AlgorithmHashType } from "@/shared/types/sortviz"

const quickSort: AlgorithmFnType = (init) => {
    const arr = init.slice()
    const steps = [arr]
    const key: AlgorithmHashType[] = [{}]
    if (arr.length < 2) return { steps: [arr], key }
    let pivot = arr[arr.length - 1];
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    // return [...quickSort(left), pivot, ...quickSort(right)]
    return { steps, key }
}

export default quickSort