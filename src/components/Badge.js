import React from 'react';

import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={confLogo} alt="Logo Conferencia" />
            </div>

            <div>
                <img src="https://www.gravatar.com/avatar?id=identicon" alt="Avatar" />
                <h1>Salomon <br /> Moreno</h1>
            </div>

            <div>
                <p>FrontEnd Engineer</p>
                <p>@smorenoz</p>
            </div>

            <div>
                #platziconfig
            </div>
        </div>
    }
}

export default Badge;