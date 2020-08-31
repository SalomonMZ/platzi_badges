import React from 'react';
import Badge from './Badge'
import {Link} from 'react-router-dom'

class BadgesList extends React.Component {

    render() {
        
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h4>We did not found any badge</h4>
                    <Link className='btn btn-primary' to='/badges/new'>Create New Badge</Link>
                </div>
            )
        }

        return (
            <ul className='list-unstyled'>
                {this.props.badges.map(element => {
                    return (
                        <li key={element.id}>
                            <Badge
                            firstName={element.firstName}
                            lastName={element.lastName}
                            jobTitle={element.jobTitle}
                            socialMedia={element.twitter}
                            avatarURL={element.avatarUrl}
                            />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList