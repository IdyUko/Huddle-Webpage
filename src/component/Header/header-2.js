import React from "react";
import styled from "styled-components"
import { Link} from "react-router-dom";


const Header = () => {
  return(
    <Div>
        <Wrapper>
            <Left>
                <Logo to="/"><img src= "/logo.svg"  alt="logo"/></Logo>
            </Left>

            <Right>
            <Nav to= "/">Home</Nav>
                <Nav to= "/about">About Us</Nav>
                <Nav  to= "/services">Services</Nav>
                <Nav to= "/contact">Contact Us</Nav>
                <Button to="/SignUp">Try it Free</Button>
            </Right>
        </Wrapper>
    </Div>
  )
};

export default Header;

const Div = styled.div`
color: black;
background-color: grey;
width: 100%;
height: 70px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`;
const Wrapper = styled.div`
background-color: powderblue;
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
// background-color: yellow;
width: 20%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Logo = styled(Link)`
width: 120px;
height: 30px;

img{
	width: 100%;
	// background-color: blue;
}
`;
const Right = styled.div`
// background-color: green;
width: 40%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Nav = styled(Link)`
text-decoration: none;
color: black;
:hover{
color: blue;
cursor: pointer;
transition: all 0.5ms;
font-size: 20px;
}
`;
const Button = styled(Link)`
width: 120px;
text-decoration: none;
background-color: white;
text-decoration: none;
color: grey;
padding: 0.5rem 1.2rem;
border-radius: 50px;
font-weight: bold;
cursor: pointer;
transition: all 1s;
box-shadow: -8px  -8px  15px rgba(255,  255,  255,  0.1), 5px  5px  15px rgba(0,  0,  0,  0.2);
`;

