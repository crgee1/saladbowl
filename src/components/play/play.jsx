import React from 'react';
import Modal from '../modal/modal';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamAPoints: 0,
            teamBPoints: 0,
            word: '',
            modal: 'roundScreen',
            words: this.props.words,
            time: 10,
        }
    }

    startTimer() {
        let timer = setInterval(() => {
            if (this.state.time > 1) {
                this.setState((prevState) => ({
                    time: prevState.time - 1,
                }))
            } else {
                this.setState({modal: 'roundScreen', time: 10})
                clearInterval(timer);
            }
        }, 1000);
    }

    closeModal() {
        this.setState({modal: null});
    }

    roundStartModal() {
        this.setState({modal: 'startScreen'})
    }

    stateRound() {
        return () => {
            this.setState({words: this.props.words});
        }
    }

    shuffleWords() {
        let wordsArr = [...this.state.words];
        for (let i = wordsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
        }
        let displayWord = wordsArr.pop();
        this.setState({word: displayWord, words: wordsArr});
    }

    correctWord() {
        let wordsArr = [...this.state.words];
        let displayWord = wordsArr.pop();
        this.setState({ word: displayWord, words: wordsArr });
    }

    passWord() {
        let wordsArr = [...this.state.words];
        wordsArr.unshift(this.state.word);
        let displayWord = wordsArr.pop();
        this.setState({ word: displayWord, words: wordsArr });
    }

    reset() {
        return () => {
            this.setState({words: this.props.words});
        }
    }

    startRound() {
        this.startTimer();
        this.closeModal();
        this.shuffleWords();
    }

    render() {
        const { teamAName, teamBName } = this.props;
        const { teamAPoints, teamBPoints } = this.state;
        const teamA = {name: teamAName, points: teamAPoints}
        const teamB = {name: teamBName, points: teamBPoints}

        return (
            <div className="play-main">
                <Modal modal={this.state.modal} startRound={this.startRound.bind(this)} teamA={teamA} teamB={teamB}/>
                <div>{this.state.time}</div>
                <div>{this.state.word}</div>
                <button onClick={this.correctWord.bind(this)}>Correct</button>
                <button onClick={this.passWord.bind(this)}>Pass</button>
                <button onClick={this.reset().bind(this)}>Reset</button>
            </div>
        )
    }
}

export default Play;