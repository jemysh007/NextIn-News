import React from "react";

export default function NewsCard(props) {
  let { urlToImage, source, description, title, url, publishedAt } = props.data;
  
  const handleImgError = (e) => {
    e.target.src = "assets/images/dashboard/glob.jpg";
  };

  const getDateTime = (date) => {
    const dateObj = new Date(date);
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit' 
    };
    return dateObj.toLocaleDateString('en-US', options);
  };

  return (
    <article className="news-card rounded-lg overflow-hidden h-full flex flex-col group hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <img
          src={urlToImage || "assets/images/dashboard/glob.jpg"}
          alt={title || "News image"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={handleImgError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {source && source.name && (
          <div className="absolute top-4 left-4">
            <span className="bg-news-accent text-black px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
              {source.name}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="news-card-title mb-3 line-clamp-2 group-hover:text-news-accent dark:group-hover:text-yellow-400 transition-colors">
          {title ? title.slice(0, 100) : "No title available"}
          {title && title.length > 100 ? "..." : ""}
        </h3>
        
        <p className="news-card-excerpt mb-4 flex-1 line-clamp-3">
          {description ? description.slice(0, 150) : "No description available"}
          {description && description.length > 150 ? "..." : ""}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-4 py-2 bg-news-primary dark:bg-news-accent text-white dark:text-black font-semibold rounded-lg hover:bg-news-accent dark:hover:bg-yellow-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-news-accent focus:ring-offset-2"
          >
            Read Article
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <div className="text-right">
            <p className="newspaper-byline text-xs text-gray-500 dark:text-gray-400">
              Published
            </p>
            <p className="newspaper-byline text-xs font-medium text-gray-700 dark:text-gray-300">
              {getDateTime(publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
