import React from "react"
import styled from "styled-components"
import Card from "../Card/card-2"


const Home = (props) => {
    return (

        <Div>
                <Divwrap>
                        <Card    h1="Build The Community Your Fans Will Love" h5="Huddle re-imagines  the way we build communities. You have
                        a voice, but so does your audience. Create connections with your users as you engage in genuine discussion." button="Get Started For Free" image="/MockUps.svg" />

                        <Cards>
                                <Container>
                                        <Lefthold>
                                                <Wrap>
                                                        <T1>Grow Together</T1>
                                                        <T5>Generate meaningful discussions with your audience and<br/>  build a strong, loyal community. 
                                                                Think of the insightful <br/> conversations you miss out on with a feedback form</T5>
                                                </Wrap>
                                        </Lefthold> 
                                        <Rightholdimg>
                                                <img  src="/Grow Together.svg" />
                                        </Rightholdimg> 
                                </Container> 
                        </Cards>

                        <Cards>
                                <Container>
                                        <Lefthold>
                                                <Wrap>
                                                        <img src="/flow conversation.svg" />     
                                                </Wrap>
                                        </Lefthold> 
                                                <Rightholdimg>
                                                        <T1>Flowing Conversations</T1>
                                                        <T5>
                                                                You wouldn't paginate a conversation in real life, so why do<br/> it online?  
                                                                Our threads have just-in-time loading for a more<br/> natural flow.</T5>                               
                                        </Rightholdimg> 
                                </Container> 
                        </Cards>

                        <Cards>
                                <Container>
                                        <Lefthold>
                                                <Wrap>
                                                        <T1>Your Users</T1>
                                                        <T5>It takes no time at all to integrate Huddle with your apps <br/>authentication solution. This means, 
                                                                once signed in to <br/>your app, your users can start chatting immediately.</T5>
                                                </Wrap>
                                        </Lefthold> 
                                        <Rightholdimg>
                                                <img src="/yourUser.svg" />
                                        </Rightholdimg> 
                                </Container> 
                        </Cards>

                        <Cards>
                                <Divv>
                                       <P>Ready To Build Your Community?</P>
                                       <Button>Get Started For Free</Button>
                                </Divv> 
                        </Cards>
                </Divwrap>
        </Div>

    )
};

export default Home;


const Div = styled.div`
width:  100%;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`;
const Divwrap = styled.div` 
width: 80%;
height: 100%;
background-color: white;
display: flex;
Flex-direction: column;
justify-content: center;
align-items: center;
`;
const Cards = styled.div` 
width: 100%;
height: 100%;
margin-top: 30px;
// background-color: red;
display: flex;
justify-content: center;
`;
const Container = styled.div`
width:  90%;
height:  400px;
// background-color: pink;
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
const Lefthold = styled.div`
width: 50%;
height: 90%;
// background-color: khaki;
display: flex;
flex-direction: column;
justify-content: center;
`;
const Wrap = styled.div`
width: 90%;
height: 100%;
margin-left: 30px;
// background-color: purple;
display: flex;
flex-direction: column;
justify-content: center;
`;
const Rightholdimg = styled.div`
width: 50%;
height: 90%;
// background-color: Peru;
display: flex;
flex-direction: column;
justify-content: center;


img{
width: 90%;
height: 100%;    
margin-left: 30px;
// background-color: orange;
}
`;
const T1 = styled.div`
font-size: 40px;
margin-left: 30px;
color: Black;
`;
const T5 = styled.div`
font-size: 15px;
margin-left: 30px;
color: Grey;
`;
const Divv = styled.div`
width:  40%;
height:  200px;
font-weight: bold;
background-color: white;
border-radius: 1rem;
position: relative;
box-shadow: -8px  -8px  15px rgba(255,  255,  255,  0.1), 5px  5px  15px rgba(0,  0,  0,  0.2);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Button = styled.button`
width: 250px;
margin-top: 20px;
background-color: hotpink;
color: white;
padding: 1rem 1.2rem;
border-radius: 50px;
border: 1px solid  hotpink;
cursor: pointer;
`;
const P = styled.div`
font-size: 20px;
`;
