import React from 'react';

class BadgeForm extends React.Component {

    handleClick = e => {
        console.log('Botton was clicked')
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log('Form was submitted');
    //     console.log(this.state)
    // }

    render() {
        const buttonStyle = {
            width: '120px',
            'margin-top': '15px'
        }
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='firstName'
                            value={this.props.formValues.firstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='lastName'
                            value={this.props.formValues.lastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="email"
                            name='email'
                            value={this.props.formValues.email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='jobTitle'
                            value={this.props.formValues.jobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Social Media</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='socialMedia'
                            value={this.props.formValues.socialMedia}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary" style={buttonStyle}>Save</button>

                    {this.props.error && (
                        <p className='text-danger'>{this.props.error.message}</p>
                    )}
                </form>
            </div>
        )
    }
}

export default BadgeForm