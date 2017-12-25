import React, { Component } from 'react';
import Article from './Article';
import './ArticleList.css';

class List extends Component {
  render() {
    const articleElement = this.props.articles.map(article => {
      return (
        <li key={article.id}>
          <Article article={article} />
        </li>
      );
    });
    return (
      <section className="todo-list">
        <ul>{articleElement}</ul>
      </section>
    );
  }
}
export default List;
