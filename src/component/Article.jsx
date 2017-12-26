import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {
  static defaultProps = {
    article: {},
  };
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  };

  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return <p>{article.body}</p>;
  }
  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return <div ref={this.setContainerRef} className="App-header text-center">
        <h3 className="App-title"> {article.title}</h3>
        <button onClick={toggleOpen} type="button" className="btn btn-primary">
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </div>;
  }
  setContainerRef = ref => {
    this.container = ref;//work with DOM
  }
}

export default Article
