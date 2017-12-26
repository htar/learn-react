import React, { Component } from 'react';
import ArticleList from './component/ArticleList';
import articles from './fixtures';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <ArticleList articles={articles} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
