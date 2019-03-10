
import React, { Component} from 'react';

class Button extends Component {
   
   mainHandleClick =() => {
   	this.props.handleClick(this.props.name)
   }

    render() {
        return (
            <button id={this.props.id} onClick={this.mainHandleClick} className="button">
            {this.props.name}
            </button>
        );
    }
}

export default Button;
