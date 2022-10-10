import styled from "styled-components"
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import { useParams , useNavigate } from 'react-router-dom';



export default function ArmChairCine(props) {

    let navigate= useNavigate();

   

    const sessionID = useParams();

   

    console.log("NOMEE", props.nome)
    console.log("CPF", props.cpf)
  



    console.log("IDSESSAO", sessionID.idSessao);
    console.log("objeto", props.seat)



    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionID.idSessao}/seats`)

        request.then((res) => {
            props.setSeat(res.data)
        })

        request.catch((err) => {

        })

    }, [])

    if (props.seat === null) {
        return <Loading />
    }

    function seatsColor(s) {

        if (s.isAvailable === true) {
            if (props.selectedSeats.includes(s.id)) {
                return "#1AAE9E"
            } else {
                return "#C3CFD9"
            }
        } else {
            return "#FBE192"
        }

    }

    function selectSeats(s) {

        if (s.isAvailable === false) {
            alert("Assento indisponível")
            return
        } if (!props.selectedSeats.includes(s.id)) {
            props.setSelectedSeats([...props.selectedSeats, s.id])
        } else {
            const revomeSeats = props.selectedSeats.filter((selected) => s.id !== selected)
            props.setSelectedSeats(revomeSeats);
        }
    }

    function submitInfo(event) {
        event.preventDefault();
        const sendInfo = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: props.selectedSeats,
            name: props.name,
            cpf: props.cpf
        });

        sendInfo.catch((err)=>{
            alert(err.response.data);
        })
        
        sendInfo.then(()=>
            navigate('/sucesso')
        )
    }

    function addName(e) {
        props.setName(e)
    }
    
    function addCPF(e) {
        props.setCPF(e)
    }

    return (
        <Page>
            <Title>Selecione o(os) assento(os)</Title>
            <SeatsContainer>
                {props.seat.seats.map((s, index) =>
                    <SeatsItem itemColor={() => seatsColor(s)} key={index} onClick={() => selectSeats(s)}> {index + 1} </SeatsItem>
                )}
            </SeatsContainer>
            <Subtitle>
                <div> <SubtitleColor color={"#1AAE9E"} border={"#0E7D71"} /> Selecionado</div>
                <div> <SubtitleColor color={"#C3CFD9"} border={"#7B8B99"} /> Disponível</div>
                <div> <SubtitleColor color={"#FBE192"} border={"#F7C52B"} /> Indisponível</div>
            </Subtitle>
            <InputUserInfo onSubmit={submitInfo}>
                <div> Nome do comprador: <input type="text"  onChange={e=> addName(e.target.value)}  placeholder="Digite seu nome..." required></input>  </div>
                <div> CPF do comprador: <input type="number"  onChange={e=> addCPF(e.target.value)}  placeholder="Digite seu CPF..." required></input>  </div>
                <button type="submit">Reservar Assento(os)</button>
            </InputUserInfo>

            <Footer>
                <img src={props.seat.movie.posterURL} alt="Movie" />
                <h1>{props.seat.movie.title} {props.seat.day.weekday}-{props.seat.name}</h1>
            </Footer>

        </Page>

    )
}



const Page = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

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

const Subtitle = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin:16px;
    
    div {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    flex-direction:column;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
   
    }
    

`
const SubtitleColor = styled.div`
 
    width: 25px;
    height: 25px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};
    border-radius: 17px;
    
`

const InputUserInfo = styled.form`
    display:flex;
    align-items:center;
    flex-direction:column;
    

    div{
        display:flex;
        flex-direction:column;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        margin-top:20px;
        


        input {
            width: 327px;
            height: 51px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
        }
      
    }
      
    button{
            display:flex;
            align-items:center;
            justify-content:center;
            width: 225px;
            height: 42px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
            background: #E8833A;
            color:#FFFFFF;
            border-radius: 3px;
            margin-top:52px;
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