import React from 'react';
import Badge from '../components/Badge.js'
import BadgeForm from '../components/BadgeForm'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'

class BadgeNew extends React.Component {
    state = {
        form: {
            FirstName: '',
            LastName: '',
            Email: '',
            JobTitle: '',
            SocialMedia: ''
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

    render() {
        return (
            <div>
                <Navbar />
                <div className='BadgeNew__hero'>
                    <img className='img-fluid' src={header} alt="Header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.FirstName}
                                secondName={this.state.form.LastName}
                                jobTitle={this.state.form.JobTitle}
                                socialMedia={this.state.form.SocialMedia}
                                email={this.state.form.Email}
                                avatarURL='http://gravatar.com/avatar/a8a7b2676b97e2c80237b810fa01f4e2?d=identicon'
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default BadgeNew