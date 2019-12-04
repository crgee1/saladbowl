import React from 'react';
import Modal from '../modal/modal';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamAPoints: 0,
            teamBPoints: 0,
            word: '',
            modal: null,
            words: this.props.words
        }
    }

    roundStartModal() {
        this.setState({modal: 'startScreen'})
    }

    pickWordsModal() {

    }

    stateRound() {
        return () => {
            this.setState({words: this.props.words});
        }
    }

    displayWord() {
        return () => {
            let wordsArr = [...this.state.words];
            for (let i = wordsArr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
            }
            console.log(wordsArr.pop());
            this.setState({words: wordsArr});
        }
    }

    reset() {
        return () => {
            this.setState({words: this.props.words});
        }
    }

    render() {
        const { teamAName, teamBName, words } = this.props;
        const { teamAPoints, teamBPoints } = this.state;

        return (
            <div className="play-main">
                <Modal modal={this.state.modal}/>
                <div>Team: {teamAName}</div>
                <div>Points: {teamAPoints}</div>
                <div>Team: {teamBName}</div>
                <div>Points: {teamBPoints}</div>
                <div>{words.join(', ')}</div>
                <button onClick={this.stateRound().bind(this)}>Start Round</button>
                <button onClick={this.displayWord().bind(this)}>New Word</button>
                <button onClick={this.reset().bind(this)}>Reset</button>
            </div>
        )
    }
}

export default Play;