import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HandleCounterTwo /> */}
      {/* <Forms /> */}
      {/* <SimpleList /> */}
      {/* <Test /> */}
      {/* <Login /> */}
      {/* <SignUp/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}


export default App;
