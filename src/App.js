import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Scroll from './components/Scroll';
import Cardlist from './components/Cardlist';
import './App.css';
import Card from "./components/Card";
import './styles/Card.css';
import robots from "./robots.json";
import Nav from './components/Nav';

import Container from './components/Container';







class App extends Component {
  state = {
    message: '',
    topScore: 0,
    curScore: 0,
    robots
    


  };
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users })
    //   )
    // }
  
  };
    render(){
   
      //console.log(filterRobots);
  
        return (
          
            
          <div className="tc">
          {/* <h1 className="bg-washed-red self-center f1  pa3 mh5 shadow-3 hover-bg-gold">Kitty Clicky Game</h1> */}
            <Nav />
            <Container />
            <Scroll>
              {this.state.robots.map(robot => (
              
                <Card
                id={robot.id}
                key={robot.id}
                name={robot.name}
                 />
            ))}
              
            </Scroll>

          </div>
        )
      }
    }
  

export default App;
