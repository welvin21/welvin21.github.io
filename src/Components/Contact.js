import React,{ Component } from 'react';
import styled from 'styled-components';
import igLogo from './images/logo/instagram.png';
import githubLogo from './images/logo/github.png';
import linkedinLogo from './images/logo/linkedin.png';

class Contact extends Component{
    render(){
        const H1WithLine = styled.h1`
            font-size : 24px;
            margin-left : 2.5%;
            font-family : "Josefin Slab";
            :hover{
                text-decoration : underline;
            }
        `;
        const imagestyle = {
            width : "50px",
            height : "50px",
        }
        const footerstyle = {
            textAlign : "left",
            paddingBottom : "2.5%",
            backgroundColor : '#536878'
        }
        const containerstyle = {
            display : "grid",
            gridTemplateColumns : "repeat(3,25%)",
            justifyContent : "space-around"
        }
        const anchorstyle = {
            display : "flex",
            flexDirection : "row"
        }
        return(
            <div style={footerstyle}>
                <h1 style = {{fontSize : "20px",marginLeft : "2.5%"}}>Hit me on social media!</h1>
                <br/>
                <div style={containerstyle}>
                    <a href="https://www.instagram.com/welvin_21/" target="_blank" style = {anchorstyle}>
                        <img src={igLogo} alt="Instagram Logo" style={imagestyle}/>
                        <H1WithLine>@welvin_21</H1WithLine>
                    </a>
                    <a href="https://github.com/welvin21" target="_blank" style = {anchorstyle}>
                        <img src={githubLogo} alt="Github Logo" style={imagestyle}/>
                        <H1WithLine>welvin21</H1WithLine>
                    </a>
                    <a href="https://www.linkedin.com/in/welvin-bun-11067b170/" target="_blank" style = {anchorstyle}>
                        <img src={linkedinLogo} alt="LinkedIn Logo" style={imagestyle}/>
                        <H1WithLine>Welvin Bun</H1WithLine>
                    </a>
                </div>
            </div>
        );
    }
}

export default Contact;
