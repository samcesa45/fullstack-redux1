//step 6.8
import React from 'react';
import { connect } from 'react-redux';
const Notification = (props) => {
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	};

	// const notification = useSelector((state) => state.message);

	if (props.notification === '') {
		return null;
	}
	return <div style={style}>{props.notification}</div>;
};

const mapStateToProps = (state) => {
	return {
		notification: state.message,
	};
};

export default connect(mapStateToProps)(Notification);
