import React, { Component as ReactComponent } from 'react';
export default AccordionComponent =>
  class Accordion extends ReactComponent {
    state = {
      openItemId: null
    };

    toggleOpenItem = openItemId => e => {
      this.setState({
        openItemId: openItemId === this.state.openItemId ? null : openItemId
      });
    };

    render() {
      return <AccordionComponent {...this.props} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId} />;
    }
  };
