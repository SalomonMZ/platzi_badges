import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return <div className='Badge'>
            <div className='Badge_header'>
                <img src={confLogo} alt="Logo Conferencia" />
            </div>

            <div className='Badge_section-name'>
                <img className='Badge_avatar' src="https://s.gravatar.com/avatar/a8a7b2676b97e2c80237b810fa01f4e2?s=80" alt="Avatar" />
                <h1>Salomon <br /> Moreno</h1>
            </div>

            <div className='Badge_section-info'>
                <h3>FrontEnd Engineer</h3>
                <div>@smorenoz</div>
            </div>

            <div className='Badge_footer'>
                #platziconf
            </div>
        </div>
    }
}

export default Badge;