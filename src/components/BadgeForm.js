import React from 'react';

class BadgeForm extends React.Component {
    handleChange(e) {
        console.log({ value: e.target.value, name: e.target.name })
    }

    // Es equivalente a declarar el metodo
    // handleChange = e => {
    //     console.log({value: e.target.value, name: e.target.name})
    // }

    handleClick(e) {
        console.log('Botton was clicked')
    }

    handleSubmitt(e) {
        e.preventDefault();
        console.log('Form was submitted');
    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmitt}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            onChange={this.handleChange}
                            className='form-control'
                            type="text"
                            name='FirstName'
                        />
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm