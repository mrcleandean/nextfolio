import { logo } from '@/assets/chadchess';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="relative z-10 h-10 w-full bg-dprimary flex items-center justify-between border-b-[0.5px] border-csecondary">
            <div className='ml-3 flex items-center'>
                <Image
                    alt="chess logo"
                    src={logo.src}
                    className="ml-[5px] object-contain w-7 h-7 origin-center -rotate-12 drop-shadow-[0.35px_0.35px_2px_black]"
                />
                <h1 className="text-csecondary -ml-1 drop-shadow-[0.5px_0.5px_1px_black] font-bold text-md tracking-wide uppercase">CHESS CHAD</h1>
            </div>
            <div className="mr-3 flex items-center">
                <div className='w-6 h-6 mr-1 rounded-full bg-black'>
                    <Image
                        alt='dev logo'
                        src={'/demdevvy.png'}
                        className='object-contain w-full h-full translate-y-[0.06rem]'
                    />
                </div>

                <h1 className="text-xs text-csecondary">
                    <u><Link href="/">Folio</Link></u>
                </h1>
            </div>
        </div>
    )
}

export default Header