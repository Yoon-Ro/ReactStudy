import React, {useState} from "react";
import { data } from "../data/data.js";

const Foods = () => {
const [foods,setFoods] = useState(data);

// FILTER TYPE 
const filterType = (category) => {
    setFoods(
        data.filter((item)=>{
            return item.category === category;
        })
    );
};

const filterPrice = (price) => {
    setFoods(
        data.filter((item)=>{
            return item.price === price;
        })
    );
};



    return (
    
    <div className="max-w-[1640px] m-auto px-4 py-8">
      <h1 className="text-orange-500 font-bold text-2xl sm:text-4xl py-2">
        Top Rated Menu Items
      </h1>
      {/* FILTER ROW */}
      <div className="flex flex-col lg:flex-row justify-start ">
        {/* FILTER TYPE */}
        <p className="font-bold text-gray-700">Filter Type</p>
        <div className="flex justify-start flex-wrap gap-4 py-2 pl-0 lg:pl-4">
          <button onClick={()=> setFoods(data)} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            All
          </button>
          <button onClick={()=> filterType('burger')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Burger
          </button>
          <button onClick={()=> filterType('pizza')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Pizza
          </button>
          <button onClick={()=> filterType('salad')} className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Salad
          </button>
          <button 
          onClick={()=> filterType('chicken')}
          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Chicken
          </button>
        </div>
      </div>

      {/* FILTER PRICE */}
      <div className="flex flex-col lg:flex-row justify-between">
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-start flex-wrap gap-4 py-2 pl-0 lg:pl-4">
          <button onClick={()=> filterPrice('$')}
          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            $
          </button>
          <button onClick={()=> filterPrice('$$')}
          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            $$
          </button>
          <button onClick={()=> filterPrice('$$$')}
          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            $$$
          </button>
          <button onClick={()=> filterPrice('$$$')}
          className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            $$$$
          </button>
        </div>
      </div>
      {/* DISPLAY FOOD */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
            <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg bg-slate-50'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className="flex justify-between px-2 py-4">
                    <p className="text-md  font-bold text-orange-600">{item.name}</p>
                    <p>
                        <span className="bg-orange-500 text-white py-1 px-4 rounded-full text-sm">{item.price}</span>
                    </p>
                </div>
            </div>
        )
        )}
      </div>
      </div>
  );
};

export default Foods;
