import type { AlgorithmFnType, AlgorithmHashType } from "@/types/sortviz"

const insertionSort: AlgorithmFnType = (arr) => {
    const steps = []
    const key = []
    let hash: AlgorithmHashType = {}
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        steps.push(arr.slice())
        hash = {}
        hash[i] = 'green'
        hash[j] = 'red'
        key.push(hash)
        while (j >= 0 && arr[j] > numberToInsert) {
            steps.push(arr.slice())
            hash = {}
            hash[i] = 'green'
            hash[j] = 'red'
            hash[j + 1] = 'red'
            key.push(hash)

            arr[j + 1] = arr[j]
            j = j - 1

            steps.push(arr.slice())
            hash = {}
            hash[i] = 'green'
            hash[j] = 'red'
            hash[j + 1] = 'red'
            key.push(hash)
        }
        arr[j + 1] = numberToInsert
        hash = {}
        steps.push(arr.slice())
        hash[i] = 'green'
        hash[j + 1] = 'red'
        hash[j] = 'red'
        key.push(hash)
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

export default insertionSort