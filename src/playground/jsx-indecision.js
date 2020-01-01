console.log('app.js is running')

//JSX - JavaScript XML\

const app={
    title: 'Indecision App',
    subtitle: 'Put your life in hands of a computer',
    options: ['One','Two']
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
    }
}
const template = (<div>
                    <h1>{app.title}</h1>
                    <p>{app.subtitle}</p>
                    <p>{app.options.length>0?'Here are your options':'No options'}</p>
                    <ul>
                        <li>One</li>
                        <li>Two</li>
                    </ul>
                    <form onSubmit={onFormSubmit}>
                        <input type="text" name="option"></input>
                        <button>Add Option</button>
                    </form>
                </div>);


// const user= {
//     name: 'Abhinav',
//     age : 26,
//     Location : 'Gurgaon'
// }
// function getLocation(location){
//     if(location){
//         return location;
//     }
// }

// const userName = 'Abhinav Pandey';
// const userAge = 28;
// const userLocation = 'Gurgaon';
// const templateTwo = (<div>
//                     <h1>{user.name?user.name:'Anonymus'}</h1>
//                     <p>This is some info</p>
//                     <p>{user.age>=18 && <p>{user.age}</p>}</p>
//                     <p>{getLocation(user.Location)}</p>
//                 </div>);

let count = 0;
const addOne = () => {
    count=count+1;
    renderCounterApp();
};
const reset = () => {
    count=0;
    renderCounterApp();
}
const minusOne = () =>{
    count=count-1;
    renderCounterApp();
}


const appRoot = document.getElementById('app')

const renderCounterApp = () =>{
    const templateTwo=(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(template,appRoot);
};
renderCounterApp();