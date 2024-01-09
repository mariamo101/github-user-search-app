import  GlobalStyle  from './GlobalStyle';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sun from './components/images/icon-sun.svg';
import Moon from './components/images/icon-moon.svg';

interface DarkModeProps {
  isDarkMode: boolean;
}
const Mode = styled.div`
  width: 20.43rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.875rem;
  margin-top: 1.94rem ;
`;

const Title = styled.h1<DarkModeProps>`
  width: 8rem;
  margin: 0;
  color: ${(props) => (props.isDarkMode ? '#FFF' : '#000')};
  font-size: 1.625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Button = styled.button<DarkModeProps>`
  margin: 0;
  padding: 0;
  display: flex;
  width: 5.56rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => (props.isDarkMode ? '#FFF' : '#000')};
  background: #141d2f;
  text-align: right;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.15625rem;
  border: none;
  cursor: pointer;

  &:hover {
    color: #90a4d4;
  }
`;
const Img = styled.img<DarkModeProps>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${(props) => (props.isDarkMode ? '#FFF' : '#000')};
`;


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
    document.body.style.backgroundColor = darkMode ? '#141d2f' : '#FFFFFF'; // Change body background color
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
    document.body.style.backgroundColor = darkMode ? '#FFFFFF' : '#141d2f'; // Change body background color
  };

  return (
    <>
      <GlobalStyle />
      <Mode>
        <Title isDarkMode={darkMode}>devfinder</Title>
        <Button onClick={toggleMode} isDarkMode={darkMode}>
          {darkMode ? 'LIGHT' : 'DARK'}
          <Img src={darkMode ? Sun : Moon} alt="Mode Icon" isDarkMode={darkMode} />
        </Button>
      </Mode>
      {/* Other components */}
    </>
  );
}

export default App;