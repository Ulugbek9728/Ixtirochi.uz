import Header from "./Components/header";
import Home from "./page/home";
import Footer from "./Components/footer";
import {Routes, Route} from "react-router-dom";
import Projects from "./Components/projects";
import Login from "./page/Login";


function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/>}/>
            <Route path={"/projects"} element={ <Projects/>}/>
            <Route path={"/login"} element={ <Login/>}/>
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
