import React, { Component } from "react";

/**
 * 
 * Yo can use the class component as seen below, but you can also just return a constant as a function
 * 
 */

// class SingleTodo extends Component {
//     constructor() {
//         super();
//     }

//     removeTodo = () => {

//     }

//     render() {
//         return (
//             <li>{this.props.todo}<button onClick={this.props.removeTodo}>Remove</button></li>
//         );
//     }

// }

const SingleTodo = props => {
    return(
        <li>{props.todo}<button onClick={this.props.removeTodo}>Remove</button></li>
    );
}
export default SingleTodo;