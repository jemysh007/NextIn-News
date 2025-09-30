import React, { Component } from "react";
import TwitterFeed from "./TwitterFeed";
const axios = require("axios").default;

export default class MostRecentNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      category: this.props.category,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    let category = this.state.category ? this.state.category : "general";
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        this.setState({ articles: res.data.articles });
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }

  nextSlide = () => {
    const { articles } = this.state;
    this.setState(prevState => ({
      currentSlide: (prevState.currentSlide + 1) % Math.min(articles.length, 5)
    }));
  };

  prevSlide = () => {
    const { articles } = this.state;
    this.setState(prevState => ({
      currentSlide: prevState.currentSlide === 0 
        ? Math.min(articles.length, 5) - 1 
        : prevState.currentSlide - 1
    }));
  };

  handleImgError = (e) => {
    e.target.src = "assets/images/tech/demo.jpg";
  };

  render() {
    const { articles, currentSlide } = this.state;
    const displayArticles = articles.slice(0, 5);

    return (
      <div className="bg-gray-50 dark:bg-gray-800 pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Carousel */}
            <div className="lg:col-span-2">
              <h2 className="newspaper-headline text-news-primary dark:text-white mb-6 border-b-4 border-news-accent dark:border-yellow-400 pb-2">
                Latest Headlines
              </h2>
              <div className="relative overflow-hidden rounded-lg shadow-2xl bg-white dark:bg-gray-900">
                {displayArticles.length > 0 && (
                  <div className="relative h-96 md:h-[500px]">
                    {displayArticles.map((article, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block h-full relative group"
                        >
                          <img
                            src={article.urlToImage || "assets/images/tech/demo.jpg"}
                            alt={article.title}
                            className="w-full h-full object-cover"
                            onError={this.handleImgError}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="mb-2">
                              <span className="bg-news-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                                Breaking News
                              </span>
                            </div>
                            <h3 className="newspaper-subheadline text-white mb-3 group-hover:text-news-accent transition-colors">
                              {article.title ? article.title.slice(0, 100) : "No title available"}
                              {article.title && article.title.length > 100 ? "..." : ""}
                            </h3>
                            <p className="newspaper-body text-gray-200 mb-4">
                              {article.description
                                ? article.description.slice(0, 150) + "..."
                                : "No description available"}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="newspaper-byline text-gray-300">
                                {article.source?.name || "Unknown Source"}
                              </span>
                              <span className="text-sm text-gray-400">
                                {new Date(article.publishedAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                
                {/* Navigation Buttons */}
                {displayArticles.length > 1 && (
                  <>
                    <button
                      onClick={this.prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={this.nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Slide Indicators */}
                {displayArticles.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {displayArticles.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => this.setState({ currentSlide: index })}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentSlide 
                            ? 'bg-news-accent scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Twitter Feed Sidebar */}
            <div className="lg:col-span-1">
              <TwitterFeed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
