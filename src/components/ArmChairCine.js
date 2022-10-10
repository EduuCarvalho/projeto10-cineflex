import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';


export default function ArmaChairCine () {

    const [seat,setSeat] = useState (null);
    const  sessionID  = useParams();

    console.log("IDSESSAO",sessionID);
    console.log("objeto",seat)

    useEffect (() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID}/seats`)

        request.then((res)=>{
            setSeat(res.data)
        })

        request.catch((err) => {
            
        })

    },[])

    if (seat === null) {
        return <Loading />
    }
   
    return (
        <>
         <Title>Selecione o(os) assento(os)</Title>
            Olaaa
        </>

    )
}


const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:110px;
color: #293845;
font-style: normal;
font-family: 'Roboto';
font-size: 24px;
font-weight: 400;
display: flex;
line-height: 28px;
text-align: center;
align-items: center;
`