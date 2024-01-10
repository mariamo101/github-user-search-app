import styled from "styled-components"
import UserInfo from "../userInfo/AboutUser"
import Followers from "../userInfo/Followers"
import Links from '../userInfo/Links'


const MainCard = styled.section`
width: 20.4375rem;
height: 32.3125rem;
border-radius: 0.9375rem;

margin: 1rem 1.5rem  2rem 1.5rem;
padding: 2rem 1.5rem 3rem 1.5rem;
display:flex;
flex-direction:column;
align-items:center;
`

export default function Card (){
    return(
        <>
        <MainCard>
        <UserInfo></UserInfo>
        <Followers></Followers>
        <Links></Links>
        </MainCard>
        </>
    )
}