import styled from "styled-components"

const User = styled.section`
    display: flex;
    width: 17.4375rem;
    flex-direction: row;
    flex-wrap: wrap;
`

const UserImg = styled.img`
width: 4.375rem;
height: 4.375rem;
border-radius: 4.375rem;
background: url(<path-to-image>), lightgray 50% / cover no-repeat;
margin: 0 1.25rem 2rem 0;
`
const About = styled.p`
font-family: 'Space Mono',sans-serif;
font-size: 0.8125rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Summery = styled.p`
    width: 17.4375rem;
    height:5rem;
    margin-bottom:1.44rem;
`
export default function UserSection (){
    return(
        <>
        <User>
        <UserImg></UserImg>
        <About>helo helo helo</About>
        <Summery> 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
        </Summery>
        </User>
        </>
    )
}