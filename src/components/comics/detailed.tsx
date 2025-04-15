import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from "@heroicons/react/16/solid";

interface IProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const Detailed = ({ open, setOpen }: IProps) => {
    return (
        <Dialog
            open={open}
            onClose={setOpen}
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
                        <div className="flex">
                            <img
                                src="https://cdn.marvel.com/u/prod/marvel/i/mg/7/00/67915677ecea1/portrait_uncanny.jpg"
                                alt="title"
                                className="w-[163px] h-[245px] object-cover mr-[17px]"
                            />
                            <div className="flex flex-col">
                                <h2 className="mt-[12px] mb-[15px] text-[17px] font-bold">Giant-Size X-Men: Tribute To
                                    Wein & Cockrum #1</h2>
                                <p className="text-[15px] mb-[3px]">
                                    <b>Format:</b> <span>Comic</span>
                                </p>
                                <p className="text-[15px] mb-[3px]">
                                    <b>Pages:</b> <span>48</span>
                                </p>
                                <p className="text-[15px] mb-[3px]">
                                    <b>Characters:</b> <span>X-Men</span>
                                </p>
                                <p className="text-[15px] mb-[3px]">
                                    <b>Creators:</b> <span>Jesus Aburtov, Kris Anka, Jen Bartel, ...</span>
                                </p>
                                <p className="text-[15px] mb-[3px]">
                                    <b>Year of release:</b> <span>2020</span>
                                </p>
                                <p className="text-[15px] mb-[3px]">
                                    <b>DiamondCode:</b> <span>MAR200904</span>
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-[192px] bottom-[18px] text-[19px] font-bold">
                            5.99 €
                        </div>
                        <button
                            className="absolute right-[13px] bottom-[14px] w-[139px] h-[34px] bg-comicsRed text-white font-semibold py-[4x] px-[30px] rounded-[5px] hover:opacity-75 self-end transition"
                            onClick={() =>  setOpen(false)}
                        >
                            Close
                        </button>
                        <XMarkIcon
                            className="w-[28px] h-[28px] text-comicsRed absolute right-[7px] top-[7px] cursor-pointer"
                            onClick={() => setOpen(false)}
                        />
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Detailed;
