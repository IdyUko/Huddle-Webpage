import React from "react"
import styled from "styled-components"
import Section from "../Section/section"
import Card from "../Card/card"


const Home = (props) => {
    return ( 
        
        <Div>
                <Divwrap>
                        <Section/>

                        <Card align="row"    h1="Grow Together" h5="Generate meaningful discussions with your audience and build a strong, loyal community. 
                        Think of the insightful conversations you miss out on with a feedback form."  image="/Grow Together.svg" />

                        <Card align={"row-reverse"}   h1="Flowing Conversations" h5="You wouldn't paginate a conversation in real life, so why do it online?  
                        Our threads have just-in-time loading for a more natural flow." image="/flow conversation.svg" /> 
                        
                        <Card  align="row"   h1="Your Users" h5="It takes no time at all to integrate Huddle with your apps authentication solution. This means, 
                        once signed in to your app, your users can start chatting immediately."  image="/yourUser.svg" />
                </Divwrap>
        </Div>

    )
};


export default Home;


const Div = styled.div`
width:  100%;
height: 100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;
const Divwrap = styled.div` 
width: 100%;
height: 100%;
background-color: white;
display: flex;
Flex-direction: column;
justify-content: center;
align-items: center;
`;
