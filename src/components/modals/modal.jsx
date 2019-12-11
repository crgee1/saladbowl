import React from 'react';
import RoundScreen from './round_screen';
import EndScreen from './end_screen';

function Modal(props) {
    const { modal, teamA, teamB, startRound, playingTeam, round, toggleInput } = props;
        
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'roundScreen':
            component = 
                <RoundScreen 
                    teamA={teamA} 
                    teamB={teamB} 
                    startRound={startRound} 
                    playingTeam={playingTeam} 
                    round={round} 
                    toggleInput={toggleInput}
                />
            break;
        case 'endScreen':
            component = 
                <EndScreen 
                    teamA={teamA} 
                    teamB={teamB} 
                    startRound={startRound} 
                    playingTeam={playingTeam}
                />
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

export default Modal;
