import React from 'react';
import { Link } from 'react-router-dom';

export default class StartScreen extends React.Component {

    render() {

        return (
            <div>
                <Link to={`how-to`} >How To Play</Link>
                <Link to={`options`} >Set Up A Game</Link>
            </div>
        )
    }
}
