import React, { Component } from 'react';
import Article from './Article';
import './ArticleList.css';

class ArticleList extends Component {
  state = {
    openArticleId: null
  };
  render() {
    const articleElement = this.props.articles.map(article => {
      return (
        <li key={article.id}>
          <Article
            article={article}
            isOpen={article.id === this.state.openArticleId}
            // toggleOpen={this.toggleOpenArticle.bind(this,article.id)}
            toggleOpen={this.toggleOpenArticle(article.id)}
          />
        </li>
      );
    });
    return (
      <section className="todo-list">
        <ul>{articleElement}</ul>
      </section>
    );
  }
  toggleOpenArticle = openArticleId => ev => {
    this.setState({ openArticleId });
  };
  // toggleOpenArticle(openArticleId) {
  //   this.setState({ openArticleId });
  // }
}





export default ArticleList;
