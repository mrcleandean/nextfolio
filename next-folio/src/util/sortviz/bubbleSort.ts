import type { AlgorithmFnType, AlgorithmHashType } from "@/shared/types/sortviz"

const bubbleSort: AlgorithmFnType = (arr) => {
    const steps = []
    const key = []
    let hash: AlgorithmHashType = {}
    let swapped
    let j = arr.length - 1
    do {
        swapped = false;
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                hash = {}
                hash[i] = 'red'
                hash[i + 1] = 'red'

                steps.push(arr.slice())
                key.push(hash)

                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true;

                steps.push(arr.slice())
                key.push(hash)
            } else {
                hash = {}
                hash[i] = 'gray'
                hash[i + 1] = 'gray'
                steps.push(arr.slice())
                key.push(hash)
            }
        }
        j--
    } while (swapped)
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

export default bubbleSort
