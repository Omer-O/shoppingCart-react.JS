import React, { Component } from 'react';
// import Counters from './counters';

class Counter extends Component {
    state = {
        value: this.props.counter.value

    }; 
//1# way: bind eventHandler to 'this': constructor
    // constructor() {
    //     super();
    //     this.handleIncrement.bind(this);
    // }
    //state: object includes DATA for the component
    //set the styling via a property and pass it to the tag
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    //conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>Sorry, no Tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }
// #2way: bind eventHandler to 'this': with Arrow function
    handleIncrement = e => {
        console.log(e);
        //increment in 1 and change state.count on every button click:
        this.setState({ value: this.state.value + 1 });   
    };
    render() { 
        console.log('props', this.props);
        

        return ( 
            //React.Fragment rather than <div> - save css + unecessery divs
            <React.Fragment> 
                <span 
                    style={this.styles} 
                    className={this.getBadgeClasses()}>{this.formatCount()}
                </span>
                <button 
                    onClick={(e) => this.handleIncrement(e)} 
                    className="btn btn-secondary btn-sm">add</button>
                {/* <div>
                    {this.state.tags.length === 0 && "Please create a new tag!"}
                    {this.renderTags()}
                </div> */}
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
         );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;