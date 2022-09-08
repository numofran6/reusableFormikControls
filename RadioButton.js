// FOR ALL RADIO BUTTONS IN FORM

import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Radio(props) {
	const { label, name, options, ...rest } = props;

	return (
		<div className="form-control">
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) =>
					options.map((option) => (
						<React.Fragment key={option.value}>
							<input
								type="radio"
								id={option.value}
								{...field}
								value={option.value}
								checked={field.value === option.value}
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

export default Radio;
