import React from 'react';
import { Link } from 'react-router-dom';

export default class endScreen extends React.Component {

    winner() {
        const { teamA, teamB } = this.props;

        return teamA.points === teamB.points ? 'It is a Draw!' : teamA.points > teamB.points ? `${teamA.name} Wins!` : `${teamB.name} Wins!`;
    }

    render() {
        const { teamA, teamB } = this.props;
        return (
            <div className="end-screen-container">
                <div className="round-screen">
                    <h3>{this.winner()}</h3>
                    <div className="round-screen-scores">
                        <div>
                            <div>Team: {teamA.name}</div>
                            <div>Points: {teamA.points}</div>
                        </div>
                        <div>
                            <div>Team: {teamB.name}</div>
                            <div>Points: {teamB.points}</div>
                        </div>
                    </div>
                </div>
                <div className="end-screen-btn-container">
                    <div className="btn round-screen-btn"><Link to={'/'}>Back to Menu</Link></div>
                </div>
            </div>
        )
    }
}
