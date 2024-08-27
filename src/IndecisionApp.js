import React from 'react';
import ReactDOM from 'react-dom/client';
//const root = ReactDOM.createRoot(document.getElementById('root'));
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are the some details you can see!</p>
                    </div>
                )}
            </div>
        )
    }
}
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['part one', 'part two', 'part three']
        }
    }
    componentDidMount(){
        console.log('componentDidMount');
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
        this.setState(()=>({options}))
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json =JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter Valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => {
            //prevState.options.push(option)
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = 'Epsilon';
        const subtitle = 'Welcome to Epsilon';
        const optionText = 'Options component here'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Options optionText={optionText} options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <Action hasOption={this.state.options.length > 0} handlePick={this.handlePick} />
                <AddOption options={this.state.options} handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}
class Options extends React.Component {
    // handleRemoveAll() {
    //     alert('option removed')
    // }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                <Option />
            </div>
        )
    }
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOption}>What should I do</button>
        </div>
    );
}
// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handle picked')
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>What should I do</button>
//             </div>
//         )
//     }
// }
class Option extends React.Component {
    render() {
        return (
            <div>
                <p className='optionsss'>{this.props.optionText}</p>
            </div>
        )
    }
}
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // if (option) {
        //     this.props.handleAddOption(option)
        //     //this.props.options.push(option)
        //     // e.target.elements.option.value = ''
        //     // alert('option added')
        //     // console.log(this.props.options);

        // }
        this.setState(() => {
            return {
                error
            }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

// const jsx =(
//   <div>
//     <Header/>
//     <Action/>
//   </div>
// )
export default IndecisionApp;
//root.render(<IndecisionApp/>); 