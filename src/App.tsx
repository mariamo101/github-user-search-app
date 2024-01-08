import Search from './components/search/Search'
import Main from './components/mainCard/Main'
import GlobalStyle from './components/GlobalStyle';
import { useState } from "react";
import styled from "styled-components";
import Sun from './components/images/icon-sun.svg';
import Moon from './components/images/icon-moon.svg';

const Wrapper = styled.section`
 min-width:23.4rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.875rem;
  margin: 1.94rem auto 0 auto;
`;
const Title = styled.h1`
  margin: 0;
  color: #FFF;
  font-family: "Space Mono", sans-serif;
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Button = styled.button`
  margin: 0;
  display: flex;
  width: 5.5rem;
  height: 1.25rem;
  padding-left: 0.1875rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  font-family: "Space Mono", sans-serif;
  color: #FFF;
  text-align: right;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.15625rem;
  border: none;
  background: #141d2f;
  cursor: pointer;

  &:hover {
    color: #90A4D4;
  }
`;
const Img = styled.img`
  color: #fff;
`;

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    // Additional logic to change theme or styles based on the mode change
    document.body.classList.toggle("light-mode");
  };
 
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
        <Title>devfinder</Title>
        <Button onClick={toggleMode}>
          {isDarkMode ? 'LIGHT' : 'DARK' }
          <Img src={isDarkMode ? Sun : Moon} alt="Sun icon" />
        </Button>
      </Wrapper>
    <Search></Search>
    <Main></Main>
    </>
  )
}

export default App
