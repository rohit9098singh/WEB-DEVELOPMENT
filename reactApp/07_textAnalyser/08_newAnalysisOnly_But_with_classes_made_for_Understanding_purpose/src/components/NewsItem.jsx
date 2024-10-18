import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Destructure title, description, imageUrl, and url from this.props
    const { title, description, imageUrl, url ,author ,date ,source} = this.props; // Keep the prop name as url

    return (
      <div className="my-3">
        <div className="card" >
          <div>
          <span className=" badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>{source}</span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"unkown"} on {new Date(date).toGMTString().slice(0,22) }</small></p>
            <a
              href={url} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
