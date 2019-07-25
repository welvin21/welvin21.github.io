import React, { Component } from 'react';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
import {Pagination} from 'antd';
import Reimburse from './Reimburse.js';
// import styled from 'styled-components';
import background from './images/background1.jpg';
import projectimg1 from './images/finhack2019.jpg';
import projectimg2 from './images/greenwall.jpg';
import './Projects.css';

class Projects extends Component{
    render(){
        const containerstyle = {
            display : "grid",
            padding : "30px 0",
            gridGap : "20px",
            backgroundImage : "url(" +background+")",
            backgroundSize : "cover"
        }
        const imagestyle = {
            width : "100%",
            borderBottomLeftRadius : "20px",
            borderTopLeftRadius : "20px",
            height : "100%"
        }
        const descriptionstyle = {
            display : "grid",
            padding : "10px 0",
            gridTemplateRows : "40% 60%",
            backgroundColor : "#43455C",
            borderBottomRightRadius : "20px",
            borderTopRightRadius : "20px",
            height : "100%"
        }

        return(
            <div  style={containerstyle}>
                <Router>
                    <Link to="/projects/reimburse" target="_blank"  className = "project">
                        <img src={projectimg1} style={imagestyle}/>
                        <div style = {descriptionstyle}>
                            <h1 style={{fontSize : "36px"}}>Re-imburse</h1>
                            <p style={{fontFamily : "Satisfy",fontSize : "20px"}}>A friendly solution to employee reimbursement process. </p>
                        </div>
                    </Link>
                    <Link to="/projects/greenwall" target="_blank" className = "project">
                        <img src={projectimg2} style={imagestyle}/>
                        <div style = {descriptionstyle}>
                            <h1 style={{fontSize : "36px"}}>Smart Green Wall</h1>
                            <p style={{fontFamily : "Satisfy",fontSize : "20px"}}>Self-watering green wall which is easy to be integrated everywhere</p>
                        </div>
                    </Link>
                </Router>
            </div>
        );
    }
}

export default Projects;
