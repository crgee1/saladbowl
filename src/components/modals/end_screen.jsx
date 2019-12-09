import React from 'react';
import { Link } from 'react-router-dom';

export default class endScreen extends React.Component {

    winner() {
        const { teamA, teamB } = this.props;

        return teamA.points === teamB.points ? 'It is a Draw!' : teamA.points > teamB.points ? `${teamA.name} Wins!` : `${teamB.name} Wins!`;
    }

    render() {

        return (
            <div className="end-screen-container">
                <div className="round-screen">
                    <h3>{this.winner()}</h3>
                </div>
                <div className="end-screen-btn-container">
                    <div className="btn round-screen-btn"><Link to={'/'}>Back to Menu</Link></div>
                </div>
            </div>
        )
    }
}
