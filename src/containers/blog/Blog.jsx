import React from 'react';
import Article from '../../components/article/Article';
import { johnny, pushkar, nushita, kashif, laraib } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">H!<br /> Engima ke Log</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={johnny} text="Johnathan John CLUB LEAD" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={pushkar} text="Pushkar Rai CO-LEAD" />
        <Article imgUrl={nushita} text="Nushita Reddy HEAD OF OPERATIONS" />
        <Article imgUrl={kashif} text="Mohammed Kashif CREATIVE LEAD" />
        <Article imgUrl={laraib} text="Laraib Khan TECHNICAL LEAD" />
      </div>
    </div>
  </div>
);

export default Blog;
