import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = (props) => {
    const { actions } = useContext(Context);

    const heandleDelete = (index) => {
        actions.deleteContact(index);
    }
    return (
        <>
            <button type="button" className="btn  col-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fas fa-trash-alt"></i>
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Contact</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to delete this contact?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => heandleDelete(props.index)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;