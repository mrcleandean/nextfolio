import type { AlgorithmFnType, AlgorithmHashType } from "@/shared/types/sortviz";

const selectionSort: AlgorithmFnType = (arr) => {
    const steps = []
    const key = []
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            let sortHash: AlgorithmHashType = {}
            sortHash[i] = 'gray'
            sortHash[j] = 'gray'
            sortHash[min] = min === i ? 'gray' : 'red'
            key.push(sortHash)
            steps.push(arr.slice())
        }
        let swapHash: AlgorithmHashType = {}
        swapHash[i] = 'red'
        swapHash[min] = 'red'
        key.push(swapHash)
        steps.push(arr.slice())
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
        key.push(swapHash)
        steps.push(arr.slice())
    }
    for (let i = 0; i < arr.length; i++) {
        let greenRangeHash: AlgorithmHashType = {}
        for (let j = 0; j <= i; j++) {
            greenRangeHash[j] = 'lightgreen'
        }
        key.push(greenRangeHash)
        steps.push(arr.slice())
    }
    return { steps, key }
}

export default selectionSort