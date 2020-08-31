import React from 'react';

import { Link } from 'react-router-dom'
import Conf from '../images/Home_conf.png'
import './styles/StartNow.css'


class StartNow extends React.Component {
    render() {
        return (
            <div className='StartNow__container'>
                <img src={Conf} alt="Logo Conf" />
                <div className='StartNow__text'>
                    <h5>PRINT YOUR BADGES</h5>
                    <p>The easiest way to manage your <br /> conference</p>
                </div>
                <div className='StartNow__button'>
                    <Link to='/badges' className='btn btn-primary StartNow__button-width'>Start Now</Link>
                </div>
            </div>
        )
    }
}

export default StartNow