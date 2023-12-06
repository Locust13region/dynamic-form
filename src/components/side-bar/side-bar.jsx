import React from "react";
import { useState } from "react";
import "./side-bar.css";
import AccordionItem from "../accordion-item";
import sideBarMenu from "../menu";

const SideBar = ({ addElement, setFormReadOnly }) => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [search, setSearch] = useState("");

	const setActive = (index) => {
		if (index === 2) {
			setSelectedItem(index);
			setFormReadOnly(false);
		} else {
			setSelectedItem(index);
			setFormReadOnly(true);
		}
	};

	const handleOnChange = (value) => {
		setSearch(value);
	};

	return (
		<div className="sideBar">
			<input
				className="searchField"
				id="search"
				type="search"
				placeholder="Search field(s)"
				onChange={(e) => handleOnChange(e.target.value)}
				value={search}
			/>

			<div className="accordion">
				{sideBarMenu.map(({ title, buttons }, index) => (
					<AccordionItem
						key={index}
						title={title}
						index={index}
						buttons={buttons}
						selectedItem={selectedItem}
						setActive={setActive}
						addElement={addElement}
						search={search}
					/>
				))}
			</div>
		</div>
	);
};

export default SideBar;
