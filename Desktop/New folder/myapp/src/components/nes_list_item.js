import React from "react";
import classes from '../css/styles.css';

const NewsItem = ({item})=>{
     
      return (
        <div className={classes.newsitem}>
            <div>
           <h3>{item.id} . {item.title}</h3>
           <div>{item.feed}</div>
           </div>
        </div>
      )
}

export default NewsItem;

