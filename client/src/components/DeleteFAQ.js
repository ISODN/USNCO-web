import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Button, Modal} from 'react-bootstrap';

//images
import trash from "../../node_modules/bootstrap-icons/icons/trash.svg";

const DeleteFAQ = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = (event) => {
		axios.delete(`http://localhost:3001/api/admin/delete_faq/${props.ID}`)
			.then((res) => {
				setShow(false);
				window.location.reload(true);
			})
	}

	return (
		<>
			<button class="row btn px-1 py-1 mx-2" onClick={handleShow}>
				<img src={trash} alt="delete button" width="20" height="20"/>
				<a class="mx-1 align-middle">Delete</a>
			</button>

			<Modal show={show} onHide={handleClose} class="alert alert-danger">
				<Modal.Header closeButton>
					<Modal.Title>Delete FAQ</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Are you sure you want to delete this?</p>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						No
					</Button>
					<Button variant="success" onClick={handleSubmit}>
						Yes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default DeleteFAQ;