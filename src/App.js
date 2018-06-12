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
    score: 0,
    topScore: 0,
    robots,
    clicked: []
    


  };
 
  componentDidMount() {

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users })
    //   )
    // }
  
  };
 shuffleRobots = arr => {
    arr.sort((a, b) => Math.random() - 0.5);
    return arr;
    
};

clickKitten = event => { 
  console.log(event.target);
  const curKitten =event.target.alt;
  const clickedKit = this.state.clicked.indexOf(curKitten)> -1;
  if(clickedKit) {
    alert("You lost!");
    this.setState({
      message: 'You lost!',

      robots:this.shuffleRobots(robots),
      clicked: [],
      score: 0,
      topScore: 0,
      topScore: (this.state.score>this.state.topScore) ? this.state.score : this.state.topScore

    })
  } else{
    this.setState({
      message: "Go",
      robots: this.shuffleRobots(robots),
      clicked: this.state.clicked.concat(curKitten),
      score: this.state.score +1,
      //topScore: this.state.topScore +1

    }, () => {
      if (this.state.score === 18) {
alert ("You win!");
this.setState({
  message: 'You win!',

  robots: this.shuffleRobots(robots),
  clicked: [],
  score: 0,
  topScore: this.state.topScore

})

      }
    })
  }
 }
    render(){
   
      //console.log(filterRobots);
  
        return (
          
            
          <div className="tc">
          {/* <h1 className="sc">Kitty Clicky Game</h1> */}
            <Nav 
            score={this.state.score}
            message={this.state.message}
            topScore={this.state.topScore}
             />
            <Container />
            <Scroll>
              {this.state.robots.map(robot => (
              
                <Card
                clickKitten={this.clickKitten}
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
