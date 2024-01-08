import styled from "styled-components"
import HeadSection from "../userInfo/HeadSection"


const MainCard = styled.section`
width: 20.4375rem;
height: 32.3125rem;
border-radius: 0.9375rem;
background: #1E2A47;
margin: 1rem auto  4.94rem auto;
padding: 2rem 1.5rem 3rem 1.5rem;
display:flex;
flex-direction:column;
align-items:center;
`

export default function Card (){
    return(
        <>
        <MainCard>
        <HeadSection></HeadSection>
        </MainCard>
        </>
    )
}