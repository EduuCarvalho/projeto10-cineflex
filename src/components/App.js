import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import FilmCatalog from "./FilmCatalog";
import MovieSession from "./MovieSession";
import ArmChairCine from "./ArmChairCine";
import GlobalStyle from "../assets/img/GlobalStyle";
import styled from "styled-components";
import SuccesPage from "./SuccesPage";
import { useState} from "react";




export default function App (){

    // preciso de FILME, SESSAO,INGRESSOS CLICADOS, NOME COMPRADOR E CPF COMPRADOR
    const [seat, setSeat] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState ("");
    const [cpf, setCPF] = useState ("");

       
return (
    <BrowserRouter>
    <GlobalStyle/>
       <Pages>
        <Header/>
        <Routes>
            <Route path="/" element={<FilmCatalog/>}/>
            <Route path="/sessoes/:idFilme" element={<MovieSession/>}/>
            <Route path="/assentos/:idSessao" element = {<ArmChairCine seat = {seat} setSeat={setSeat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} name={name} setName={setName} cpf={cpf} setCPF={setCPF}/>}/>
            <Route path="/sucesso" element={<SuccesPage seat = {seat} setSeat={setSeat} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} name={name} setName={setName} cpf={cpf} setCPF={setCPF}/>}/>
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