import React, { Component } from 'react';

class BotonNavigation extends Component {



  render() {
    return (
      <span>
        <button type="button" className="btn btn-danger btn-navigation"  data-tar={this.props.tar}  onClick={ this.props.method } > {this.props.label}  </button>
      </span>
    );
  }
}

export default BotonNavigation;
