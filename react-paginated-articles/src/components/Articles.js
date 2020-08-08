import React, { useEffect, useState } from 'react';

const Articles = () => {

  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  const link = 'https://jsonmock.hackerrank.com/api/articles?page=';

  const apiCall = async (page) => {
    let url = link + page;
    let response = await fetch(url);
    let data = await response.json();

    let pages = data.total_pages;

    setTotalPages(pages);
    const filteredArticles = data.data.filter((item) => item.title);
    
    setArticles(filteredArticles);
  }

  useEffect(() => {
    apiCall(1);
  }, []);

  const handleClick = (e) => {
    let targetBtn = e.target.innerHTML;
    apiCall(targetBtn);
  }

    return (
      
      <React.Fragment>
        <div className="pagination">
          {Array(totalPages).fill().map((page, index) =>   {
            return (
              <button data-testid="page-button" key={"page-button-" + index} onClick={handleClick}>{index + 1}</button>
            )
          })
          }
        </div>
        
        <ul className="results">
          {articles.map((article, index) => {
            return (
              <li key={"title-" + index} data-testid="result-row">{article.title}</li>
            )
          })}
        </ul>
      </React.Fragment>
    );
}

export default Articles;
