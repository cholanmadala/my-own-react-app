import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Styles/main.less';

const MyComponent = (props) => {
	return (
	<div>
		<h1 className={styles.special}>Hi {props.name}. How are you?</h1>
		<div className={styles.special2}>{props.name}</div>
	</div>
	);
};

export default MyComponent;