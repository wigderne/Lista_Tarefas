import React, { useState } from "react";
import Modal from "../modal";
import Button from "../button";
import "./addList.scss";

function AddList({ AddisOpen, addIsClose, list, sizeList, increment, isAdd }) {
	const [title, setTitle] = useState("");
	const [completed, setCompleted] = useState(false);

	function handleAddList() {
		const AddNewList = [...list];
		AddNewList.push({
			id: sizeList + 1,
			title: title,
			completed: completed,
		});

		setTitle("");
		setCompleted(false);
		increment(1);
		isAdd(AddNewList);
	}
	if (AddisOpen) {
		return (
			<>
				<Modal>
					<div className="addList">
						<h1>Adicionar uma nova tarefa: </h1>
						<form>
							<label htmlFor="title">Título:</label>
							<input
								type="text"
								id="title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
							<span>
								<label htmlFor="completed">Concluído:</label>
								<input
									type="checkbox"
									id="completed"
									value={completed}
									onChange={(e) => setCompleted(e.target.checked)}
								/>
							</span>
						</form>
						<div className="addList__actions">
							<Button
								text={"Cancelar"}
								className={"buttonA"}
								onClick={addIsClose}
							/>
							<Button
								text={"Salvar"}
								className={"buttonB"}
								onClick={() => {
									handleAddList();
									addIsClose();
								}}
							/>
						</div>
					</div>
				</Modal>
			</>
		);
	} else {
		return null;
	}
}

export default AddList;
