
import styled from "styled-components";
import bg from "../assets/Background.png";
import NavBar from "./NavBar.js"
import {Link} from 'react-router-dom';

function Dates() {


  return (
    <Container bg={bg}>
      <NavBar />
      <Wrapper>
        <Text>
          <Header>
             Enter your intended dates of arrival and departure:
          </Header>
        </Text>
        <Bars>
            <SearchBar placeholder = "When are you arriving?" style={{width: "40%"}}/>
            <SearchBar placeholder = "When are you leaving?" style={{width: "40%"}}/>
        </Bars>
      </Wrapper>
      <LinkBox>
          <Link to ="/GetStarted" ><Button>
            {String.fromCharCode(8592)}
              </Button> </Link>
              <Link to ="/Interests" ><Button>
            {String.fromCharCode(8594)}
              </Button> </Link>
        </LinkBox>

    </Container>

  );
  
};


const Img = styled.img`
  width: 100%;
`;

const LinkBox = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: relative;
align-items: center;
flex-wrap: wrap;
max-width: 100%;
margin: auto;
column-gap: 1rem;
`;

const Bars = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 3rem;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  max-width = 100%;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
`;

const Bios = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const magGlass = styled.svg`
  height: 2rem;
  width: auto;
  background-color: #FFF;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
`;

const SearchBar = styled.input`
  type: text;
  padding: 1.5rem 1rem;
  margin: 8px 0;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;

`;

const Picture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  padding: 0rem 0rem 0rem 0rem;
  flex-wrap: wrap;

  img {
    max-width: 75%;
    height: auto;  
  }

`;

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100%;
  margin: auto;
  width: 100%;

  background-image: url(${({ bg }) => bg});
  background-size: fill;
  background-position: center;
  overflow-x: hidden;
  background-color: #000;
`;

const Wrapper = styled.div`
    padding: 1rem 0rem 10rem 2rem;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
    padding: 1rem 0rem;
    font-size: 2rem;
`;

const BodyText = styled.div`
    padding: 1rem 0rem 2rem 0rem;
    font-size: 1.5rem;
`;

const Button = styled.button`
  font-size: 1.25rem;
  background: #FF3636;
  border: none;
  padding: 0.8rem 0.9rem;
  color: #fff;
  border-radius: 2rem;
  box-shadow: 0px 13px 24px -7px ##FF3636;
  transition: all 0.2s ease-in-out;
  justify-content: down;
  align-items: center;
  margin-left: 0rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

export default Dates;