import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render() {
        const {
            firstName,
            lastName,
            jobTitle,
            socialMedia,
            email
        } = this.props;
        return <div className='Badge'>
            <div className='Badge_header'>
                <img src={confLogo} alt="Logo Conferencia" />
            </div>

            <div className='Badge_section-name'>
                <Gravatar className='Badge_avatar' email={email} />
                <h1>{firstName} <br/> {lastName}</h1>
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