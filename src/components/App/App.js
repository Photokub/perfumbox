import './App.css';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";
import {About} from "../About/About";
import {Route, Routes} from "react-router-dom";
import {Catalog} from "../Catalog/Catalog";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/catalog' element={<Catalog/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
