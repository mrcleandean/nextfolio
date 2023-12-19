"use client";
import { BsPlayFill, BsPauseFill } from 'react-icons/bs'
import { BiReset } from 'react-icons/bi'
import { HeaderPropType } from '@/shared/types/sortviz'
import { FolioLink } from '../shared';

const timeComplexities = {
    bubble: 'O(n^2)',
    insertion: 'O(n)',
    selection: 'O(n^2)',
    // merge: 'O(nlog(n))',
    // quick: 'O(nlog(n))',
    // bogo: 'O(memes)',
}

const Header = ({
    reset,
    changeAlgorithm,
    changeAmount,
    changeDelay,
    togglePlay,
    algorithm,
    amount,
    delay,
    play }: HeaderPropType) => {
    return (
        <div className="w-[100vw] h-[240px] sm:h-[100px] border-b-2 border-b-white flex justify-center text-white">
            <div className="max-w-6xl w-full h-full flex justify-center sm:justify-between items-center flex-col sm:flex-row">
                <FolioLink title="SortViz" />
                <div className="flex flex-row sm:mr-5 sm:gap-4 gap-2">
                    <button onClick={reset}>
                        <BiReset size={'2.15rem'} />
                    </button>
                    <button onClick={togglePlay}>
                        {play ? <BsPauseFill size={'2.5rem'} /> : <BsPlayFill size={'2.5rem'} />}
                    </button>
                    <div className="flex flex-col items-center gap-1 justify-center">
                        <label htmlFor="algorithm" className="text-white text-[12.5px]">Algorithm</label>
                        <select
                            name="algorithm"
                            id="algorithm"
                            onChange={changeAlgorithm}
                            className="bg-white text-black rounded-md cursor-pointer"
                        >
                            <option value="selection">Selection Sort</option>
                            <option value="bubble">Bubble Sort</option>
                            <option value="insertion">Insertion Sort</option>
                            {/* <option value="merge">Merge Sort</option>
                            <option value="quick">Quick Sort</option>
                            <option value="bogo">Bogo Sort</option> */}
                        </select>
                        <p className='text-[12.5px] mt-[0.125rem]'>{timeComplexities[algorithm]}</p>
                    </div>
                    <div className='flex flex-col sm:flex-row sm: gap-2'>
                        <div className='flex flex-col items-center gap-1 justify-center'>
                            <label htmlFor="algorithmrange" className="text-white text-[12.5px]">Amount</label>
                            <input
                                name='algorithmrange'
                                id='algorithmrange'
                                type='range'
                                min="15"
                                max="120"
                                step="5"
                                onChange={changeAmount}
                                value={amount}
                            />
                            <p>{amount}</p>
                        </div>
                        <div className='flex flex-col items-center gap-1 justify-center'>
                            <label htmlFor="delayrange" className="text-white text-[12.5px]">Delay (ms)</label>
                            <input
                                name='delayrange'
                                id='delayrange'
                                type='range'
                                min="5"
                                max="200"
                                step="5"
                                onChange={changeDelay}
                                value={delay}
                            />
                            <p>{delay}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
