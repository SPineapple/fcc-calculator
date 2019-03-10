import React, { Component } from 'react';

class Screen extends Component {
   

    render() {
        return (
            <div id={this.props.id}>
		        {this.props.currentNumber}
		    </div>
        );
    }
}

export default Screen;
