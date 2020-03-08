// import React from 'react';
// // we use class - stateless component, 

// class MyComponent extends React.Component {
//     // initialize a state that allows us to dynamically update the content
//     state = {
//         text: '',
//     }

//     handleChange = (event) => {
//         this.setState({ text: event.target.value.toUpperCase() });
//     }

//     render() {
//         return (
//             // Adjacent JSX elements must be wrapped in an enclosing tag
//             // we are creating controlled input with single source of truth
//             <>
//                 <input 
//                     placeholder="Type your text"
//                     // we don't call this function now, we want it to be call when the state is change
//                     onChange={this.handleChange}
//                     value={this.state.text}
//                 />
//                 <h1>{this.state.text}</h1>
//             </>
//         )
//     }
// }

// export default MyComponent;