import React from 'react'

import StartNow from '../components/StartNow'
import './styles/Home.css'
import LogoImage from '../images/Home_logo.png'

class Home extends React.Component {
    render() {
        return (
            <>
                <div className='Home__content'>
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-sm-6 Home__content-left'>
                                <StartNow />
                            </div>
                            <div className="col-12 col-sm-6 Home__content-right">
                                <img className='Home__img' src={LogoImage} alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home