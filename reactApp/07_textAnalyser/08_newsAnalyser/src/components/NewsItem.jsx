import React from "react";

const NewsItem = ({ title, description, imageUrl, url, author, date, source }) => {
  return (
    <div className="my-3">
      <div className="card">
        {/* Source Badge */}
        <span
          className="badge rounded-pill bg-danger"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          {source}
        </span>

        {/* Image */}
        <img src={imageUrl} className="card-img-top" alt="news" />

        {/* Card Content */}
        <div className="card-body">
          <h5 className="card-title">
            {title?.length > 0 ? `${title}...` : "No Title Available"}
          </h5>
          <p className="card-text">
            {description?.length > 0 ? `${description}...` : "No Description Available"}
          </p>

          {/* Author and Date */}
          <p className="card-text">
            <small className="text-muted">
              By {author || "Unknown"} on {new Date(date).toGMTString().slice(0, 22)}
            </small>
          </p>

          {/* Read More Button */}
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
};

// Export as default
export default NewsItem;
