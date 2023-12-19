import type { RandomArrayFnType } from "@/types/sortviz";

const randomArray: RandomArrayFnType = (amount) => {
    let arr = [];
    for (let i = 1; i <= amount; i++) {
        arr.push(i)
    }
    let currentIndex = arr.length, randomIndex
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
    return arr;
}

export default randomArray