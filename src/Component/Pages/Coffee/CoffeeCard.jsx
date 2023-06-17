import React from "react";
import { FaRegEye, FaPen, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,coffees,setcoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to be Delete  this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        fetch(`https://coffe-house-server-shakil-121.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Coffee deleted.", "success"); 
              const remmaining=coffees.filter(cofe=>cofe._id!==id); 
              setcoffees(remmaining)
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card  p-6 card-side bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ width: "150px", height: "200px" }}
            src={photo}
            alt="coffee"
          />
        </figure>
        <div className="flex py-10 px-6 justify-between">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Taste :{taste}</p>
            <p>Category :{category}</p>
            <p>Supplier :{supplier}</p>
            <p>Details :{details}</p>
          </div>
          <div className="card-actions justify-end ps-5">
            <div className="btn-group btn-group-vertical space-y-3">
              <button className="btn btn-active">
                <FaRegEye></FaRegEye>
              </button>
              <Link to={`/updatecoffee/${_id}`}>
              <button className="btn">
                <FaPen></FaPen>
              </button>
              </Link>
              <button
                onClick={() => handledelete(_id)}
                className="btn  btn-error"
              >
                <FaRegTrashAlt></FaRegTrashAlt>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
