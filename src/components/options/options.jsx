import React from 'react';
import Play from '../play/play';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            teamAName: 'Red Team',
            teamBName: 'Blue Team',
            words: [],
            showAnswers: false,
        }
        this.index = 0;
    }

    handleInput(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmitPlay() {
        this.setState({display: false})
    }

    addWord() {
        return (e) => {
            e.preventDefault();
            this.setState({ words: [...this.state.words, e.currentTarget[0].value]}, () => this.index++)
            e.currentTarget[0].value = '';
        }
    }

    removeWord(idx) {
        return () => {
            let array = this.state.words;
            array.splice(idx, 1)
            this.setState({words: array});
        }
    }

    displayAnswers() {
        const { words, showAnswers } = this.state;
        return (!showAnswers) ? 
            <div className="answers-bank" onClick={this.toggleAnswers.bind(this)}>Show Answer Bank</div> :
            <div className="answers-bank">Answers: 
                {words.map((word, i) => <div className="answers-bank_word" key={i} onClick={this.removeWord(i).bind(this)}>{word}</div>).reverse()}
            </div>
    }

    toggleAnswers() {
        this.setState({showAnswers: !this.state.showAnswers});
    }

    displayOptions() {
        const { display } = this.state;
        if (!display) return null;

        return (
            <div className="options-display">
                <form className="options-form " onSubmit={this.addWord().bind(this)}>
                    <input type="text" className="options_input" name="word" placeholder="Add to the answers" />
                    <input type="submit" className="btn" value="Add Word/Phrase"/> 
                </form>
                <form className="options-form team-names" onSubmit={this.handleSubmitPlay.bind(this)}>
                    <label className="btn_label">Team 1's Name: </label>
                    <input type="text" className="options_input" placeholder="Red Team" onChange={this.handleInput('teamAName').bind(this)} />
                    <label className="btn_label">Team 2's Name: </label>
                    <input type="text" className="options_input" placeholder="Blue Team" onChange={this.handleInput('teamBName').bind(this)} />
                    <div className="answers-bank_container">{this.displayAnswers()}</div>
                    <input type="submit" className="btn" value="Start Game"/>
                </form>
            </div>
        )
    }

    displayPlay() {
        const { teamAName, teamBName, words, display } = this.state;
        if (display) return null;

        return (
            <Play
                teamAName={teamAName}
                teamBName={teamBName}
                words={words}
            />
        )
    }

    render() {
       
        return (
            <div className="options-main">
                {this.displayOptions()}
                {this.displayPlay()}
            </div>
        )
    }
}

export default Options;