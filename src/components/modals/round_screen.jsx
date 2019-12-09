import React from 'react';

export default class RoundScreen extends React.Component {

    displayName(teamName) {
        return teamName[teamName.length - 1] === 's' ? 
            <div>It is {teamName}' Turn</div> : 
            <div>It is {teamName}'s Turn</div>
    }

    render() {
        const { teamA, teamB, startRound, playingTeam } = this.props;
        let playingTeamName = playingTeam ? teamA.name : teamB.name;
        
        return (
            <div className="round-screen-container">
                <div className="round-screen">
                    {this.displayName(playingTeamName)}
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
                <div className="btn round-screen-btn" onClick={startRound}>Start Your Turn</div>
            </div>
        )
    }
}
