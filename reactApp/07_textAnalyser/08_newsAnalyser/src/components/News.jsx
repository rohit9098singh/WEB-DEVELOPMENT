import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner"; // Import your Spinner component
import InfiniteScroll from "react-infinite-scroll-component";

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
      loading: true,
      page: 1,
      totalArticles: 0,
    };
  }

  componentDidMount() {
    this.fetchArticles(this.state.page);
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - newsApp`;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.category !== prevProps.category ||
      this.props.country !== prevProps.country
    ) {
      this.fetchArticles(1);
      this.setState({ page: 1 });
      document.title = `${this.capitalizeFirstLetter(
        this.props.category
      )} - newsApp`;
    }
  }

  fetchArticles = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0757ee6a029948a49c1e8f9cf626cbcd&page=${page}&pageSize=${this.props.articlesPerPage}`;

    this.setState({ loading: true }); // Set loading to true before the fetch call

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      this.setState((prevState) => ({
        articles:
          page === 1
            ? data.articles
            : [...prevState.articles, ...data.articles], // Append articles on load more
        totalArticles: data.totalResults,
        loading: false, // Set loading to false after data is fetched
      }));
    } catch (error) {
      console.error("Error fetching articles:", error);
      this.setState({ loading: false }); // Ensure loading state is reset
    }
  };

  fetchMoreData = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1, loading: true }),
      async () => {
        await this.fetchArticles(this.state.page);
        this.setState({ loading: false }); // Set loading to false after fetching more data
      }
    );
  };

  render() {
    return (
      <>
        <h1 className="text-center">
          Top Headlines on {this.capitalizeFirstLetter(this.props.category)}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          // loader={<Spinner />} Show spinner while fetching more data
        >
          <div className="container">
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
                      source={element.source?.name || "Unknown Source"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* Show Spinner at the bottom when loading more data */}
        {this.state.loading && <Spinner />}
      </>
    );
  }
}
