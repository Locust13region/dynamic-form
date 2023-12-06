import PropTypes from "prop-types";
const Fields = ({
	formContent,
	formReadOnly,
	saveElementValue,
	deleteElement,
}) => {
	return (
		<div className="form">
			{formContent &&
				formContent.map(({ label, element, value }, index) => (
					<Form
						key={index}
						index={index}
						label={label}
						element={element}
						value={value}
						formReadOnly={formReadOnly}
						saveElementValue={saveElementValue}
						deleteElement={deleteElement}
					/>
				))}
		</div>
	);
};

Fields.propTypes = {
	formContent: PropTypes.array,
	formReadOnly: PropTypes.bool,
	saveElementValue: PropTypes.func,
	deleteElement: PropTypes.func,
};
export default Fields;

const Form = ({
	label,
	element,
	value,
	formReadOnly,
	saveElementValue,
	deleteElement,
	index,
}) => {
	const title = formReadOnly ? (
		<span>{label}</span>
	) : (
		<>
			<span>{label}</span>
			<span
				className="delete"
				onClick={() => deleteElement(index)}
			>
				&times;
			</span>
		</>
	);
	return (
		<div>
			<div className="label">{title} </div>
			<div className="field">
				{element(formReadOnly, value, saveElementValue, index)}
			</div>
		</div>
	);
};

Form.propTypes = {
	label: PropTypes.string,
	element: PropTypes.func,
	value: PropTypes.string,
	formReadOnly: PropTypes.bool,
	saveElementValue: PropTypes.func,
	deleteElement: PropTypes.func,
	index: PropTypes.number,
};
