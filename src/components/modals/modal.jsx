import React from 'react';
import RoundScreen from './round_screen';
import EndScreen from './end_screen';

class Modal extends React.Component {

    render() {
        const { modal, teamA, teamB, startRound, playingTeam, round, toggleInput } = this.props;
        if (!modal) {
            return null;
        }

        switch (modal) {
            case 'roundScreen':
                this.component = 
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
                this.component = 
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
                    {this.component}
                </div>
            </div>
        );
    }
}

export default Modal;
