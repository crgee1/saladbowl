import React from 'react';
import Modal from './modal/modal';

class Play extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamAPoints: 0,
            teamBPoints: 0,
            words: [],
            modal: null,
        }
    }

    render() {

        return (
            <div className="play-main">
                <Modal modal={this.state.modal}/>
            </div>
        )
    }
}

export default Play;