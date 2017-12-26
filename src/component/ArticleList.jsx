import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import accordion from '../decorators/accordion';
import './ArticleList.css';

class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired, //from accordion
    openItemId: PropTypes.number,
    toggleOpenItem: PropTypes.func.isRequired
  };
  render() {
    const { articles, openItemId, toggleOpenItem } = this.props;
    const articleElement = articles.map(article => 
        <li key={article.id}>
          <Article
            article={article}
            isOpen={article.id === openItemId}
            toggleOpen={toggleOpenItem(article.id)}
          />
        </li>
      );
    return (
      <section className="todo-list">
        <ul>{articleElement}</ul>
      </section>
    );
  }
}

export default accordion(ArticleList);
