import React, { useState, useEffect, useCallback } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function CommanNews(props) {
  const [articles, setArticles] = useState([]);
  const { title, limit, category: propCategory, setProgress } = props;
  const category = propCategory && propCategory !== "" ? propCategory : "general";

  const updateNews = useCallback(() => {
    setProgress(15);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${process.env.REACT_APP_NEWSAPI}`
      )
      .then((res) => {
        setProgress(80);
        setArticles(res.data.articles.slice(0, limit ? limit : 150));
        setProgress(100);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setProgress(100);
      });
  }, [category, limit, setProgress]);

  useEffect(() => {
    updateNews();
  }, [updateNews]);
  
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="newspaper-headline text-news-primary dark:text-white mb-4 border-b-4 border-news-accent dark:border-yellow-400 pb-2 inline-block">
            {title}
          </h2>
          <div className="w-24 h-1 bg-news-accent dark:bg-yellow-400 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="flex">
              <NewsCard data={article} />
            </div>
          ))}
        </div>
        
        {articles.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-pulse">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="bg-gray-200 dark:bg-gray-700 rounded-lg h-96"></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
