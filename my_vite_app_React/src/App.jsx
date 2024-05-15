import './App.css'
import {useState} from 'react';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import FriendsPage from './components/MainPage';




function App() {
  const [user, setUser] = useState();
  //If the user is logged in, I want to show only 'MainPage'.
  //If the user is not logged in, I want to show only 'LoginPage'.
  //For this, we have React trick called 'Conditional Rendering'


  const login = function(username, password) {
    console.log("login():", username, password);
  };

  return (
    <div className="App">
    <Header />
    <LoginPage login={login}/>
    {/* <FriendsPage /> */}
    </div>
  )
}

export default App




