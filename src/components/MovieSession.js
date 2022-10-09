import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';


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
            //  console.log("Error",err.response.data)
        })
    }, [])
    if (session === null) {
        return <Loading />
    }

    return (
        <>
            <Title>Selecione o horário</Title>

            {session.days.map(iten =>
                <Sessions>
                    <DaySession>{iten.weekday}-{iten.date}</DaySession>
                    <HourSession> {iten.showtimes.map(h => <p>{h.name}</p>)}</HourSession>
                </Sessions>
            )}


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

`


const DaySession = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:22px;


`
const HourSession = styled.div`
display:flex;
justify-content:center;
margin:0px 12px 0px 12px;

p{
    display:flex;
    width:82px;
    height:42px;
    justify-content:center;
    align-items:center;
    color: #FFFFFF;
    background-color: #E8833A;
    border-radius: 3px;
}
`