import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate } from "react-router";

const listIni = {
    name: "",
    email: "",
    phone: "",
    address: ""

};
const Form = () => {
    const navigate = useNavigate();
    const { actions } = useContext(Context);
    const [contact, setContact] = useState(listIni);
    //funcion que obtiene los valoresd e los imputs
    const handleChange = (e) => {
        const inputsForm = { ...contact, [e.target.name]: e.target.value };
        //  console.log("Antes del set: " + inputsForm);
        setContact(inputsForm);// ojo son  parentesis 
        //  console.log(contact);
    }
    //funcion que guarda el valor de los inputn en el store
    const AddNewContact = () => {
        actions.addContact(contact);
        navigate("/");
    }
    return (

        <div className="container d-flex flex-column gap-2">
            <div className=" d-flex justify-content-center"><h1>Add a  New Contac</h1></div>
            <div className="mb-3">
                <label className="form-label fw-bold">Full Name</label>
                <input type="text" className="form-control" name="name" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" name="email" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Phone</label>
                <input type="text" className="form-control" name="phone" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Address</label>
                <input type="text" className="form-control" name="address" onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary fw-bold" onClick={AddNewContact}>Save</button>
        </div>
    );
}

export default Form;