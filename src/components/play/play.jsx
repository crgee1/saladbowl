import React, { useState, useEffect, useRef, useReducer } from 'react';
import Modal from '../modals/modal';
import correct from '../../assets/audio/correct.wav';
import pass from '../../assets/audio/pass.flac';
import over from '../../assets/audio/over.wav'
import timeSound from '../../assets/audio/timeSound1.wav'

import reducer from '../reducer';

export default function Play(props) {

    const [teamAPoints, setTeamAPoints] = useState(0);
    const [teamBPoints, setTeamBPoints] = useState(0);
    const [word, setWord] = useState('');
    const [words, setWords] = useState(props.words);
    const [time, setTime] = useState(props.time);
    const [modal, setModal] = useState('roundScreen');
    const [playingTeam, setPlayingTeam] = useState(props.first);
    const [round, setRound] = useState(1);
    const ref = useRef();

    const { teamAName, teamBName, toggleInput, pause, sound } = props;
    
    const endTurn = () => {
        setModal('roundScreen');
        setWords([word, ...words]);
        clearInterval(ref.current.timer);
        ref.current.ticker.pause();
        setPlayingTeam(!playingTeam);
        setTime(props.time);
        if (sound) new Audio(over).play();
    }

    useEffect(() => {
        if (time < 1) {
            endTurn();
        }
    });

    const startTimer = () => {
        setTime(props.time);
        const ticker = new Audio(timeSound);
        ticker.addEventListener('ended', () => {
            ticker.play();
        });
        ref.current = {ticker}
        if (sound) ticker.play();
        const timer = setInterval(() => {
            setTime(time => time-1);
        }, 1000);
        ref.current.timer = timer;
    }
    
    const shuffleWords = () => {
        let wordsArr = [...words];
        for (let i = wordsArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
        }
        let displayWord = wordsArr.pop();
        setWords(wordsArr);
        setWord(displayWord);
    }

    const givePoints = () => {
        if (playingTeam) {
            setTeamAPoints(teamAPoints + 1);
        } else {
            setTeamBPoints(teamBPoints + 1);
        }
    }

    const correctWord = () => {
        let wordsArr = [...words];
        givePoints();
        if (wordsArr.length === 0) {
            endRound();
        } else {
            let displayWord = wordsArr.pop();
            setWord(displayWord);
            setWords(wordsArr);
        }
        if (sound) new Audio(correct).play();
    }

    const endRound = () => {
        if (round === 3) {
            setModal('endScreen');
        } else {
            setModal('roundScreen');
            setRound(round+1);
        };
        ref.current.ticker.pause();
        clearInterval(ref.current.timer);
        setPlayingTeam(!playingTeam);
        setTime(props.time);
        setWords(props.words);
    }

    const passWord = () => {
        let wordsArr = [...words];
        wordsArr.unshift(word);
        let displayWord = wordsArr.pop();
        setWord(displayWord);
        setWords(wordsArr);
        if (sound) new Audio(pass).play();
    }

    const startRound = () => {
        startTimer();
        setModal(null);
        shuffleWords();
    }

    const teamA = { name: teamAName, points: teamAPoints }
    const teamB = { name: teamBName, points: teamBPoints }

    return (
        <div className={"play-main" + (pause ? " hide" : "")}>
            <Modal
                modal={modal}
                startRound={startRound}
                teamA={teamA}
                teamB={teamB}
                playingTeam={playingTeam}
                round={round}
                toggleInput={toggleInput}
            />
            <div className="play-container">
                <h1 className="play-timer">{time}</h1>
                <h2 className="play-display-word">{word}</h2>
                <div className="play-btn-container">
                    <button className="btn play-btns" onClick={correctWord}>Correct</button>
                    <button className="btn play-btns" onClick={passWord}>Pass</button>
                </div>
            </div>
        </div>
    )
}

// class Play extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             teamAPoints: 0,
//             teamBPoints: 0,
//             word: '',
//             modal: 'roundScreen',
//             words: this.props.words,
//             playingTeam: this.props.first,
//             round: 1,
//         }
//     }

//     startTimer() {
//         const { time, sound } = this.props;

//         this.setState({time: time})
//         this.timer = setInterval(() => {
//             if (this.state.time > 1) {
//                 this.setState((prevState) => ({
//                     time: prevState.time - 1,
//                 }))
//             } else {
//                 this.setState({modal: 'roundScreen', time, playingTeam: !this.state.playingTeam})
//                 if (sound) new Audio(over).play();
//                 clearInterval(this.timer);
//             }
//         }, 1000);
//     }

//     shuffleWords() {
//         let wordsArr = [...this.props.words];
//         for (let i = wordsArr.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];
//         }
//         let displayWord = wordsArr.pop();
//         this.setState({word: displayWord, words: wordsArr});
//     }

//     correctWord() {
//         const { words, playingTeam, teamAPoints, teamBPoints } = this.state;
//         let wordsArr = [...words];
//         if (wordsArr.length === 0) {
//             this.endRound();
//         } else {
//             let displayWord = wordsArr.pop();
//             if (playingTeam) {
//                 this.setState({ word: displayWord, words: wordsArr, teamAPoints: teamAPoints+1 });
//             } else {
//                 this.setState({ word: displayWord, words: wordsArr, teamBPoints: teamBPoints+1 });
//             }
//         }
//         if (this.sound) new Audio(correct).play();
//     }

//     endRound() {
//         const { playingTeam, teamAPoints, teamBPoints, round } = this.state;

//         if (playingTeam) {
//             this.setState({ teamAPoints: teamAPoints + 1, time: 0 });
//         } else {
//             this.setState({ teamBPoints: teamBPoints + 1, time: 0 });
//         }
        
//         if (round === 3) {
//             this.setState({ 
//                 modal: 'endScreen', 
//                 time: this.props.time, 
//                 playingTeam: !playingTeam });
//             clearInterval(this.timer);
//         } else {
//             this.setState({ 
//                 modal: 'roundScreen', 
//                 time: this.props.time, 
//                 playingTeam: !playingTeam, 
//                 round: round+1 });
//             clearInterval(this.timer);
//             this.shuffleWords();
//         };
//     }

//     passWord() {
//         let wordsArr = [...this.state.words];
//         wordsArr.unshift(this.state.word);
//         let displayWord = wordsArr.pop();
//         this.setState({ word: displayWord, words: wordsArr });

//         if (this.props.sound) new Audio(pass).play();
//     }

//     startRound() {
//         this.startTimer();
//         this.setState({modal: null});
//         this.shuffleWords();
//     }

//     render() {
//         const { teamAName, teamBName, toggleInput, pause } = this.props;
//         const { teamAPoints, teamBPoints, modal, playingTeam, round } = this.state;
//         const teamA = {name: teamAName, points: teamAPoints}
//         const teamB = {name: teamBName, points: teamBPoints}
//         return (
//             <div className={"play-main" + (pause ? " hide" : "")}>
//                 <Modal 
//                     modal={modal} 
//                     startRound={this.startRound.bind(this)} 
//                     teamA={teamA} 
//                     teamB={teamB} 
//                     playingTeam={playingTeam} 
//                     round={round} 
//                     toggleInput={toggleInput}
//                 />
//                 <div className="play-container">
//                     <h1 className="play-timer">{this.state.time}</h1>
//                     <h2 className="play-display-word">{this.state.word}</h2>
//                     <div className="play-btn-container">
//                         <button className="btn play-btns" onClick={this.correctWord.bind(this)}>Correct</button>
//                         <button className="btn play-btns" onClick={this.passWord.bind(this)}>Pass</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
