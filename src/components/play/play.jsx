import React, { useState, useEffect, useRef } from 'react';
import Modal from '../modals/modal';
import correct from '../../assets/audio/correct.wav';
import pass from '../../assets/audio/pass.flac';
import over from '../../assets/audio/over.wav'
import timeSound from '../../assets/audio/timeSound1.wav'

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
