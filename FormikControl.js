// this template renders the various form fields in the Formik Container
// check 'LoginForm.js' for an example of the render

import React from 'react';
import Checkbox from './Checkbox';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';

function FormikControl(props) {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'textarea':
			return <TextArea {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'radio':
			return <Radio {...rest} />;
		case 'checkbox':
			return <Checkbox {...rest} />;
		default:
			return null;
	}
}

export default FormikControl;

