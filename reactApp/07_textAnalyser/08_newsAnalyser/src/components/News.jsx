import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import Spinner from "./Spinner"; // Import your Spinner component

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  // Common function to fetch articles based on page number
  fetchArticles = async (page) => {
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0757ee6a029948a49c1e8f9cf626cbcd&page=${page}&pageSize=${this.props.articlesPerPage}`;

    this.setState({
      loading: true, // Set loading to true before the fetch call
    });

    const response = await fetch(url); // Fetch the data from the API
    const data = await response.json();
    console.log(data);

    this.setState({
      articles: data.articles || [],  // Store fetched articles
      totalArticles: data.totalResults, // Update total number of available articles
      page: page,  // Track current page
      loading: false, // Set loading to false after data is fetched
    });
  };

  async componentDidMount() {
    // Fetch articles when the component mounts
    this.fetchArticles(this.state.page);
  }

  handlePrevClick = () => {
    this.fetchArticles(this.state.page - 1);
  };

  handleNextClick = () => {
    this.fetchArticles(this.state.page + 1);
  };

  render() {
    const totalPages = Math.ceil(this.state.totalArticles / this.props.articlesPerPage);

    return (
      <>
        <div className="container my-3">
          {/* Show Spinner only when loading is true */}
          {this.state.loading && <Spinner />}
          <h1 className="text-center">Top Headlines</h1>

          {/* Only show articles when loading is false */}
          {!this.state.loading && (
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
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
                          : "https://via.placeholder.com/150"
                      }
                      url={element.url}
                    />
                  </div>
                );
              })}
            </div>
          )}

          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-dark px-3 py-1"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={this.state.page >= totalPages}
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
