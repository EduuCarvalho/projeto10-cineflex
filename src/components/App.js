import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FilmCatalog from "./FilmCatalog";
import MovieSession from "./MovieSession";
import ArmaChairCine from "./ArmChairCine";
import GlobalStyle from "../assets/img/GlobalStyle";
import styled from "styled-components";


export default function App (){

return (
    <BrowserRouter>
    <GlobalStyle/>
       <Pages>
        <Header/>
        <Routes>
            <Route path="/" element={<FilmCatalog/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSession/>}/>
            <Route path="/assentos/:idSessao" element = {<ArmaChairCine/>}/>
        </Routes> 
        </Pages>
    </BrowserRouter>
);
}


const Pages = styled.div`
display:flex;
flex-direction:column;
 padding-bottom:200px;
 padding-top:67px;

`