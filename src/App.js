import './App.css';
import { useState } from 'react';
//import './Styles/style.css';
import '../src/Styles/styles.scss'
import React from 'react';
import AppRouter from './routers/AppRouter';
//import { Counter } from './FunctionCompDemo';
import Joke from './Home/Joke';
import Stories from './Home/Stories';
import Tasks from './Home/Tasks';
import Gallery from './Home/Gallery';
import Matrix from './Home/Matrix';

function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true)

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank')
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery()
    }
  }

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  }

  const updateUserQuery = event => {
    console.log('userQuery', userQuery);
    setUserQuery(event.target.value)
  }
  return (
    <div className="App">
      <h1>Hello Ravi</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          {showGallery ? 'Hide' : 'Show'} Gallery
        </button>
      </div>
      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <IndecisionApp/> */}
//         {/* <FunctionCompDemo /> */}
//         {/* <p>This is my boilerplate</p> */}
//         {/* {routes} */}
//         <AppRouter/>
//       </div>
//     )
//   }
// }

export default App;

