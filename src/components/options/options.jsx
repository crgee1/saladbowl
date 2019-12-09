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
            first: 'random',
            time: 1,
        }
        this.index = 0;
        this.updateFirst = this.updateFirst.bind(this);
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

    addWord(e) {
        e.preventDefault();
        this.setState({ words: [...this.state.words, e.currentTarget[0].value]}, () => this.index++)
        e.currentTarget[0].value = '';
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
            <div className="answers-bank" onClick={this.updateAnswers.bind(this)}>Show Answer Bank</div> :
            <div>
                <div className="answers-bank" onClick={this.updateAnswers.bind(this)}>Hide Answer Bank</div>
                Answers: {words.length}
                {words.map((word, i) => <div className="answers-bank-word" key={i} onClick={this.removeWord(i).bind(this)}>{word}</div>).reverse()}
            </div>
    }

    updateFirst(e) {
        let input;
        if (e.target.value === 'true') input = true;
        if (e.target.value === 'false') input = false;
        if (e.target.value === 'random') input = 'random';
        
        this.setState({first: input});
    }

    updateAnswers() {
        this.setState({showAnswers: !this.state.showAnswers});
    }

    updateTimer(e) {
        this.setState({time: e.currentTarget.value})
    }

    displayOptions() {
        const { display } = this.state;
        if (!display) return null;

        return (
            <div className="options-display">
                <div className="options-display-left">
                    <form className="options-form team-names" onSubmit={this.handleSubmitPlay.bind(this)}>
                        <label className="btn_label">Team 1's Name: </label>
                        <input type="text" className="options-input" placeholder="Red Team" onChange={this.handleInput('teamAName').bind(this)} />
                        <label className="btn_label">Team 2's Name: </label>
                        <input type="text" className="options-input" placeholder="Blue Team" onChange={this.handleInput('teamBName').bind(this)} />
                        <div className="first-team" onChange={this.updateFirst}>
                            <h4>Who goes's first?</h4>
                            <div className="options-radio" >
                                <input type="radio" name="first" value={true}/>Team 1
                            </div>
                            <div className="options-radio">
                                <input type="radio" name="first" value={false}/>Team 2
                            </div>
                            <div className="options-radio">
                                <input type="radio" name="first" value="random" defaultChecked/>Random
                            </div>
                        </div>
                        <div className="time-limit" >
                            <h4>Turn Timer</h4>
                            <input type="number" defaultValue="60" onChange={this.updateTimer.bind(this)}/>
                        </div>
                        <input type="submit" className="btn" value="Start Game" />
                    </form>
                </div>
                <div className="options-display-right">
                    <form className="options-form-answers" onSubmit={this.addWord.bind(this)}>
                        <label>Add to the Answer Bank</label>
                        <section>
                            <input type="text" className="options-input" placeholder="Add to the answers" />
                            <input type="submit" className="btn" value="Add Word/Phrase" />
                        </section>
                    </form>
                    <div className="answers-bank-container">{this.displayAnswers()}</div>
                </div>
            </div>
        )
    }

    displayPlay() {
        let { display, teamAName, teamBName, words, first, time } = this.state;
        if (display) return null;

        let firstTeam = first; 
        if (firstTeam === 'random') {
            let random = Math.floor(Math.random() * 2);
            firstTeam = random === 0 ? true : false;
        } 

        return (
            <Play
                time={time}
                first={firstTeam}
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