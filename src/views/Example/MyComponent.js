import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert('click me')

    }


    /*
    JSX => return block(div)
    fragment
    */
    render() {
        console.log('>>> call render: ', this.state)

        return (
            <>
                <form action="/action_page.php">
                    <label htmlfor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    /><br />
                    <label htmlfor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />


                </form>

                <ChildComponent
                    name={'child one'}
                    age={'25'}
                />


            </>
        )
    }
}
export default MyComponent;
