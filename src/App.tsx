import  GlobalStyle  from './GlobalStyle';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { SVGProps } from 'react';
import Sun from './components/images/icon-sun.svg';
import Moon from './components/images/icon-moon.svg';
import Search from './components/search/Search';

interface DarkModeProps {
  isDarkMode: boolean;
}
type SVGComponent = React.SVGProps<SVGSVGElement> & DarkModeProps;

const Mode = styled.div`
 // width: 20.43rem;//
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
  margin-top: 0.5rem;
  padding: 0;
  display: flex;
  width: 5.56rem;
  height: 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => (props.isDarkMode ? '#fff' : '#4B6A9B')};
  background: ${(props) => (props.isDarkMode ? '#141d2f' : '#F6F8FF')}; 
  font-family: 'Space Mono',sans-serif;
  text-align: right;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.15625rem;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.isDarkMode ? '#90a4d4' : '#222731')};
   
  }
`;
const SunIcon = styled(ReactSVG).attrs<SVGComponent>((props) => ({
  isDarkMode: props.isDarkMode,
}))<SVGProps<SVGSVGElement> & DarkModeProps>`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #fff;
  }

  &:hover {
    svg {
      color: #90a4d4;
    }
  }
`;
const MoonIcon = styled(ReactSVG).attrs<SVGComponent>((props) => ({
  isDarkMode: props.isDarkMode,
}))<SVGProps<SVGSVGElement> & DarkModeProps>`
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #90a4d4;
   
  }

  &:hover {
    svg {
      color:#222731;
    }
  }
`;


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
    document.body.style.backgroundColor = darkMode ? '#141d2f' : '#F6F8FF'; // Change body background color
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-mode');
    document.body.style.backgroundColor = darkMode ? '#F6F8FF' : '#141d2f'; // Change body background color
  };

  return (
    <>
      <GlobalStyle />
      <Mode>
        <Title isDarkMode={darkMode}>devfinder</Title>
        <Button onClick={toggleMode} isDarkMode={darkMode}>
  {darkMode ? (
    <>
      LIGHT
      <SunIcon src={Sun} alt="Sun Icon" isDarkMode={darkMode} />
    </>
  ) : (
    <>
      DARK
      <MoonIcon src={Moon} alt="Moon Icon" isDarkMode={darkMode} />
    </>
  )}
</Button>

      </Mode>
      <Search isDarkMode={darkMode} />
      {/* Other components */}
    </>
  );
}

export default App;

