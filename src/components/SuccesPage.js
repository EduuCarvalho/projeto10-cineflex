import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function SuccesPage (props) {
    let navigate= useNavigate();


function backHome () {
props.setName("")
props.setCPF("")
props.setSeat(null)
props.setSelectedSeats([])
navigate('/')

}

    return(
<Page>
    <Title>Pedido feito com Sucesso!!!</Title>
    <Resume>
        <h1>Filme e Sessão</h1>
        <p>{props.seat.movie.title}</p>
        <p>{props.seat.day.weekday}-{props.seat.name}</p>
        <h1>Ingressos</h1>
        {props.selectedSeats.map((s,index)=>
        props.seat.seats.map((seat)=> seat.id === s ?<p key={index}>Assento {seat.name}</p> :"" )
        )}
        <h1>Comprador</h1>
        <p>Nome:{props.name}</p>
        <p>CPF:{props.cpf}</p>
    </Resume>
    <BackHome onClick={backHome}>Voltar para Home</BackHome>
</Page>
       
    );


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
    color: #247A6B;
    font-style: normal;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    display: flex;
    line-height: 28px;
    text-align: center;
    align-items: center;
`
const Resume = styled.div`
   display:flex;
   flex-direction:column;
   align-items:flex-start;
   width:100%;
   padding-left:100px;
    
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        margin-bottom:15px;
    }

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom:10px;
    }
    
`

 const BackHome = styled.button`
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
 
 
 
 `