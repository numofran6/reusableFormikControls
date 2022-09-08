// FOR ALL CHECKBOX FORM FIELDS

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Checkbox(props) {
	const { label, name, options, ...rest } = props;

	return (
		<div className="form-control">
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) =>
					options.map((option) => (
						<React.Fragment key={option.value}>
							<input
								type="checkbox"
								id={option.value}
								{...field}
								value={option.value}
								checked={field.value.includes(option.value)}
							/>
							<label htmlFor={option.value}>{option.key}</label>
						</React.Fragment>
					))
				}
			</Field>
			<ErrorMessage name={name} component={TextError} />
		</div>
	);
}

export default Checkbox;
