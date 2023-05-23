import React from "react"
import styled from "styled-components"
import Card from "../Card/card"

const About= () => {
  return (
       <Div>
                <Wrapper>
                        <Card  align="row"  h1="This is the ABOUT  US PAGE" h5="Generate meaningful discussions with your audience and build a strong, loyal community. 
                        Think of the insightful  conversations you miss out on with a feedback form."  image="/Grow Together.svg" />
                </Wrapper>
        </Div>
        
  )
};

export default About;


const Div = styled.div` 
width: 100%;
height: 100%;
/* background-color: black; */
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