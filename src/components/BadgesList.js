import React from 'react';
import Badge from './Badge'

class BadgesList extends React.Component {

    render() {
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