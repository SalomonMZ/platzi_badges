import React from 'react';
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import header from '../images/Home_conf.png'
import './styles/BadgeEdit.css'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component {
    badgeId = this.props.match.params.badgeId
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            socialMedia: ''
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })

        try {
            const data = await api.badges.read(
                this.badgeId
            )
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ lading: false, error: error })
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
            await api.badges.update(this.badgeId,this.state.form)
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error })

        }

    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }


        return (
            <>
                <div className='BadgeEdit__hero'>
                    <img className='BadgeEdit__hero-img img-fluid' src={header} alt="Header" />
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </>
        )

    }
}

export default BadgeEdit