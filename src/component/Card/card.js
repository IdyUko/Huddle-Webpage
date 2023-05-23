import React from "react";
import styled from "styled-components"


const Card = (props) => {
    return (
        
        <Div>
                <Hero>
           	        <Container>
                                <Lefthold>
                                        <H1>{props.h1}</H1>
                                        <H5>{props.h5}</H5>
                                </Lefthold> 
                                <Righthold>
                                        <Pics><img src={props.image}/></Pics>
                                </Righthold> 
                        </Container> 
                </Hero>
        </Div>

        )
    };
    
    export default Card;   


const Div = styled.div` 
width:  100%;
height: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;
const Container = styled.div`
width:  90%;
height:  100vh;
background-color: white; 
border-radius: 1rem;
box-shadow: -8px  -8px  15px rgba(255,  255,  255,  0.1), 5px  5px  15px rgba(0,  0,  0,  0.2);
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

img{
width: 100%;
height: 100%;
}
`;
const Hero = styled.div`
width:  100%;
height:  100vh;
margin-bottom: 30px;
background-color: white; 
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Lefthold = styled.div`
width: 50%;
height: 100%;
margin-left: 50px;
/* background-color: khaki;  */
display: flex;
flex-direction: column;
justify-content: center;
`;
const Righthold = styled.div`
width: 65%;
height: 100%;
/* background-color: Peru;  */
display: flex;
justify-content: center;
align-items: center;

img{
width: 90%;
height: 90%;      
}
`;
const Pics= styled.div`
width: 80%;
height: 80%;
/* background-color: yellow;  */
display: flex;
justify-content: center;
align-items: center;
`;
const H1 = styled.div`
font-size: 40px;
color: Black;
`;
const H5 = styled.div`
font-size: 15px;
margin-top: 30px;
color: Grey;
`;


