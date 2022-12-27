import React from 'react';
import Img from './vecteezy_portrait-of-kangaroo_2610544.jpg';
import '../App.css';

export default class Person extends React.Component {
    constructor(person) {
        super(person);
        this.state= {
            fullName: "Firas",
            bio: "FullStack Developper JavaScript",
            profession: "I'm a Web Developper",
            imgSrc: {Img},
            counter: 0,
            timer: 0,
            interval: null,
        }
    }
    increment=()=>{
        this.setState({
            counter :  this.state.counter +2,
        })
            console.log('counter',this.state.counter)
    }
    decrement=()=>{
        this.setState({
            counter :  this.state.counter -2,
        })
            console.log('counter',this.state.counter)
    }
    componentDidMount(){
        this.setState({
            intervall:setInterval(
                ()=> this.setState({timer:this.state.timer +1}),1000
            )
        })
    }
    render() {
        return(
            <div>
                <h1>
                    Hello {this.state.fullName}
                </h1>
                <p>counter = {this.state.counter} </p>
                    <button onClick={()=>this.increment()}>plus</button>
                    <button onClick={()=>this.decrement()}>moins</button>
                    <button>reset</button>
                <p>{this.state.timer}</p>
            </div>
        );
    }
}
