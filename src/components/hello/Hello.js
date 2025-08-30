import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "hello" }
    }
    render() {
        return (
            <div className='hello'>
				{this.state.text}
			</div>
        );
    }
}

export default Hello;