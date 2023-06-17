import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2"; 
import { FaBackward } from "react-icons/fa";


const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(UpdateCoffee);

    fetch(`https://coffe-house-server-shakil-121.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            title: "Update",
            text: "Coffee Update Successfully",
            icon: "success",
            confirmButtonText: "Update",
          });
        }
        form.reset();
        console.log(data);
      });
  };

  return (
    <div>
      <form className="bg-yellow-500 m-10 rounded-2xl p-2" onSubmit={handleUpdate}>
        <h1 className="text-center my-10 text-2xl">Update Coffee :{name}</h1>
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
              defaultValue={name}
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
              defaultValue={chef}
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
              defaultValue={supplier}
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
              defaultValue={taste}
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
              defaultValue={category}
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
              defaultValue={details}
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
            defaultValue={photo}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="mx-24">
          <button type="submit" className="btn btn-primary btn-block mt-6">
            Update Coffee
          </button>
        </div>
        <Link to="/">
          <button className="btn btn-dark ms-24 my-6">
            <FaBackward></FaBackward>Back To Home
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateCoffee;
