import React from 'react';
import { Link } from 'react-router';

const Service = ({ img, isLeft, title, subTitle }) => {
    console.log(title);
  return (
    <div className="service flex flex-col md:flex-row">
      {isLeft ? (
        <>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={img}
            alt="service-img"
          />
          <div className="flex leftSide flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            <p className="mb-3 leftSide font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
            <Link to='/contactus'>
            <button className='text-center rounded-md bg-primary text-white w-[10rem] h-[3rem] '>
                    Contact us
            </button>
            </Link>

          </div>
        </>
      ) : (
        <>
          <div className="flex rightSide flex-col justify-start p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
            <p className="mb-3 rightSide font-normal text-gray-700 dark:text-gray-400">{subTitle}</p>
            <button className='rounded-md text-center bg-primary text-white w-[10rem] h-[3rem]'>  
                    Contact us
            </button>
          </div>
          <img
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-r-lg"
            src={img}
            alt="service-img"
          />
        </>
      )}
    </div>
  );
};

export default Service;
