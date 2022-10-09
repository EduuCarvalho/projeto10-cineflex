import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FilmCatalog from "./FilmCatalog";
import MovieSession from "./MovieSession";
import GlobalStyle from "../assets/img/GlobalStyle";

export default function App (){

return (
    <BrowserRouter>
    <GlobalStyle/>
        <Header/>
        <Routes>
            <Route path="/" element={<FilmCatalog/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSession/>}/>
        </Routes> 
    </BrowserRouter>
);
}