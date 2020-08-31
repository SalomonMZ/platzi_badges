import React from 'react'

import StartNow from '../components/StartNow'
import './styles/Home.css'
import LogoImage from '../images/Home_logo.png'

class Home extends React.Component {
    render() {
        return (
            <>
                <div className='Home__container'>
                    <div className='row'>
                        <div className="col-6">
                            <StartNow/>
                        </div>
                        
                        <div className="col-6">
                            <img className='Home__img' src={LogoImage} alt="Logo"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home