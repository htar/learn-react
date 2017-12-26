import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }).isRequired
  };




  getBody() {
    const { article, isOpen } = this.props;
    if (!isOpen) return null;
    return (<section>{article.body}</section>);
  }
  render() {
    const { article, isOpen, toggleOpen } = this.props;
   
    return (
      <header className="App-header text-center">
        <h1 className="App-title"> {article.title}</h1>
        <button
          onClick={toggleOpen}
          type="button"
          className="btn btn-primary"
        >
          {isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </header>
    );
  }
}

export default toggleOpen(Article);
