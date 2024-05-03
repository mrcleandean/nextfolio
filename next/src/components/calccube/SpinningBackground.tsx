"use client";

const SpinningBackground = () => {
    const bgDem = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);
    return <div className="absolute bg-gradient-to-tr from-[#0bd1ff] via-[#ffa3ff] to-[#ffd34e] animate-calc-cube" style={{ width: bgDem, height: bgDem }} />
}

export default SpinningBackground;