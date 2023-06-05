import Header from "./Components/header";
import Home from "./page/home";
import Footer from "./Components/footer";
import {Routes, Route} from "react-router-dom";
import Projects from "./Components/projects";


function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/>}/>
            <Route path={"/projects"} element={ <Projects/>}/>
        </Routes>
     <Footer/>
    </div>
  );
}

export default App;
