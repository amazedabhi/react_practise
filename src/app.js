// bind example
// const obj = {
//     name: 'Abhinav',
//     getName(){
//         return this.name;
//     }
// }
// const getName=obj.getName.bind({name: 'Arpit'});
// console.log(getName());


class IndecisionApp extends React.Component{
    render(){
        const title='Indecision App';
        const subtitle='Put your life in the hands of a computer';
        const options=['Thing One','Thing Two','Thing four'];
        return (
        <div>
        <Header title={title} subtitle={subtitle}></Header>
        <Action></Action>
        <Options options={options}></Options>
        <AddOption></AddOption>
        </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlepick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return (
           <div>
           <button onClick={this.handleRemoveAll}>Remove all</button>
                {
                    this.props.options.map((option)=><Option key={option} optionText={option}/>)
                }
                
           </div> 
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        } 
    }
    render(){
        return (
           <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
           </div> 
        )
    }
}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))