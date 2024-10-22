import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem"; // Correctly importing NewsItem
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    fetchArticles(page);
    document.title = `${capitalizeFirstLetter(props.category)} - newsApp`;
    // eslint-disable-next-line
  }, [props.category, props.country]); // Trigger effect when category or country changes

  const fetchArticles = async (page) => {
    props.setProgress(10); // Start loading
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.articlesPerPage}`;

    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setArticles((prevArticles) =>
        page === 1 ? data.articles : [...prevArticles, ...data.articles]
      );
      setTotalArticles(data.totalResults);
      setLoading(false);

      props.setProgress(100); // Finish loading
    } catch (error) {
      console.error("Error fetching articles:", error);
      setLoading(false);
      props.setProgress(100); // Handle error, and finish loading
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
    fetchArticles(page + 1);
  };

  return (
    <>
      <h1 className="text-center">
        Top Headlines on {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        // loader={<Spinner />} Show spinner while fetching more data
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
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
      {loading && <Spinner />}
    </>
  );
};

News.defaultProps = {
  country: "us",
  articlesPerPage: 20,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  articlesPerPage: PropTypes.number,
  category: PropTypes.string,
};

export default News;
