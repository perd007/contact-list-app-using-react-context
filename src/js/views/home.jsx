import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "../component/modal"
import "../../styles/home.css";


export const Home = () => {
	const { store } = useContext(Context);


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
									<Modal index={index} />


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
