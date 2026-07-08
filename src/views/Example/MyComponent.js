import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {
        firstName: 'eric',
        lastName: '',
        arrJobs: [
            { id: 'abcjob', title: 'developer', salary: '50$' },
            { id: 'abcjob2', title: 'tester', salary: '30$' },
            { id: 'abcjob3', title: 'free', salary: '100$' }


        ]
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
                <AddComponent />
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
                    name={this.state.firstName}
                    age={'25'}
                    address={'ha noi'}
                    arrJobs={this.state.arrJobs}
                />




            </>
        )
    }
}
export default MyComponent;
