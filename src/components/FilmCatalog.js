import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";
import { Link } from "react-router-dom";



export default function FilmCatalog() {
    const [film, setFilm] = useState(null);
   


    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then((res) => {
            setFilm(res.data)
           
        })

        request.catch((error) => {
           // console.log(error.response.data)
        })
    }, []);

        if (film === null){
                return <Loading/>
        }

    return (
        <>
            <Title>Selecione o filme</Title>
            <Catalog>
                
           {film.map(item => <FilmeBox  key={item.id}> <Link to={`/sessoes/${item.id}`}>{<img src={item.posterURL} alt={"film-list"} />}</Link></FilmeBox>)}
          
            </Catalog>
        </>
    );


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

const Catalog = styled.div`
    
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;

`

const FilmeBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:149px;
    height:209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom:11px;

    img{
    width:129px;
    }
`