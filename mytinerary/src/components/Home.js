
import styled from "styled-components";
import image from "../assets/Logo.png";
import bg from "../assets/Background.png";
import AboutUs from './AboutUs';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from "./NavBar.js"

const Body = () => {


  return (
    <Container bg={bg}>
        <NavBar />
        <Wrapper>
            <Header>
                Personalized Itineraries
            </Header>
            <BodyText>
                Plan your next trip in minutes. Using our algorithm, we will generate an itinerary based on your interests and desired location.
            </BodyText>
        
            <Button>
                {"Get Started  "}
                {String.fromCharCode(8594)}
            </Button>
        </Wrapper>

    </Container>

    
    // {/* <Router>
    //     <Routes>
    //         <Route path="/AboutUS" component={AboutUs}/>
    //     </Routes>
    // </Router>  */}

  );
  
};


const Img = styled.img`
  width: 100%;
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
`;

const Wrapper = styled.div`
    padding: 0rem 0rem 20rem 2rem;
    color: #FFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Header = styled.div`
    padding: 1rem 0rem;
    font-size: 3rem;
`;

const BodyText = styled.div`
    padding: 1rem 0rem 2rem 0rem;
    font-size: 1.5rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  background: #FF3636;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 0.75rem;
  box-shadow: 0px 13px 24px -7px ##FF3636;
  transition: all 0.2s ease-in-out;
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

export default Body;