import React from 'react'
import { Link } from 'react-router-dom';
export default class extends React.Component {
    render() {
        return (
        <div className="how-to">
            <header><strong> How To Play</strong></header>
            <p>
                1. Fill the answer bank. Every player should add the same amount of answers (Suggested: 3 - 7 answers per player). Answers can be anything from nouns to common expressions (Suggested: Limit it to 5 words per answer; Try not to pick something too obscure for the player base). <br/>
            </p>
            <p>
                2. Split into two teams. Each team sets up their own rotation of players.
            </p>
            <p>
                3. The player who's turn it is, is given a word and must get their team to guess the word based on the rules of the particular round. Once the word is guessed correctly, their team earns a point, and the player is given a new word until the time limit runs out.
            </p>
            <p className="indent">
                a) Round 1, Verbal Clues: You must make your team guess the word by telling them clues, without actually saying any part of the answer.
            </p>
            <p className="indent">
                b) Round 2, Charades: You must make your team guess the word by acting out the word, without saying anything.
            </p>
            <p className="indent">
                c) Round 3, One Word: You must make your team guess the word by only saying one word, that word can not be any part of the answer.
            </p>
            <p>
                4. The teams alternate turns.
            </p>
            <p>
                5. A round ends when all the answers in the answer bank have been guessed correctly.
            </p>
            <p>
                6. The team with the most points at the end of three rounds wins.
            </p>
            <Link className="back-btn" to="/">Back to the Menu</Link>
        </div>
        )
    }
}