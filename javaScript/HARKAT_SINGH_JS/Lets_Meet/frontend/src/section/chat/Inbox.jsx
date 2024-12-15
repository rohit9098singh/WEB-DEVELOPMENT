import React, { useState } from 'react';
import User01 from "../../assets/images/user/user-01.png";
import { LinkSimple, PaperPlaneTilt, Smiley } from '@phosphor-icons/react';

const Inbox = () => {
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        if (e.key === "Enter") {
            console.log("submited data", message);
            setMessage("")

        }
    }

    return (
        <div className='flex h-full w-[95%] flex-col lg:w-3/4'>
            {/** HEADERS */}
            <div className='sticky top-0 z-20 flex items-center justify-between border-b border-stroke dark:border-strokedark px-5 py-4'>
                <div className='flex items-center gap-3'>
                    <div className='h-12 w-12 rounded-full object-cover'>
                        <img src={User01} alt={"Avatar"} className='h-full w-full' />
                    </div>
                    <div className='flex flex-col gap-y-0'>
                        <h1 className='text-sm font-semibold text-stone-700 dark:text-white truncate'>
                            Henry Lohil
                        </h1>
                        <p className='text-sm'>Reply To Message</p>
                    </div>
                </div>
            </div>
            {/** MESSAGES */}
            <div className="max-h-full overflow-auto px-9  py-7.5 no-scrollbar space-y-3.5 grow">
                {/* Message from Riya (Left Side) */}
                <div className="max-w-fit">
                    <p className="mb-1 text-sm font-medium">Riya Kumari</p>
                    <div className="bg-stone-200 rounded-2xl rounded-tl-none px-5 py-3 dark:bg-boxdark-2 inline-block">
                        <p>hey i wanna meet you just to inform you something which is very important</p>
                    </div>
                    <p className="text-xs">1:24</p>
                </div>

                {/* Reply Message (Right Side) */}
                <div className="max-w-fit ml-auto">
                    <div className="bg-blue-500 rounded-2xl rounded-br-none px-5 py-3 inline-block">
                        <p className="text-white">Ok</p>
                    </div>
                    <p className="text-xs ">1:26</p>
                </div>
            </div>

            {/** MESSAGE INPUT */}
            <div className='sticky bottom-0 z-20 border-t border-stroke dark:border-strokedark bg-stone-200 px-6 py-5 dark:bg-boxdark'>
                <div className='flex items-center justify-between space-x-4.5 pr-20'>
                    <div className='relative w-full flex justify-between items-center'>
                        <input
                            type="text"
                            placeholder="Type Something Over here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleSubmit}
                            className="rounded-xl border border-stroke bg-white grow py-2.5 pl-9 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:border-strokedark dark:bg-boxdark-2 dark:text-white dark:placeholder-gray-400"
                        />
                        <div className='absolute right-5 top-1/2 -translate-y-1/2 flex items-center justify-end space-x-4'>
                            <button aria-label="Attach a file" className='hover:text-blue-600'>
                                <LinkSimple size={26} />
                            </button>
                            <button aria-label="Add an emoji" className='hover:text-blue-600'>
                                <Smiley size={26} />
                            </button>
                        </div>
                    </div>
                    <button
                        className='flex items-center justify-center bg-blue-500 text-white rounded-md h-9 max-w-9 w-full hover:bg-blue-600'
                        aria-label="Send message"
                    >
                        <PaperPlaneTilt size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inbox;
