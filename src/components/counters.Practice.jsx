import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
           { id: 1, value: 4},
           { id: 2, value: 0},
           { id: 3, value: 0},
           { id: 4, value: 0}
        ]
     };//state end

//update the state by cloning counters array and return an updated array
    handleIncrement = counter => {
    //spred operator (...) to clone counters Array and set it to new Arry of counters.
            const counters = [...this.state.counters];
    //find the index of the counter we recieve as a parameter
            const i = counters.indexOf(counter);
    //avoiding modifing the state directly
            counters[i] = {...counter}
    //Increment 
            counters[i].value++;
    //update the state
            this.setState({ counters });
            console.log(this.state.counters); 
    }//handleIncrement end

//update the state using filter() to get the state except the deleted counter.
     handleDelete = (counterId) => {
         console.log(counterId);
         //filter the deleted counter
         const counters = this.state.counters.filter(c => c.id !== counterId);
         //updateing the state
         this.setState({ counters });
     }//handleDelete end

     handleReset= () => {
    //use map() to get new Array with reset counters.value
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };//handleReset end
    render() { 
//can use clean code using Destructuring Arguments
//const { onReset, counters, onDelete, onIncrement } = this.props;
//than erase all this.props.
return ( 
            <div>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                >Reset</button>
                {this.state.counters.map(counter =>( 
                 <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    counter={counter} >
                     {/* <h4>Counter #{counter.id}</h4> */}
                 </Counter>
                 ))}
            </div>
         );
    }
}
 
export default Counters;