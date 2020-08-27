import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        const {
            firstName,
            secondName,
            jobTitle,
            socialMedia,
            avatarURL
        } = this.props;
        return <div className='Badge'>
            <div className='Badge_header'>
                <img src={confLogo} alt="Logo Conferencia" />
            </div>

            <div className='Badge_section-name'>
                <img className='Badge_avatar' src={avatarURL} alt="Avatar" />
                <h1>{firstName} <br /> {secondName}</h1>
            </div>

            <div className='Badge_section-info'>
                <h3>{jobTitle}</h3>
                <div>@{socialMedia}</div>
            </div>

            <div className='Badge_footer'>
                #platziconf
            </div>
        </div>
    }
}

export default Badge;