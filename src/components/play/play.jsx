import React from 'react';
import Modal from '../modals/modal';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamAPoints: 0,
            teamBPoints: 0,
            word: '',
            modal: 'roundScreen',
            words: this.props.words,
            time: this.props.time,
            playingTeam: this.props.first,
            round: 1,
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            if (this.state.time > 1) {
                this.setState((prevState) => ({
                    time: prevState.time - 1,
                }))
            } else {
                this.setState({modal: 'roundScreen', time: this.props.time, playingTeam: !this.state.playingTeam})
                clearInterval(this.timer);
            }
        }, 1000);
    }

    closeModal() {
        this.setState({modal: null});
    }

    shuffleWords() {
        let wordsArr = [...this.props.words];
        for (let i = wordsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
        }
        let displayWord = wordsArr.pop();
        this.setState({word: displayWord, words: wordsArr});
    }

    correctWord() {
        const { words, playingTeam, teamAPoints, teamBPoints } = this.state;
        let wordsArr = [...words];
        if (wordsArr.length === 0) {
            this.endRound();
        } else {
            let displayWord = wordsArr.pop();
            if (playingTeam) {
                this.setState({ word: displayWord, words: wordsArr, teamAPoints: teamAPoints+1 });
            } else {
                this.setState({ word: displayWord, words: wordsArr, teamBPoints: teamBPoints+1 });
            }
        }
    }

    endRound() {
        const { playingTeam, teamAPoints, teamBPoints, round } = this.state;

        if (playingTeam) {
            this.setState({ teamAPoints: teamAPoints + 1, time: 0 });
        } else {
            this.setState({ teamBPoints: teamBPoints + 1, time: 0 });
        }
        
        if (round === 3) {
            this.setState({ 
                modal: 'endScreen', 
                time: this.props.time, 
                playingTeam: !playingTeam });
            clearInterval(this.timer);
        } else {
            this.setState({ 
                modal: 'roundScreen', 
                time: this.props.time, 
                playingTeam: !playingTeam, 
                round: round+1 });
            clearInterval(this.timer);
            this.shuffleWords();
        };
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
        const { teamAPoints, teamBPoints, modal, playingTeam } = this.state;
        const teamA = {name: teamAName, points: teamAPoints}
        const teamB = {name: teamBName, points: teamBPoints}
        return (
            <div className="play-main">
                <Modal modal={modal} startRound={this.startRound.bind(this)} teamA={teamA} teamB={teamB} playingTeam={playingTeam} />
                <div className="play-container">
                    <h1 className="play-timer">{this.state.time}</h1>
                    <h2 className="play-display-word">{this.state.word}</h2>
                    <div className="play-btn-container">
                        <button className="btn play-btns" onClick={this.correctWord.bind(this)}>Correct</button>
                        <button className="btn play-btns" onClick={this.passWord.bind(this)}>Pass</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Play;