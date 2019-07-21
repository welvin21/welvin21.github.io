import React,{ Component } from 'react';
import { Card } from 'antd';
import myself from './images/myself.jpg';
import background1 from './images/background1.jpg';

const { Meta } = Card;


class AboutMe extends Component {
    render(){
        const imgstyle = {
            borderRadius : "50%",
            height : "160px",
            width : "160px",
            margin : "10px 30px 0 30px",
            border : "0.5px solid grey"
        }
        const mainstyle = {
            display : "grid",
            gridTemplateColumns : "220px auto",
        }
        const cardstyle = {
            height : "auto",
            width : "100%"
        }
        const contentstyle = {
            width : "100%"
        }
        const h1style = {
            position : "absolute",
            top : "100px",
            left : "230px",
            Zindex : "1",
            color : "#1766e6",
            fontFamily : "Dosis",
            fontSize : "46px"
        }
        const pstyle = {
            position : "absolute",
            top : "180px",
            left : "230px",
            Zindex : "1",
            color : "#000",
            fontFamily : "Dosis",
            fontSize : "24px",
            textAlign : "left"
        }
        return (
            <div style={mainstyle}>
                <Card
                   style={cardstyle}
                   cover={<img src={myself} style={imgstyle}/>}
                 >
                   <Meta title="Hi, I am Welvin!" description="HKU Computer Science 22'" />
                   <br/>
                   <hr/>
                   <br/>
                   <p style = {{fontSize : "12px"}}>
                        <strong>I am not</strong> : a social media influencer, gymaniac, hardcore gamer, good chef. <strong>I am</strong> :
                        a coder who loves science fiction and addicted to coffee!
                   </p>
                 </Card>
                 <div style={contentstyle}>
                    <img src={background1} style={{height : "100%", width : "100%", Zindex:"0",opacity : "0.7"}}/>
                    <h1 style={h1style}>Welcome to my personal website!</h1>
                    <br/>
                    <p style={pstyle}>
                        This website contains everything about myself ranging from academic journey to travel journal.
                        I created this previously because I wanted to have a solid online resume with good design.
                        As I build it, I realized that it could be more than that. So, I decided to put this and that,
                        and here we are!
                        <br/>

                    </p>
                 </div>

            </div>
        );
    }
}


export default AboutMe;
