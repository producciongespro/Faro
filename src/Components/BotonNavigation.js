import React, { Component } from 'react';

class BotonNavigation extends Component {



  render() {
    return (
      <div className="text-right">
        <button type="button" className="btn btn-danger"  data-tar={this.props.tar}  onClick={ this.props.method } > {this.props.label}  </button>
      </div>
    );
  }
}

export default BotonNavigation;
