import React, { Component } from 'react';

function Button(props) {

    return (
            <button onClick={props.onClickHandler}>
                {props.label}
            </button>
    )

}

export default Button


// export default class Button extends Component {

//     render() {
//         return (
//                 <button onClick={this.props.onClickHandler.bind(this)}>
//                     {this.props.label}
//                 </button>
//         )
//     }

// }