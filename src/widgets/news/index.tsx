import React from 'react';
import { useDispatch } from 'react-redux';
import { getNewsData, getNewsDataAsync } from '../../entities/news/model';

import './styles.css';

const News = () => {
  const dispatch = useDispatch();

  const { isFetching } = getNewsDataAsync()(dispatch);
  const news = getNewsData();

  return (
    <section className="news">
      <h3>This is the test of fetching data from json mock api:</h3>
      {
        isFetching || !news ? ('...Loading') : (
          news.map((newsItem) => (
            <article className="news__item" key={newsItem.id}>
              {newsItem.title}
            </article>
          ))
        )
      }
    </section>
  );
};

export default News;
