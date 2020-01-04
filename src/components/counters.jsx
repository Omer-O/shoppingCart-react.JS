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

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const i = counters.indexOf(counter);
        counters[i] = {...counter}
        counters[i].value++;
        this.setState({ counters });
        console.log(this.state.counters); 
    }//handleIncrement end

     handleDelete = (counterId) => {
         console.log(counterId);
         const counters = this.state.counters.filter(c => c.id !== counterId);
         this.setState({ counters });
     }//handleDelete end

     handleReset= () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };//handleReset end

    render() { 
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
                 </Counter>
                 ))}
            </div>
         );
    }//render end
}//Counters end
 
export default Counters;