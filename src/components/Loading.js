import popcornGif from "../assets/img/popcorn.gif"
import styled from "styled-components"
export default function Loading (){


    return(
        <GifLoading>
        <img src={popcornGif} alt="loading"/>
        </GifLoading>
    )
}

const GifLoading = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:100px;
    justify-content:center;
    align-items:center;
img{
    width:300px
}

`