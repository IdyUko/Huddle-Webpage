import React from "react"
import styled from "styled-components"
import {GoLocation} from "react-icons/go"
import {FiPhoneCall} from "react-icons/fi"
import {AiOutlineMail, AiOutlineCopyrightCircle} from "react-icons/ai"
import {BiMessageDots} from "react-icons/bi";
import {CgFacebook, CgInstagram} from "react-icons/cg";
import {TiSocialTwitter} from "react-icons/ti";
import { Link} from "react-router-dom";



const Footer= () => {
    return (
        <Div>
                <Cards>
                        <Divv>
                                <P>Ready To Build Your Community?</P>
                                <Button>Get Started For Free</Button>
                        </Divv> 
                </Cards>
                <Container>
                        < Wrapper>
                                <Left>
                                        <L1>
                                                <Logo>
                                                        {/* <Logo to="/"><img src= "/logo.svg"  alt="logo"/></Logo> */}
                                                        <BiMessageDots style={{width: 35, height: 35, display: "flex",  justifycontent: "center",  alignitems: "center"}}/>
                                                        Huddle
                                                </Logo>
                                                <Contact>
                                                        <Address>
                                                                < GoLocation style={{width: 20, height: 20}}/>Corporation Estate, Amuwo-Odofin,Lagos.
                                                        </Address>
                                                        <Telephone>
                                                                <FiPhoneCall style={{width: 20, height: 20}}/>+234 123 4567 890
                                                        </Telephone>
                                                        <Email>
                                                                <AiOutlineMail style={{width: 20, height: 20}}/>example@mamamoni.com
                                                        </Email>
                                                </Contact>
                                        </L1>   
                                        <L2>About Us<br/>What We Do<br/> FAQ</L2>
                                </Left>
                                        
                                <Right>
                                        <R1> Career<br/>Blog<br/>Contact Us</R1>
                                        <R2>
                                                <Socialicons>
                                                        <Facebook><CgFacebook style={{width: 17, height: 17}}/></Facebook>  
                                                        <Twitter><TiSocialTwitter style={{width: 17, height: 17}}/></Twitter> 
                                                        <Instagram><CgInstagram  style={{width: 17, height: 17}}/></Instagram>  
                                                </Socialicons>
                                                <C><AiOutlineCopyrightCircle style={{width: 10, height: 10, display: "flex",  justifycontent: "center",  alignitems: "center" }} />
                                                copyright 2023 Huddle. All rights reserved.</C>  
                                        </R2>
                                </Right>
                        </Wrapper> 
                </Container>
        </Div>

    )
};

export default Footer;


const Div = styled.div`
width:  100%;
height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Cards = styled.div` 
width: 100%;
height: 100%;
margin-top:  350px;
margin-bottom:  150px;
display: flex;
justify-content: center;
`;
const Divv = styled.div`
width:  50%;
height:  250px;
font-weight: bold;
background-color: white;
border-radius: 1rem;

position: absolute;
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

const Container = styled.div`
width:  100%;
height: 50vh;
background-color: rgb(6, 37, 37);
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
width:  90%;
height: 50vh;
background-color: transparent;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Left = styled.div`
width: 50%;
height: 350px;
/* background-color: yellowgreen;  */
color: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const L1= styled.div`
width: 70%;
height: 150px;
cursor: pointer;
/* background-color: skyblue;  */
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Logo= styled(Link)`
width: 30%;
color: white;
font-size: 30px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: space-between;
text-decoration: none;
/* background-color: green */
`;
const Contact = styled.div`
width: 100%;
height: 100px;
font-size: 13px;
line-height: 30px;
cursor: pointer;
/* background-color: gray;  */
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Address= styled.div`
width: 58%;
font-size: 13px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
`;
const Telephone= styled.div`
width: 31%;
font-size: 13px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red;  */
`;
const Email= styled.div`
width: 40%;
font-size: 13px;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: red; */
`;
const L2= styled.div`
width: 30%;
height: 100px;
font-size: 13px;
line-height: 30px;
// background-color: lightblue;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

:hover{
text-decoration: underline; 
cursor: pointer;
}
`;
const Right = styled.div`
width: 50%;
height: 350px;
/* background-color: green;  */
color: white;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const R1 = styled.div`
width: 40%;
height: 100px;
font-size: 13px;
// background-color: skyblue;
line-height: 30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

:hover{
text-decoration: underline;
cursor: pointer;
}
`;
const R2= styled.div`
width: 60%;
height: 150px;
font-size: 13px;
line-height: 30px;
// background-color: lightblue;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const Socialicons= styled.div`
width: 35%;
display: flex;
justify-content: space-between;
/* background-color: red; */
`;
const Facebook= styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: hotpink;
  border: 1px solid hotpink;
}
`;
const Twitter= styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: hotpink;
  border: 1px solid hotpink;
}
`;
const Instagram= styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;

:hover{
  cursor: pointer;
  color: hotpink;
  border: 1px solid hotpink;
}
`;
const C = styled.div`
width: 85%;
font-size: 13px;
// background-color: red;
display: flex;
align-items: center;
`;