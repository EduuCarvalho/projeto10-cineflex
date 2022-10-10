import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function MovieSession() {

    const [session, setSession] = useState(null);
    const { idFilme } = useParams();

    console.log("ID do filme clicado", idFilme)
    console.log("filmeclicado", session)

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        request.then((res) => {
            setSession(res.data)
        })

        request.catch((err) => {
             console.log("Error",err.response.data)
        })
    }, [])

    if (session === null) {
        return <Loading />
    }

    return (
        <>
            <Title>Selecione o horário</Title>

            {session.days.map(iten =>
                <Sessions key={iten.id}>
                    <DaySession >{iten.weekday}-{iten.date}</DaySession>
                    <HourSession> {iten.showtimes.map(h => <p key={h.id}> <Link to={`/assentos/${h.id}`} style={{textDecoration:'none',color:'#FEFFFF'}}>   {h.name} </Link>  </p>)}   </HourSession>
                </Sessions>
            )}

            <Footer>
                <img src={session.posterURL} alt="Movie"/>
                <h1>{session.title}</h1>
            </Footer>
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
const Sessions = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-left:22px;
    
`


const DaySession = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:22px;
    margin-top:23px;
`
const HourSession = styled.div`
display:flex;
justify-content:center;
margin-right:12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
p{
    display:flex;
    width:82px;
    height:42px;
    justify-content:center;
    align-items:center;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
    margin-right:9px;
   
}
`

const Footer = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:117px;
    background-color:#DFE6ED;
    position:fixed;
    bottom:0;
    
   
    
img{
    width:48px;
    margin-left:10px;
    
}
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;   
    font-size: 26px;
    line-height: 30px;
    color: #293845;
    margin-left:14px;
}

`