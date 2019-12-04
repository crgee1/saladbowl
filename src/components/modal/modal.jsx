import './modal.scss'
import React from 'react';
import StartScreen from '../start_screen/start_screen';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { } = this.props;
        if (!this.props.modal) {
            return null;
        }

        switch (this.props.modal) {
            case 'startScreen':
                this.component = <StartScreen />
                break;
            default:
                return null;
        }

        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {this.component}
                </div>
            </div>
        );
    }
}

export default Modal;
