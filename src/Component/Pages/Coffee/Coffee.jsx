import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard'; 
import { FaPlus } from "react-icons/fa";

const Coffee = () => { 
    const [coffees,setcoffees]=useState([]) 
    useEffect(()=>{
        fetch('https://coffe-house-server-shakil-121.vercel.app/coffees') 
        .then(res=>res.json())
        .then(data=>setcoffees(data))
    },[])
    return (
        <div className='mt-32'> 
            <h1 className='text-3xl font-bold text-center'>Total Coffee : {coffees?.length}</h1>
            <div className='flex justify-center my-6'>
            <Link  to='/addcoffee'>
            <button className="btn btn-primary">ADD NEW COFFEE <span> <FaPlus></FaPlus></span> </button>
                </Link> 
            </div>
            <div className='grid md:grid-cols-2 gap-4  mx-10'>
            {
                coffees?.map(coffee=><CoffeeCard
                key={coffee._id} 
                coffee={coffee} 
                coffees={coffees} 
                setcoffees={setcoffees}
                >
                </CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Coffee;