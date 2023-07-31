import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => {
	const { actions, store } = useContext(Context);

	const heandleDelete = (index) => {
		actions.deleteContact(index);
	}
	return (
		<>
			<div className="container text-center mt-5">
				<h1 className="fst-italic ">My List Contact</h1>
				<Link to="/form" ><button type="button" className="btn btn-primary">Add Contact</button></Link>
				{store.contacts.map((contacts, index) => {
					return (
						<div className="card d-flex flex-row  border border-primary mb-2" key={index} >
							<img src="https://picsum.photos/187/" width="190px" className="rounded-circle" />
							<div className="card-body  ">
								<div className=" d-flex flex-row " >
									<h3 className="col-10">{contacts.name}</h3>
									<Link to={`/edit/${index}`}>
										<button type="button" className="btn  col-1" >
											<i className="fas fa-pencil-alt"></i>
										</button>
									</Link>
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
													<button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => heandleDelete(index)}>Delete</button>
												</div>
											</div>
										</div>
									</div>

								</div>
								<label className="form-label d-flex justify-content-start col-12" key={index}><i className="fas fa-envelope"></i>{contacts.email}</label>
								<label className="form-label d-flex justify-content-start col-12" key={index}><i className="fas fa-phone"></i>{contacts.phone}</label>
								<label className="form-label d-flex justify-content-start col-12 " key={index}><i className="fas fa-map-marker-alt"></i>{contacts.address}</label>
							</div>
						</div>
					);
				}

				)}

			</div >
		</>
	)
};
export default Home;
