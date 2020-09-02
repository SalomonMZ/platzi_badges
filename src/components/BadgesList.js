import React from 'react';
import Badge from './Badge'
import { Link } from 'react-router-dom'


class BadgesList extends React.Component {

    render() {
        const badges = [...this.props.badges].reverse();

        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h4>We did not found any badge</h4>
                    <Link className='btn btn-primary' to='/badges/new'>Create New Badge</Link>
                </div>
            )
        }

        return (
            <ul className='list-unstyled'>
                {badges.map(badge => {
                    return (
                        <li key={badge.id}>
                            <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
                                <Badge
                                    firstName={badge.firstName}
                                    lastName={badge.lastName}
                                    jobTitle={badge.jobTitle}
                                    socialMedia={badge.twitter || badge.socialMedia}
                                    email={badge.email}
                                />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList