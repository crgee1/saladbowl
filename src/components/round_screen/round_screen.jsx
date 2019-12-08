import React from 'react';

export default class RoundScreen extends React.Component {

    render() {
        const { teamA, teamB } = this.props;
        

        return (
            <div className="round-screen">
                <div>
                    <div>Team: {teamA.name}</div>
                    <div>Points: {teamA.points}</div>
                </div>
                <div>
                    <div>Team: {teamB.name}</div>
                    <div>Points: {teamB.points}</div>
                </div>
            </div>
        )
    }
}
