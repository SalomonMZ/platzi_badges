import React from 'react';

import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../components/DeleteBadgeModal'
import Badge from '../components/Badge'
import Logo from '../images/Home_conf.png'
import './styles/BadgeDetail.css'

function BadgeDetails(props) {
    const badge = props.badge
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
                            <Link className='btn btn-primary mb-4' to={`/badges/${badge.id}/edit`}>
                                Edit
                            </Link>
                        </div>

                        <div>
                            <button onClick={props.onOpenModal} className='btn btn-danger'>Delete</button>
                            <DeleteBadgeModal
                                onDeleteBadge={props.onDeleteBadge}
                                isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadgeDetails