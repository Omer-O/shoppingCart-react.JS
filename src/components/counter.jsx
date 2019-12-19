import React, { Component } from 'react';

class Counter extends Component {
    //state is an object that include any DATA that the component needs
    state = {
        count: 0,
        //to dynamic generate a list (ul) from the array we will use map()
        tags: ["1", "2", "3"]
    }; 

    //can set the styling via a property and pass it to the tag
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    //conditional rendering
    renderTags() {
        if (this.state.tags.length === 0) return <p>Sorry, no Tags!</p>;
        
        <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;

        return  

    }
    render() { 

        return ( 
            //beter to wrap with React.Fragment than <div> - save css and unecessery divs
            <React.Fragment> 
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
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