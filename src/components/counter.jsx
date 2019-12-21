import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        //use map() for du=ynamic list change, for now hard code tags
        // tags: ["1", "2", "3"]
    }; 
//1# way: bind eventHandler to 'this': constructor
    constructor() {
        super();
        this.handleIncrement.bind(this);
    }
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
        this.setState({ count: this.state.count + 1 });   
    };
    render() { 

        return ( 
            //React.Fragment rather than <div> - save css + unecessery divs
            <div> 
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
            </div>
         );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;