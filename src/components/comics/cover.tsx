import React from 'react';
import { IComics } from 'interfaces';

interface IProps {
    item: IComics;
    className?: string;
    onOpenDetailed: (value: string) => void;
}

const Cover = ({ item: { title, price, img }, className = '', onOpenDetailed }: IProps) => {
    return (
        <div className={`flex-basis-1/4 border-2 border-[#1D1D1D] rounded-[5px] p-[13px] w-[336px] h-[170px] relative mb-[20px] ${className}`}>
            <div className="flex">
                <img
                    src={img}
                    alt={title}
                    className="w-[95px] h-[142px] object-cover mr-[13px]"
                />
                <h2 className="text-[16px] font-bold">{title}</h2>
            </div>
            <div className="absolute right-[15px] bottom-[18px] flex flex-col justify-end">
                <span className="text-[19px] font-bold text-right">{price}</span>
                <button
                    className="w-[140px] h-[30px] mt-[12px] bg-comicsRed text-white font-semibold py-[4x] px-[30px] rounded-[5px] hover:opacity-75 self-end transition"
                    onClick={() => onOpenDetailed('future id')}
                >
                    More info
                </button>
            </div>
        </div>
    );
};

export default Cover;
