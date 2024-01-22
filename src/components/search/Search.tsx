import styled from "styled-components"
import { useState } from "react";
import Ssvg from '../images/icon-search.svg'

const Finde = styled.section`
border-radius: 0.9375rem;
background: #1E2A47;
margin: 1.94rem auto 0 auto;
display:flex;
align-items:center;
padding: 0.41rem 0.44rem 0.47rem  1rem;
`;
const Input = styled.input.attrs({ type: "text"})`
width:11.5rem;
margin: 0 2.44rem 0 0.66rem;
background: #1E2A47;
border:none;
color:#fff;
&::placeholder {
    color: #fff;
  }
outline: none;
font-family: "Space Mono", sans-serif;
font-size: 0.8125rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 192.308% */
    
`;
const Button = styled.button`
width: 5.25rem;
height: 2.875rem;
border-radius: 0.625rem;
border:none;
background: #0079FF;
padding: 0.78rem 1rem;
color: #FFF;
font-family: Space Mono;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
&:hover{
  background-color: #60ABFF;
}
`

export default  function Search (){

  const[searchUser , setSearchUser] = useState ('')
  const[user, setUser] = useState([]);

  const handleInputChange = (e) => {
    setSearchUser(e.target.value);
    
  };
  const handleSearch = () => {
    setUser([])
    setSearchUser('')

    // Perform search or any action with the searchUser state value
    console.log("Search User:", searchUser);
  };

    return(
        <>
        <Finde>
        <img src={Ssvg}></img>
       <Input   placeholder="Search GitHub username…"
        value={searchUser}
        onChange={handleInputChange}></Input>
       <Button
       onClick={handleSearch}
       >
        Search</Button>
        </Finde>
        </>
    )
}