import React from 'react';
import Play from '../play/play';
import { Link } from 'react-router-dom';

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            teamAName: sessionStorage.getItem('teamAName') || 'Red Team',
            teamBName: sessionStorage.getItem('teamBName') ||'Blue Team',
            words: JSON.parse(sessionStorage.getItem('words')) || [],
            showAnswers: false,
            first: 'random',
            time: sessionStorage.getItem('time') || 60,
            pause: false,
            sound: false,
        }
        this.updateFirst = this.updateFirst.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.toggleInput = this.toggleInput.bind(this);
    }

    updateInput(field) {
        return (e) => {
            e.preventDefault();
            let ele = e.target.value;
            this.setState({ [field]: ele }, () => sessionStorage.setItem(field, ele));
        };
    }

    toggleInput(field) {
        return (e) => {
            e.preventDefault();
            this.setState({ [field]: !this.state[field] });
        }
    }

    addWord(e) {
        e.preventDefault();
        if (e.currentTarget[0].value.length === 0) {
            alert('Answer can not be blank');
        } else {
            const newWord = e.currentTarget[0].value;
            this.setState({ words: [...this.state.words, newWord] }, () => sessionStorage.setItem('words', JSON.stringify(this.state.words)))
            e.currentTarget[0].value = '';
        }
    }
    
    removeWord(idx) {
        return () => {
            let array = this.state.words;
            array.splice(idx, 1)
            this.setState({words: array}, () => sessionStorage.setItem('words', JSON.stringify(array)));
        }
    }
    
    displayAnswers() {
        const { words, showAnswers } = this.state;
        return (!showAnswers) ? 
        <div className="answers-bank" onClick={this.toggleInput('showAnswers')}>Show Answer Bank</div> :
        <div>
                <div className="answers-bank" onClick={this.toggleInput('showAnswers')}>Hide Answer Bank</div>
                Answers: {words.length}
                {words.map((word, i) => <div className="answers-bank-word" key={i} onClick={this.removeWord(i).bind(this)}>{word}</div>).reverse()}
            </div>
    }
    
    startResume() {
        const { display, words } = this.state;
        if (words.length === 0) {
            alert("Your answer bank is looking pretty empty")
        } else if (display) {
            this.setState({ display: false })
        } else {
            this.setState({pause: false});
        }
    }

    updateFirst(e) {
        let input;
        if (e.target.value === 'true') input = true;
        if (e.target.value === 'false') input = false;
        if (e.target.value === 'random') input = 'random';
        
        this.setState({first: input});
    }

    displaySound() {
        const { sound } = this.state;
        return (
            <div className="sound-effects" onClick={this.toggleInput('sound')}>
                <i className={"fas" + (sound ? " fa-volume-up" : " fa-volume-mute")}></i>
            </div>)
    }

    displayQuestion() {
        const { pause } = this.state;
        if (pause) return null;
        return (
            <div className="question-mark"><Link to="/how-to" onClick={() => console.log('here')}><i className="fas fa-question"></i></Link></div>
        )
    }

    displayOptions() {
        const { display, pause } = this.state;
        if (!display && !pause) return null;

        return (
            <div className="options-display">
                <div className="options-btn-container">
                    {this.displaySound()}
                    {this.displayQuestion()}
                </div>
                <div className="options-display-left">
                    <form className="options-form team-names" onSubmit={this.startResume.bind(this)}>
                        <label className="btn-label">Team 1's Name: </label>
                        <input type="text" className="options-input" value={this.state.teamAName} onChange={this.updateInput('teamAName')} />
                        <label className="btn-label">Team 2's Name: </label>
                        <input type="text" className="options-input" value={this.state.teamBName} onChange={this.updateInput('teamBName')} />
                        <div className="first-team" onChange={this.updateFirst}>
                            <h4>Who goes first?</h4>
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
                            <input type="number" className="options-input" value={this.state.time} onChange={this.updateInput('time')}/>
                        </div>
                        <input type="submit" className="btn" value={pause ? "Resume Game" : "Start Game"} />
                    </form>
                </div>
                <div className="options-display-right">
                    <form className="options-form-answers" onSubmit={this.addWord.bind(this)}>
                        <label className="btn-label">Add to the Answer Bank</label>
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
        let { display, teamAName, teamBName, words, first, time, pause, sound } = this.state;
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
                pause={pause}
                sound={sound}
                toggleInput={this.toggleInput}
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