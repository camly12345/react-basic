import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcjob', title: 'developer', salary: '50' },
            { id: 'abcjob2', title: 'tester', salary: '30' },
            { id: 'abcjob3', title: 'free', salary: '100' }


        ]
    }

    addNewJob = (job) => {
        console.log('check jobfrom parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }





    /*
    JSX => return block(div)
    fragment
    */
    render() {
        console.log('>>> call render: ', this.state)

        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />


                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />




            </>
        )
    }
}
export default MyComponent;
