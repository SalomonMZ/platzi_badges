import React from 'react';
import { Link } from 'react-router-dom';
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'

import './styles/BadgeDetail.css'
import Logo from '../images/Home_conf.png'
import api from '../api';

class BadgeDetail extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })

        }
    }
    render() {

        const badge = this.state.data;

        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }

        return (
            <>
                <div className='BadgeDetail__hero'>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img className='BadgeDetail_hero-img' src={Logo} alt="Logo Conferencia" />
                            </div>
                            <div className="col-6 BadgeDetail__hero-attendant-name">
                                <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={badge.firstName}
                                lastName={badge.lastName}
                                email={badge.email}
                                socialMedia={badge.socialMedia || badge.twitter}
                                jobTitle={badge.jobTitle}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <Link className='btn btn-primary mb-4' to={`/badge/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button className='btn btn-danger'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default BadgeDetail