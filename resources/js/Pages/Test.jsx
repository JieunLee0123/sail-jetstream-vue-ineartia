import React from 'react';
        
const Test = () => {
  return (
    <div className="bg-sub_green dark:bg-gray-800 shadow rounded mx-auto w-[300px]">
      test

      <div className="relative w-full h-40">
        <img className="rounded-t z-0 w-full h-full absolute inset-0 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_1.png" alt="banner" />
      </div>
      <div className="pt-5 w-full h-full">
        <div className="px-5 flex items-center justify-between mb-4">
          <p className="text-indigo-700 dark:text-indigo-600 leading-3 tracking-normal text-sm font-normal">23 December, Sunday</p>
          <p className="text-indigo-700 dark:text-indigo-600 leading-3 tracking-normal text-sm font-normal">12:00pm</p>
        </div>
        <h4 className="px-5 text-lg leading-5 font-bold tracking-normal text-gray-800 dark:text-gray-100 mb-2">User Conference 2020</h4>
        <p className="px-5 text-gray-600 dark:text-gray-400 text-sm font-normal tracking-normal leading-5 mb-4">we are excited to share our plans for a useR! 2020 series of events this July to replace the cancelled useR! 2020 Conference (St. Louis) and the useR! 2020 European Hub.</p>
        <div className="py-4 px-5 flex justify-between border-t border-gray-300">
          <p className="text-gray-800 dark:text-gray-100 text-sm leading-5 tracking-normal">Las Vegas, Nevada</p>
          <div className="flex items-center">
            <div className="text-gray-600 dark:text-gray-400 hover:text-indigo-700 cursor-pointer mr-4">
              <svg className="feather feather-bookmark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div className="text-indigo-700 dark:text-indigo-600 hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">
              <svg className="feather feather-share-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={18} cy={5} r={3} />
                <circle cx={6} cy={12} r={3} />
                <circle cx={18} cy={19} r={3} />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;