import React from 'react';
import Play from '../play/play';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            teamAName: 'Red Team',
            teamBName: 'Blue Team',
            words: []
        }
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmitPlay() {
        return () => {
            this.setState({display: false})
        }
    }

    addWord() {
        return (e) => {
            e.preventDefault();
            this.setState({words: [...this.state.words, e.currentTarget[0].value]})
            e.currentTarget[0].value = '';
        }
    }

    displayOptions() {
        const { display } = this.state;
        if (!display) return null;

        return (
            <div className="options-display">
                <form className="options-form " onSubmit={this.addWord().bind(this)}>
                    <input type="text" name="word" placeholder="Add to the word pool" />
                    <input type="submit" value="Add Word/Phrase"/> 
                </form>
                <form className="options-form team-names" onSubmit={this.handleSubmitPlay().bind(this)}>
                    <label >Team 1's Name: </label>
                    <input type="text" placeholder="Red Team" onChange={this.handleInput('teamAName').bind(this)} />
                    <label >Team 2's Name: </label>
                    <input type="text" placeholder="Blue Team" onChange={this.handleInput('teamBName').bind(this)} />
                    <input type="submit" value="Start Game"/>
                </form>
            </div>
        )
    }

    render() {
        const { teamAName, teamBName, words } = this.state;

        return (
            <div className="options-main">
                {this.displayOptions()}
                <Play 
                teamAName={teamAName}
                teamBName={teamBName}
                words={words}
                />
            </div>
        )
    }
}

export default Options;