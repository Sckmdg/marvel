import React, {useEffect, useState} from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from "@heroicons/react/16/solid";

import { generateRandomDetailed, getLowerPrice } from 'utils';
import { Format, IDetailed } from 'interfaces';
import { Loader } from 'components';

interface IProps {
    open: boolean;
    id: string | null;
    onCloseDetailed: () => void;
}

const defaultDetailed = {
    title: '',
    yearOfRelease: '',
    format: 'Comic' as Format,
    pages: 1,
    characters: [],
    creators: [],
    diamondCode: '',
    price: [],
    image: '',
};

const Detailed = ({ open, id, onCloseDetailed }: IProps) => {
    const [{
        title,
        yearOfRelease,
        format,
        pages,
        characters,
        creators,
        diamondCode,
        price,
        image,
    }, setDetailed] = useState<IDetailed>(defaultDetailed);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(() => {
        if (id) {
            setIsLoading(true);
            setDetailed(generateRandomDetailed());
            setTimeout(() => setIsLoading(false), 1000);
        } else {
            setDetailed(defaultDetailed);
        }
    }, [id]);

    return (
        <Dialog
            open={open}
            onClose={onCloseDetailed}
            className="relative z-10"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="border border-[#1D1D1D] rounded-[5px] p-[13px] w-[643px] h-[270px] relative transform overflow-hidden bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >
                        {isLoading &&  (
                            <div className='h-full flex items-center'>
                                <Loader />
                            </div>
                        )}
                        {!isLoading && (
                            <>
                                <div className="flex">
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-[163px] h-[245px] object-cover mr-[17px]"
                                    />
                                    <div className="flex flex-col">
                                        <h2 className="mt-[12px] text-[17px] font-bold">{title}</h2>
                                        <p className="text-[15px]">
                                            <b>Year of release:</b> <span>{yearOfRelease}</span>
                                        </p>
                                        <p className="text-[15px]">
                                            <b>Format:</b> <span>{format}</span>
                                        </p>
                                        <p className="text-[15px]">
                                            <b>Pages:</b> <span>{pages}</span>
                                        </p>
                                        <p className="text-[15px] truncate max-w-[300px]" title={characters.join(', ')}>
                                            <b>Characters:</b> <span>{characters.join(', ')}</span>
                                        </p>
                                        <p className="text-[15px] truncate max-w-[300px]" title={creators.join(', ')}>
                                            <b>Creators:</b> <span>{creators.join(', ')}</span>
                                        </p>
                                        <p className="text-[15px]">
                                            <b>DiamondCode:</b> <span>{diamondCode}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-[192px] bottom-[18px] text-[19px] font-bold">
                                    {getLowerPrice(price)}
                                </div>
                                <button
                                    className="absolute right-[13px] bottom-[14px] w-[139px] h-[34px] bg-comicsRed text-white font-semibold py-[4x] px-[30px] rounded-[5px] hover:opacity-75 self-end transition"
                                    onClick={onCloseDetailed}
                                >
                                    Close
                                </button>
                                <XMarkIcon
                                    className="w-[28px] h-[28px] text-comicsRed absolute right-[7px] top-[7px] cursor-pointer"
                                    onClick={onCloseDetailed}
                                />
                            </>
                        )}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Detailed;
