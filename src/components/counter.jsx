import React, { Component } from 'react';
// import Counters from './counters';

class Counter extends Component {
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }//styles end

//conditional rendering
    renderTags() {
        if (this.props.tags.length === 0) return <p>Sorry, no Tags!</p>;
        return <ul>{this.props.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>;
    }//renderTags end

    render() { 
        console.log('props', this.props);
        return ( 
            <React.Fragment> 
                <span 
                    style={this.styles} 
                    className={this.getBadgeClasses()}>{this.formatCount()}
                </span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm">add</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete</button>
            </React.Fragment>
         );
    }//render end

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }//getBadgeClasses end

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }//formatCount end
}
 
export default Counter;