import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navBar';
import Counter from './components/counter';
import Counters from './components/counters';

class App extends Component {
  state = { 
    counters: [
       { id: 1, value: 0},
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
      <React.Fragment>
        <NavBar 
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
         />
        <main className='container'>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDelete={this.handleDelete} />
        </main>
      </React.Fragment>
  
    );
  }
}

export default App;
