import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './Components/myComponent';

const App = (props) => {
	return (
		<MyComponent  {...props}/>
	);
};

ReactDOM.render(<App name='Cholan'/>, document.getElementById('root'));