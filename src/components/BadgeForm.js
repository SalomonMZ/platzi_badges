import React from 'react';

class BadgeForm extends React.Component {
    // state = {
    //     JobTitle: 'Developer'
    // };
    // handleChange = e => {
    //     // console.log({ value: e.target.value, name: e.target.name })
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

    // Es equivalente a declarar el metodo
    // handleChange = e => {
    //     console.log({value: e.target.value, name: e.target.name})
    // }

    handleClick = e => {
        console.log('Botton was clicked')
    }

    handleSubmitt = e => {
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmitt}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='FirstName'
                            value={this.props.formValues.FirstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='LastName'
                            value={this.props.formValues.LastName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="email"
                            name='Email'
                            value={this.props.formValues.Email}
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='JobTitle'
                            value={this.props.formValues.JobTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Social Media</label>
                        <input
                            onChange={this.props.onChange}
                            className='form-control'
                            type="text"
                            name='SocialMedia'
                            value={this.props.formValues.SocialMedia}
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm