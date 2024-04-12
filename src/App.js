import logo from './logo.svg';
import './App.css';
import AccountPage from './Components/AccountPage';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <Home/>
           <SignIn/>
           <SignUp/>
           <AccountPage/>
      </header>
    </div>
  );
}

export default App;
