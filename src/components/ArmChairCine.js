import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams } from 'react-router-dom';


export default function ArmChairCine() {

    const [seat, setSeat] = useState(null);

    const sessionID = useParams();

    const [selectedSeats,setSelectedSeats] = useState ([])



    console.log("IDSESSAO", sessionID.idSessao);
    console.log("objeto", seat)


    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID.idSessao}/seats`)

        request.then((res) => {
            setSeat(res.data)
        })

        request.catch((err) => {

        })

    }, [])

    if (seat === null) {
        return <Loading />
    }

    function seatsColor (s) {

        if (s.isAvailable === true){
            if (selectedSeats.includes(s.id)){
                return "#1AAE9E"
            } else {
                return "#C3CFD9"
            }
        } else {
            return "#FBE192"
        }

    }

    function selectSeats (s){

        if (s.isAvailable === false){
            alert ("Assento indisponível")
            return
        } if (!selectedSeats.includes(s.id)){
            setSelectedSeats([...selectedSeats,s.id])
        }   else {
            const revomeSeats = selectedSeats.filter((selected)=>s.id !== selected)
            setSelectedSeats(revomeSeats);
        }
    }


    return (
        <>
            <Title>Selecione o(os) assento(os)</Title>
            <SeatsContainer>
                {seat.seats.map((s, index) => 
                <SeatsItem itemColor={()=>seatsColor(s)} key={index}  onClick = {()=>selectSeats(s)}> {index + 1} </SeatsItem>          
                )}
            </SeatsContainer>
            <SubtitleColor>
                <div> 
                    <h1></h1>
                    <h2>Selecionado</h2>
                </div>
                <div> 
                    <h3></h3>
                    <h2>Disponível</h2>
                </div>
                <div> 
                    <h4></h4>
                    <h2>Indisponível</h2>
                </div>
            </SubtitleColor>
            


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

const SeatsContainer = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:row;
margin: 0px 24px 0px 24px;



`
const SeatsItem = styled.div`

    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:${props => props.itemColor};
    width:24px;
    height:24px;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    margin:7px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;



`

const SubtitleColor = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin:16px;
    
    h1{
    width: 25px;
    height: 25px;
    background-color: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    }
    h2 {

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    }
    h3{
    width: 25px;
    height: 25px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    }
    h4{
    width: 25px;
    height: 25px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    }

`
