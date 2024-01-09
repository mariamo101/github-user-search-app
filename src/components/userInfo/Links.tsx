import styled from "styled-components"
import location from "../images/icon-location.svg"
import company from "../images/icon-company.svg"
import twitter from "../images/icon-twitter.svg"
import website from "../images/icon-website.svg"


const IconContainer = styled.div`
    
`

export default function links (){
    return(
    <>
    <IconContainer>
        <img src={location}></img>
        <img src={website}></img>
        <img src={twitter}></img>
        <img src={company}></img>
    </IconContainer>
    </>
    )
}