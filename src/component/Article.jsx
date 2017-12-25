import React, { Component } from 'react';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getBody() {
    if (!this.state.isOpen) return null;
    return <section>{this.props.article.body}</section>;
  }
  render() {
    return (
      <header className="App-header text-center">
        <h1 className="App-title"> {this.props.article.title}</h1>
        <button
          onClick={this.toggleOpen}
          type="button"
          className="btn btn-primary"
        >
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>
        {this.getBody()}
      </header>
    );
  }
}

export default ArticleList;
