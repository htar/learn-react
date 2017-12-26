import React, { Component as ReactComponent } from 'react';
export default OriginalComponent =>
  class WrappedComponent extends ReactComponent {
    state = {
      isOpen: false
    };

    toggleOpen = (e) => {
      e && e.preventDefault && e.preventDefault();
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    render() {
      // return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />;//All state and props
      return <OriginalComponent {...this.props} isOpen={this.state.isOpen} toggleOpen={this.toggleOpen} />;
    }
  };
