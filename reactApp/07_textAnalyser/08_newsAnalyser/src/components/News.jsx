import React, { Component } from "react";
import { NewsItem } from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      articlesPerPage: 20, // Assuming 20 articles per page
    };
  }

  // Common function to fetch articles based on page number
  fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0757ee6a029948a49c1e8f9cf626cbcd&page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      articles: data.articles || [],
      page: page,
      totalArticles: data.totalResults, // Update totalArticles
    });
  };

  async componentDidMount() {
    // Fetch articles when the component mounts for the first time
    this.fetchArticles(this.state.page);
  }

  handlePrevClick = () => {
    console.log("previous");
    this.fetchArticles(this.state.page - 1);
  };

  handleNextClick = () => {
    console.log("next");
    this.fetchArticles(this.state.page + 1);
  };

  render() {
    const totalPages = Math.ceil(this.state.totalArticles / this.state.articlesPerPage);

    return (
      <>
        <div className="container my-3">
          <h2>Top headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={
                      element.title?.length > 42
                        ? element.title.slice(0, 42) + "..."
                        : element.title || "No Title Available"
                    }
                    description={
                      element.description?.length > 88
                        ? element.description.slice(0, 88) + "..."
                        : element.description || "No Description Available"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://media.licdn.com/dms/image/C5112AQG6uehN0HhBjg/article-cover_image-shrink_600_2000/0/1520202860542?e=2147483647&v=beta&t=6dzvX1sAh6XH2t_8LYGnshUNGrX7utp4WqvmSEGo9TA"
                    }
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark px-3 py-1"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= totalPages}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}
