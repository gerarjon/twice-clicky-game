import React from "react";
import FriendCard from "./components/FriendCard";
import twice from "./twice.json";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends React.Component {
  state = {
    twice,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shake: false
  };

  componentDidMount() {
    this.setState({
      twice: this.shuffle(this.state.twice),
      message: "Click an image to begin!"
    }, () => console.log(`Images have been shuffed ${process.env.PUBLIC_URL}`));
  }

  handleClick = event => {
    const shuffledArray = this.shuffle(twice);
    // change initial array to shuffled array
    this.setState({twice: shuffledArray});
    // if same image is clicked, you lose; else, you win 
    this.state.clickedArray.includes(event) ? this.setState({ clickedArray: [], score: 0, message: "You guesed incorrectly!", shake: true}) : this.setState({ clickedArray: this.state.clickedArray.concat([event]), score: this.state.score + 1, message: "You guessed correctly!", shake: false});
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score});
    }
  }

  shuffle = (picturesArray) => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }

  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Container shake={this.state.shake}>
            {this.state.twice.map(friend => 
              <FriendCard
              handleClick={this.handleClick}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              id={friend.id}
              key={friend.id}
              />
            )}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
