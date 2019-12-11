import React from 'react';
import { Link } from 'react-router-dom';

export default function endScreen(props) {

    const winner = () => {
        const { teamA, teamB } = props;

        return teamA.points === teamB.points ? 'It is a Draw!' : teamA.points > teamB.points ? `${teamA.name} Wins!` : `${teamB.name} Wins!`;
    }

    const { teamA, teamB } = props;
    
    return (
        <div className="end-screen-container">
            <div className="round-screen">
                <h3>{winner()}</h3>
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
                <Link to={'/'}><div className="btn round-screen-btn">Back to Menu</div></Link>
            </div>
        </div>
    )
}
