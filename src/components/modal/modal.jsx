import './modal.scss'
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

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
            case 'saveRoute':
                this.component = <SaveRouteContainer routeInfo={routeInfo} />;
                break;
            case 'updateRoute':
                this.component = <UpdateRouteContainer routeInfo={routeInfo} prevRoute={prevRoute} prevLocations={prevLocations} />;
                break;
            case 'commentModal':
                this.component = <CommentModalContainer comments={comments} likes={likes} liked={liked} handleDeleteComment={handleDeleteComment} currentUser={currentUser} workout={workout} createComment={createComment} />;
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

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
