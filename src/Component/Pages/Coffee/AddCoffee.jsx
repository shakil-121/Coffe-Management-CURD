import React from "react";
import Swal from 'sweetalert2'
import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddCoffee = () => {

const handleSubmit=event=>{
    event.preventDefault()
     const form=event.target; 
     const name=form.name.value;
     const chef=form.chef.value;
     const supplier=form.supplier.value;
     const taste=form.taste.value;
     const category=form.category.value;
     const details=form.details.value;
     const photo=form.photo.value; 
     const newCoffee={name,chef,supplier,taste,category,details,photo}  
     console.log(newCoffee);

     fetch('http://localhost:5000/coffees',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        }, 
        body:JSON.stringify(newCoffee) 
     }) 
     .then(res=>res.json())
     .then(data=>{
        if(data.insertedId)
        {
            Swal.fire({
                title: 'Added',
                text: 'Coffee Add Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        } 
        form.reset()
     })
}

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-center my-10 text-2xl">Add New Coffee</h1> 
       {/* row */}
      <div className="grid grid-cols-2  mt-6 mx-24">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          name="name"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control ps-6">
        <label className="label">
          <span className="label-text">Chef</span>
        </label>
        <input
          type="text" 
          name="chef"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      </div>
       {/* row */}
      <div className="grid grid-cols-2  mt-6 mx-24">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Supplier</span>
        </label>
        <input 
        name="supplier"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control ps-6">
        <label className="label">
          <span className="label-text">Taste</span>
        </label>
        <input 
        name="taste"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      </div>
       {/* row */}
      <div className="grid grid-cols-2  mt-6 mx-24">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <input 
        name="category"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      <div className="form-control ps-6">
        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <input 
        name="details"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div>
      </div>
       {/* row */}
      <div className="form-control mx-24 mt-6">
        <label className="label">
          <span className="label-text">Photo</span>
        </label>
        <input 
         name="photo"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
      </div> 
      <div className="mx-24">
      <button type="submit" className="btn btn-primary btn-block mt-6">Add Coffee</button>
      </div> 
      <Link to='/'><button className="btn btn-dark ms-24 my-6"><FaBackward></FaBackward>Back To Home</button></Link>
    </form>
  );
};

export default AddCoffee;
