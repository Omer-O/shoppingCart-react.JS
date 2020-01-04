import React, { Component } from 'react';
// import Counters from './counters';

class Counter extends Component {
//state: object includes DATA for the component 
//will be used when the Component handle events/data - otherwise better to use props 
    // state = {
    //     value: this.props.counter.value

    // };

//1# way: bind eventHandler to 'this': constructor
    // constructor() {
    //     super();
    //     this.handleIncrement.bind(this);
    // } //constructor end

// #2way: bind eventHandler to 'this': with Arrow function
    // handleIncrement = e => {
    //     console.log(e);
    // //increment in 1 and change state.count on every button click:
    //     this.setState({ value: this.state.value + 1 });   
    // };//handleIncrement end


// <<<<<<<<<<<<This Component is CONTROLLED by <Countes /> component therefor will use props insted >>>>>>>>>>>

//set the styling via a property and pass it to the tag
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    } //styles end

//conditional rendering   
    renderTags() {
        if (this.props.counter.tags.length === 0) return <p>Sorry, no Tags!</p>;
        return <ul>{this.props.counter.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }//renderTags end

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
                //when using state onClick: 
                    //onClick={(e) => this.handleIncrement(e)}
                //when using props onClick: 
                    onClick={() => this.props.onIncrement(this.props.counter)}
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
    }//return end

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
    //when State is available:
        //classes += (this.state.value === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }//getBadgeClasses end

    formatCount() {
    //when State is available:
        //const { value } = this.state;
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }//formatCount end

}//Counter end
 
export default Counter;