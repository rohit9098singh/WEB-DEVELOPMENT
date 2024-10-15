import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import PropTypes from 'prop-types';
import Spinner from "./Spinner"; // Import your Spinner component

export default class News extends Component {
  static defaultProps = {
    country: "us",
    articlesPerPage: 20,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    articlesPerPage: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  // Lifecycle method to change the title when component mounts
  componentDidMount() {
    this.fetchArticles(this.state.page);
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - newsApp`;
  }

  // Update title and fetch new articles when the category or country changes
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category || this.props.country !== prevProps.country) {
      this.fetchArticles(1);
      this.setState({ page: 1 });
      document.title = `${this.capitalizeFirstLetter(this.props.category)} - newsApp`;
    }
  }

  // Common function to fetch articles based on page number
  fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0757ee6a029948a49c1e8f9cf626cbcd&page=${page}&pageSize=${this.props.articlesPerPage}`;

    this.setState({
      loading: true, // Set loading to true before the fetch call
    });

    try {
      const response = await fetch(url); // Fetch the data from the API
      const data = await response.json();
      console.log(data); // Log the fetched data for debugging

      this.setState({
        articles: data.articles || [],  // Store fetched articles
        totalArticles: data.totalResults, // Update total number of available articles
        page: page,  // Track current page
        loading: false, // Set loading to false after data is fetched
      });
    } catch (error) {
      console.error('Error fetching articles:', error); // Log any fetch errors
      this.setState({ loading: false }); // Ensure loading state is reset
    }
  };

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
          <h1 className="text-center">Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>

          {/* Only show articles when loading is false */}
          {!this.state.loading && (
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={
                        element.title?.length > 40
                          ? element.title.slice(0, 40) + "..."
                          : element.title || "No Title Available"
                      }
                      description={
                        element.description?.length > 50
                          ? element.description.slice(0, 50) + "..."
                          : element.description || "No Description Available"
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://media.gettyimages.com/id/1209871169/vector/information-overload-fake-news.jpg?s=612x612&w=gi&k=20&c=EE8bJkAMi8_WxP86csSeMYIslTu9VAeQvLzY2Y3WAk4="
                      }
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source?.name || "unknown source"}
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
