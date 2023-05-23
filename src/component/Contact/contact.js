import React from "react"
import styled from "styled-components"
import Card from "../Card/card"

const Contact= () => {
  return (
    <Div>
        <Wrapper>
                <Card   align="row"  h1="This is the CONTACT US PAGE" h5="It takes no time at all to integrate Huddle with your apps authentication solution. This means, 
                 once signed in to your app, your users can start chatting immediately."  image="/yourUser.svg" />
        </Wrapper>
    </Div>
)
};

export default Contact;

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