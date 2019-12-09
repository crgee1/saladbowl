import React from 'react';
import saladbowl from '../../assets/images/saladbowl.png';
import { Link } from 'react-router-dom';

export default class StartScreen extends React.Component {

    render() {

        return (
            <div className="start-screen">
                <header className="start-screen-header">Salad Bowl</header>
                <div className="start-screen-nonheader">
                    <div className="start-screen-btn-container">
                        <Link to={`options`} >Set Up a Game</Link>
                        <Link to={`how-to`} >How To Play</Link>
                    </div>
                    <div className="saladbowl-container">
                        <img src={saladbowl} className="saladbowl" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
