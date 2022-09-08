// THIS COMPONENET IS USED TO RENDER THE 'ErrorMessage Component' in the Formik Form

import React from 'react';

function TextError(props) {
	return <div className="error">{props.children}</div>;
}

export default TextError;
