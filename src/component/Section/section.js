import React from "react";
import styled from "styled-components"


const Card = () => {
    return (
        
        <Div>
           	<Container>
                <Hero>
                    <Lefthold>
                                <H1>Build The Community Your Fans Will Love</H1>
                                <H5>Huddle re-imagines  the way we build communities. You have
                                a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</H5>
                                <Button>Get Started For Free</Button>
                    </Lefthold> 
                    <Righthold>
                        <img src="/MockUps.svg" />
                    </Righthold> 
                </Hero>
            </Container> 
        </Div>

        )
    };
    
    export default Card;   


const Div = styled.div` 
width: 100%;
height: 100vh;
background-color: powderblue;
background-image: url("/bg-hero-desktop.svg");
margin-bottom: 100px;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width:  90%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
// background-color: transparent;


img{
width: 100%;
height: 100%;
}
`;
const Hero = styled.div`
width: 100%;
height: 100%;
margin-top: 30px;
// background-color: yellow;
display: flex;
Flex-direction: row;
justify-content: center;
`;
const Lefthold = styled.div`
width: 40%;
height: 100%;
// background-color: khaki;
display: flex;
Flex-direction: column;
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
const H1 = styled.div`
font-size: 40px;
color: Black;
`;
const H5 = styled.div`
font-size: 15px;
margin-top: 30px;
color: Grey;
`;
const Button= styled.button`
width: 200px;
margin-top: 20px;
background-color: hotpink;
color: white;
padding: 1em 1.2rem;
border-radius: 50px;
border: 1px solid hotpink;
cursor: pointer;
`;

