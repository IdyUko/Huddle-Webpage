import React from "react"
import styled from "styled-components"
import Card from "../Card/card"

const Services= () => {
  return (
        <Div>
                <Wrapper>
                        <Card  align="row-reverse"  h1="This is the SERVICES PAGE" h5="You wouldn't paginate a conversation in real life, so why do it online?  
                        Our threads have just-in-time loading for a more natural flow.."  image="/flow conversation.svg" />
                </Wrapper>
        </Div>
        
  )
};

export default Services;


const Div = styled.div` 
width: 100%;
height: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div` 
width: 100%;
height: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
`;