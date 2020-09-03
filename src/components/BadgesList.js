import React from 'react';
import Badge from './Badge'
import { Link } from 'react-router-dom'

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('')
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })

        if (filteredBadges.length !== result.length) {
            setFilteredBadges(result)
        }

    }, [badges, query]);
    return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
    const badges = [...props.badges].reverse();
    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    if (filteredBadges.length === 0) {
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        autoFocus
                        type="text"
                        className='form-control'
                        value={query}
                        onChange={e => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                <h4>We did not found any badge</h4>
                <Link className='btn btn-primary' to='/badges/new'>Create New Badge</Link>
            </div>
        )
    }

    return (
        <>
            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    autoFocus
                    type="text"
                    className='form-control'
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value)
                    }}
                />
            </div>
            <ul className='list-unstyled'>
                {filteredBadges.map(badge => {
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
        </>
    )
}

export default BadgesList