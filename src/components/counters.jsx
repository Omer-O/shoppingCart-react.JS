import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
//clean code using Destructuring Arguments
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return ( 
            <React.Fragment>
                <div>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >Reset</button>
                {counters.map(counter =>( 
                 <Counter 
                    key={counter.id} 
                    onDelete={onDelete} 
                    onIncrement={onIncrement}
                    counter={counter} >
                 </Counter>
                 ))}
            </div>
            </React.Fragment>
         );
    }//render end
}//Counters end
 
export default Counters;