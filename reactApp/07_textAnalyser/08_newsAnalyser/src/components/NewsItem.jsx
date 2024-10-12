import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    // Destructure title, description, imageUrl, and url from this.props
    const { title, description, imageUrl, url } = this.props; // Keep the prop name as url

    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
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
