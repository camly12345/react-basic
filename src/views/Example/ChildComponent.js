import React from 'react';
// class ChildComponent extends React.Component {
//     state = {
//         firstName: '',
//         lastName: ''
//     }

//     handleChangeFirstName = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }
//     handleChangeLastName = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault()
//         alert('click me')

//     }


//     /*
//     JSX => return block(div)
//     fragment
//     */
//     render() {
//         console.log('>>> check props: ', this.props)
//         // let name = this.props.name;
//         // let age = this.props.age;
//         let { arrJobs } = this.props
//         return (
//             <>
//                 <div className="job-list">
//                     {
//                         arrJobs.map((item, index) => {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             </>
//         )
//     }
// }

const ChildComponent = (props) => {
    let { arrJobs } = props
    return (
        <>
            <div className="job-list">
                {
                    arrJobs.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title}-{item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default ChildComponent;
