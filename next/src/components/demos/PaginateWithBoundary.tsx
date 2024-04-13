"use client";
import { useEffect, useState } from "react";

const getDisplay = (dblist: number[], pageNum: number, pageSize: number, pivotId: number): { result: number[], colors: { [key: number]: string }, pivotIndex: number } => {
    const result = [];
    const colors: { [key: number]: string } = {};
    const pivotIndex = dblist.indexOf(pivotId); // Index to find others from
    const boundaryIndex = pivotIndex + dblist.length; // If we circle, we cannot go on or past this index
    const startIndex = pivotIndex + pageNum * pageSize; // pageNum * pageSize is the offset from pivotIndex
    const endIndex = Math.min(startIndex + pageSize, boundaryIndex); // endIndex cannot go past boundary
    if (startIndex >= boundaryIndex) return { result: [], colors: {}, pivotIndex }; // If false, we can iterate from start to boundary - 1
    for (let i = startIndex; i < endIndex; i++) {
        colors[i % dblist.length] = 'bg-lime-400'
        result.push(dblist[i % dblist.length]);
    }
    return { result, colors, pivotIndex };
}

const PaginateWithBoudary = () => {
    const dblist = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [pageNum, setPageNum] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [pivotId, setPivotId] = useState(0);
    const [outputArray, setOutputArray] = useState<number[]>([]);
    const [outputColors, setOutputColors] = useState<{ [key: number]: string }>({});
    const [pivotI, setPivotI] = useState(0);
    useEffect(() => {
        const { result, colors, pivotIndex } = getDisplay(dblist, pageNum, pageSize, pivotId);
        setOutputArray(result);
        setOutputColors(colors);
        setPivotI(pivotIndex);
    }, [pageNum, pageSize, pivotId]);
    return (
        <>
            <h1 className="text-black mt-10 text-2xl">Paginate With Boundary</h1>
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-black">Dblist</h1>
                <h1 className="text-black text-3xl">
                    {'['}
                    {dblist.map((item, i) => {
                        return (
                            <span
                                key={`dbitem-${i}`}
                                className={`cursor-pointer select-none decoration-blue-500 ${outputColors[i] ? outputColors[i] : ' bg-white'} ${i === pivotI ? 'underline' : ''}`}
                                onClick={() => setPivotId(item)}
                            >
                                {item}{i === dblist.length - 1 ? '' : ','}
                            </span>
                        )
                    })}
                    {']'}
                </h1>
            </div>
            <div className="flex items-center justify-center gap-2">
                <h1 className="text-black">Output</h1>
                <h1 className="text-black text-3xl">
                    {`[${outputArray.toString()}]`}
                </h1>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-black">Page Num: </p>
                <div onClick={() => {
                    setPageNum(prev => prev <= 0 ? prev : prev - 1);
                }} className="bg-red-300 select-none cursor-pointer h-6 w-6 text-xl rounded-lg text-black flex items-center justify-center">-</div>
                <p className="text-black text-lg select-none">{pageNum}</p>
                <div onClick={() => {
                    setPageNum(prev => prev + 1);
                }} className="bg-lime-400 select-none cursor-pointer h-6 w-6 text-xl rounded-lg text-black flex items-center justify-center">+</div>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-black">Page Size: </p>
                <div onClick={() => {
                    setPageSize(prev => prev <= 0 ? prev : prev - 1);
                }} className="bg-red-300 select-none cursor-pointer h-6 w-6 text-xl rounded-lg text-black flex items-center justify-center">-</div>
                <p className="text-black text-lg select-none">{pageSize}</p>
                <div onClick={() => {
                    setPageSize(prev => prev + 1);
                }} className="bg-lime-400 select-none cursor-pointer h-6 w-6 text-xl rounded-lg text-black flex items-center justify-center">+</div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-black select-none">Pivot Id: {pivotId}</p>
                <p className="text-black text-xs">{"(Click on dblist to change pivod Id)"}</p>
            </div>
        </>
    )
}

export default PaginateWithBoudary;