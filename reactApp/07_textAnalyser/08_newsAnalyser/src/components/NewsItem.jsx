import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        // Destructure title and description from this.props
        const { title, description,imageUrl } = this.props;

        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5> {/* Use title here */}
                        <p className="card-text">{description}</p> {/* Use description here */}
                        <a href="/newsdetails" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}
