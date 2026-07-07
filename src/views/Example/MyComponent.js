import React from 'react';
class MyComponent extends React.Component {
    state = {
        name: 'ronaldo',
        channel: 'hoi dan it'
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
            channel: 'abc'
        })
    }
    handleClickButton = () => {
        alert('Click me')
    }
    /*
    JSX => return block(div)
    fragment
    */
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <div className="first" >
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    my name is {this.state.name}
                </div >
                <div className="second">
                    My youtube channel :{this.state.channel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>click</button>
                </div>
            </>
        )
    }
}
export default MyComponent;
