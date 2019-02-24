import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import Header from "./Header";
import characters from "./characterList.json";
import "./style.css";

class GamePage extends Component {
    state = {
        characters,
        hasClicked: [],
        score: 0,
        highScore: 0,
        info: "Click an image to begin, don't click on the same image twice!"
    }

    /**
     * Randomly shuffle an array
     * https://stackoverflow.com/a/2450976/1293256
     * @param  {Array} array The array to shuffle
     * @return {String}      The first item in the shuffled array
     */
    shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;

    };

    handleCharClick = (char) => {
        if(!this.state.hasClicked.includes(char)){
            var temp = this.state.hasClicked;
            var info = "Correct!";
            temp.push(char);
            console.log(temp);
            if(this.state.hasClicked.length === 9) {
                temp = [];
                info = "All images clicked, keep going!";
            }
            var tempScore = this.state.score + 1;
            if(this.state.highScore < tempScore) {
                this.setState({highScore: tempScore});
            }
            this.setState({hasClicked: temp, score: tempScore, info: info});
            console.log(this.state);
        }
        else {
            this.setState({hasClicked: [], score: 0, info: "You guessed wrong, score reset!"});
            console.log("Score reset");
        }
        var newCharArray = this.shuffle(this.state.characters);
        this.setState({characters: newCharArray})
    };

    render() {
        return (
            <div className="container">
                <Header 
                    info={this.state.info}
                    score={this.state.score}
                    highScore={this.state.highScore}
                />
                <div className="char-list"> 
                    {this.state.characters.map(char => (
                        <CharacterCard
                        key={char.name} 
                        name={char.name}
                        image={char.image}
                        onClick={this.handleCharClick}
                        />
                    ))}

                </div>
            </div>
        )
    }
}

export default GamePage;
