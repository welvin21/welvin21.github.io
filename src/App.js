import React,{ Component } from 'react';
import { Route, Link, BrowserRouter as Router} from 'react-router-dom';
import AboutMe from "./Components/AboutMe.js";
import Contact from "./Components/Contact.js";
import Projects from "./Components/Projects.js";
import Reimburse from "./Components/Reimburse.js";
import Greenwall from "./Components/Greenwall.js";
import { Layout } from 'antd';
import './App.css';

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {

    render(){
        const headerstyle = {
            display : "grid",
            gridTemplateColumns : "repeat(3,1fr)",
            alignContent : "center",
            height : "auto"
        }
          return (
            <div className="App">

              <Layout>
                <Router>
                    <Header style={headerstyle}>
                        <Link to="/">About Me</Link>
                        <Link to="Welvin Bun 2019.pdf" target="_blank">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </Header>
                    <Content>
                        <div>
                            <Route exact path="/" component = {AboutMe}/>
                            <Route exact path="/projects" component = {Projects}/>
                            <Route exact path="/projects/reimburse" component = {Reimburse}/>
                            <Route exact path="/projects/greenwall" component = {Greenwall}/>
                        </div>
                    </Content>
                </Router>
                <Footer style={{padding : 0}}><Contact/></Footer>
              </Layout>
            </div>
          );
    }
}

export default App;
