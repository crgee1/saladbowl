import React from 'react';

export default function RoundScreen(props) {

    const displayName = () => {
        const { playingTeam, teamA, teamB } = props;

        let playingTeamName = playingTeam ? teamA.name : teamB.name;
        return playingTeamName[playingTeamName.length - 1] === 's' ? 
            <div><strong>{playingTeamName}</strong>' Turn</div> : 
            <div><strong>{playingTeamName}</strong>'s Turn</div>
    }

    const displayRound = () => {
        const { round } = props;
        let roundType = round === 1 ? 'Verbal Clues' : round === 2 ? 'Charades' : 'One Word';

        return (
            <div className="round-container">
                <div className="round">
                    Round {round}
                </div>
                <div>
                    <strong>{roundType}</strong> Round
                </div>
            </div>
        )
    }

    const { teamA, teamB, startRound, toggleInput } = props;
        
    return (
        <div className="round-screen-container">
            <i className="fas fa-cogs" onClick={toggleInput('pause')}></i>
            <div className="round-screen">
                {displayRound()}
                {displayName()}
                <div className="round-screen-scores">
                    <div className="team-scores">
                        <div>Team: {teamA.name}</div>
                        <div>Points: {teamA.points}</div>
                    </div>
                    <div className="team-scores">
                        <div>Team: {teamB.name}</div>
                        <div>Points: {teamB.points}</div>
                    </div>
                </div>
            </div>
            <div className="btn round-screen-btn" onClick={startRound}>Start Your Turn</div>
        </div>
    );
}
