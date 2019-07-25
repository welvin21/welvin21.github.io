import React, { Component } from 'react';
import { Route, Link, HashRouter as Router} from 'react-router-dom';
import { Carousel } from 'antd';
import './Reimburse.css';
import finhackImage from './images/finhack2019.jpg';
import background2 from './images/background2.jpg';

class Reimburse extends Component {
    render(){
        return(
            <div>
                <Carousel autoplay>
                    <div>
                        <h1>Project Overview</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default Reimburse;
