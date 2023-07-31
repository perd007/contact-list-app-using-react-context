import React, { useState, useContext, } from "react";
import { Context } from "../store/appContext";
import { Navigate, useNavigate, useParams } from "react-router";

const listIni = {
    name: "",
    email: "",
    phone: "",
    address: ""

};
const Edit = () => {
    const navigate = useNavigate();
    const { actions, store } = useContext(Context);
    const params = useParams();
    const indexId = parseInt(params.id);
    const person = store.contacts.filter((contacto, index) => indexId === index)
    console.log(person);
    const [contact, setContact] = useState(listIni);


    //funcion que obtiene los valoresd e los imputs
    const handleChangeEdit = (e) => {
        const inputsForm = { ...contact, [e.target.name]: e.target.value };
        //  console.log("Antes del set: " + inputsForm);
        setContact(inputsForm); // ojo son  parentesis 

        //  console.log(contact);
    };
    //funcion que guarda el valor de los inputn en el store
    const modifyContact = () => {
        actions.editContact(indexId, contact);

        //se envia al home
        navigate("/");
    };
    return (

        <>
            {person.map((contacts, index) => {
                return (
                    <div className="container d-flex flex-column gap-2">

                        <div className=" d-flex justify-content-center"><h1>Edit Contac</h1></div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Full Name </label>
                            <input type="text" className="form-control" placeholder={contacts.name} name="name" onChange={handleChangeEdit} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control" name="email" placeholder={contacts.email} onChange={handleChangeEdit} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Phone</label>
                            <input type="text" className="form-control" name="phone" placeholder={contacts.phone} onChange={handleChangeEdit} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Address</label>
                            <input type="text" className="form-control" name="address" placeholder={contacts.address} onChange={handleChangeEdit} />
                        </div>
                        <button type="submit" className="btn btn-primary fw-bold" onClick={modifyContact}>Edit</button>
                    </div>
                );
            }
            )}

        </>


    );
}

export default Edit;