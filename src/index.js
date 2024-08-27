import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
//import IndecisionApp from './IndecisionApp';
import reportWebVitals from './reportWebVitals';
import ReactionApp from './reaction/component/ReactionApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
var template = (
  <div>
    <h>Ravi Verma</h>
    <p>Age:26</p>
    <p>Location:Bangalore</p>
  </div>
)
var template1 = React.createElement("h1", { id: "someid" }, "welcome to Epsilon")
var app = {
  title: 'React App',
  subtitle: 'This is some info',
  options: ['First Item', 'Second Item']
}
const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value;
  renderCounterApp()
  if (option) {
    app.options.push(option)
    console.log(app.options)
    e.target.elements.option.value = ''
    renderCounterApp()

  }

}

var count = 0;
const addOne = () => {
  count++;
  renderCounterApp()
  console.log('addOne')
}
const minusOne = () => {
  count--;
  renderCounterApp()
  console.log('minusOne')
}
const reset = () => {
  count = 0;
  renderCounterApp()
  console.log('reset')
}




const renderCounterApp = () => {
  var template3 = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
      <p>{app.options.length}</p>
      <ol>
        {/* <li>First Item</li>
        <li>Second Item</li> */}
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name='option'></input>
        <button>Add Option</button>
      </form>
    </div>
  )
  // var template2=(
  //   <div>
  //     <h1>Count:{count}</h1>
  //     <button onClick={addOne}>+1</button>
  //     <button onClick={minusOne}>-1</button>
  //     <button onClick={reset}>Reset</button>
  //   </div>
  // )


}
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderVisibility();
// };

// const renderVisibility = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   root.render(jsx);
// };

//renderVisibility();

//renderCounterApp()
//ReactDOM.render(template1,root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class Person {
  constructor(name = 'anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `I am ${this.name}.`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description

  }
}
class Traveler extends Person {
  constructor(name, age, location) {
    super(name, age)
    this.location = location
  }
  hasHomeLocation() {
    return !!this.location
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting += ` I'm visiting from ${this.location}`
    }
    return greeting
  }
}
const me = new Traveler('Ravi Verma', 26, 'Jharkhand')
const other = new Traveler('Ravi Verma')
// console.log(me.getGreeting())
// console.log(other.getGreeting())


