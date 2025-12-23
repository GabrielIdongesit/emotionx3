import React, {useState} from 'react';
import { data } from '../data/data.js';

const Bike = () => {
    // console.log(data)

    const [bikes, setBikes] = useState(data);

    // Fill Type burgers/pixxa/ etc

    const filterType =(OUXIV8Electricbike) => {
        setBikes(
            data.filter((item) => {
                return item.OUXIV8Electricbike === OUXIV8Electricbike
            })
        );
    };

    // Filter by price

    const filterPrice = (price) => {
        setBikes(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-teal-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* filter Row */}

        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setBikes(data)} className='border-teal-600 text-teal-600 border p-1 px-5 rounded-md hover:bg-teal-600 hover:text-white m-1'>All</button>
                <button onClick={() => filterType('Suite')} className='border-teal-600 text-teal-600 p-1 px-5 rounded-md border hover:bg-teal-600 hover:text-white m-1'>Bike</button>
                <button onClick={() => filterType('Towel')} className='border-teal-600 text-teal-600 p-1 rounded-md border px-5 hover:bg-teal-600 hover:text-white m-1'>Bike</button>
                <button onClick={() => filterType('Shirt')} className='border-teal-600 text-teal-600 border p-1 rounded-md px-5 hover:bg-teal-600 hover:text-white m-1'>Bike</button>
                <button onClick={() => filterType('Native')} className='border-teal-600 text-teal-600 p-1 rounded-md border px-5 hover:bg-teal-600 hover:text-white m-1'>Bike</button>
                <button onClick={() => filterType('Native')} className='border-teal-600 text-teal-600 p-1 rounded-md border px-5 hover:bg-teal-600 hover:text-white m-1'>Bike</button>
                <button onClick={() => filterType('Laundry')} className='border-teal-600 text-teal-600 p-1 rounded-md border px-5 hover:bg-teal-600 hover:text-white m-1'>Bike</button>
            </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} className='border-teal-600 text-teal-600 p-1 px-5 rounded-md border hover:bg-teal-600 hover:text-white m-1'>$</button>
                    <button onClick={() => filterPrice('$$')} className='border-teal-600 text-teal-600 p-1 px-5 rounded-md border hover:bg-teal-600 hover:text-white m-1'>$$</button>
                    <button onClick={() => filterPrice('$$$')} className='border-teal-600 text-teal-600 p-1 px-5 rounded-md border hover:bg-teal-600 hover:text-white m-1'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} className='border-teal-600 text-teal-600 p-1 px-5 rounded-md border hover:bg-teal-600 hover:text-white m-1'>$$$$</button>
                </div>
            </div>
        </div>
        {/* Display clothes */}
        <div className='grid grid-cols text-teal-400 gap-6 lg:grid-cols-4 pt-4'>
            {bikes.map((item, index) => (
                <div className='border shadow-2xl  rounded-lg' key={index}>
                    <img className='w-full h-[35vh] container md:max-h-full lg:object-fill object-cover rounded-t-md cursor-pointer' src={item.image} size={20} alt={item.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-teal-500 px-2 text-white p-1 cursor-pointer rounded-full'>{item.price}</span>
                        </p>
                    </div>
                    <div>
                    <p className='text-white p-1 px-2 lg:text-[15px] text-[12px] shadow-lg border rounded-md  bg-teal-400 cursor-pointer'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Bike