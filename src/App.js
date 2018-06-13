import React, { Component } from 'react';
import './App.css';
import Scroll from './components/Scroll';
import './App.css';
import Card from "./components/Card";
import './styles/Card.css';
import robots from "./robots.json";
import Nav from './components/Nav';

import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {
  state = {
    message: '',
    score: 0,
    topScore: 0,
    robots,
    clicked: []
    }
 
componentDidMount() {
  }
 shuffleRobots = arr => {
    arr.sort((a, b) => Math.random() - 0.5)
    return arr;
    
}

clickKitten = event => { 
  console.log(event.target);
  const curKitten =event.target.alt;
  const clickedKit = this.state.clicked.indexOf(curKitten)> -1;
  if(clickedKit) {
    //alert("You guessed incorrectly!");
    this.setState({
      message: 'You guessed incorrectly!',
      clNm: 'tc red f3  dib  w-40',
      robots:this.shuffleRobots(robots),
      clicked: [],
      score: 0,
      topScore: 0,
      topScore: (this.state.score>this.state.topScore) ? this.state.score : this.state.topScore
    })
  } else{
    this.setState({
      message: "You guessed correctly!",
      robots: this.shuffleRobots(robots),
      clNm: ('tc green f3  dib  w-40'),
      clicked: this.state.clicked.concat(curKitten),
      score: this.state.score +1,
  }, () => {
      if (this.state.score === 18) {
//alert ("You win!");
this.setState({
  message: 'You win!',
  clNm: 'tc light-purple f3  dib  w-40',
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
          <div>
            <Nav 
            score={this.state.score}
            message={this.state.message}
            topScore={this.state.topScore}
            clNm={this.state.clNm}
            
             />
            <Scroll>
            <Container />
            
              {this.state.robots.map(robot => (
              
                <Card
                clickKitten={this.clickKitten}
                id={robot.id}
                key={robot.id}
                name={robot.name}
                />
            ))}
            </Scroll>
            <Footer />
          </div>
        )
      }
    }
  

export default App;
