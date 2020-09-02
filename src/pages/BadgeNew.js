import React from 'react';
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import header from '../images/Home_conf.png'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            socialMedia: ''
        }
    }

    handleChange = e => {
        // const nextform = this.state.form;
        // nextform[e.target.name] = e.target.value;
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error })

        }

    }

    render() {
        return (
            <>
                <div className='BadgeNew__hero'>
                    <img className='BadgeNew__hero-img img-fluid' src={header} alt="Header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                socialMedia={this.state.form.socialMedia || 'social_media'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default BadgeNew