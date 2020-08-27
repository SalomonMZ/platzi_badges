import React from 'react';
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt="Header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName='Salomon'
                                secondName='Moreno'
                                jobTitle='Former React Developer'
                                socialMedia='smorenoz'
                                avatarURL='http://gravatar.com/avatar/a8a7b2676b97e2c80237b810fa01f4e2?d=identicon'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default BadgeNew