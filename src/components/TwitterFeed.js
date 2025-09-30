import React, { useState, useEffect, useCallback } from 'react';

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock Twitter data since we can't use real Twitter API without authentication
  // In a real app, you'd use Twitter API v2 with proper authentication
  const mockTweets = useCallback(() => [
    {
      id: 1,
      user: "@BBCBreaking",
      username: "BBC Breaking News",
      content: "🚨 BREAKING: Major developments in global climate summit as world leaders reach unprecedented agreement on carbon reduction targets.",
      timestamp: "2m",
      likes: 1247,
      retweets: 892,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b48883c5?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 2,
      user: "@Reuters",
      username: "Reuters",
      content: "📈 Global markets surge following positive economic indicators. Tech stocks lead the rally with unprecedented gains across major indices.",
      timestamp: "15m",
      likes: 834,
      retweets: 567,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 3,
      user: "@TechReporter",
      username: "Tech News Daily",
      content: "🔬 Revolutionary breakthrough in quantum computing could change everything we know about data processing and encryption.",
      timestamp: "32m",
      likes: 2156,
      retweets: 1423,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 4,
      user: "@SportsCenter",
      username: "ESPN SportsCenter",
      content: "⚽ GOAL! Incredible finish caps off what might be the match of the century. Fans are going absolutely wild! #Football",
      timestamp: "1h",
      likes: 3892,
      retweets: 2144,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 5,
      user: "@HealthNews",
      username: "Health & Science",
      content: "🧬 New study reveals promising results for early detection methods. This could save thousands of lives annually.",
      timestamp: "2h",
      likes: 1674,
      retweets: 923,
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face"
    },
    {
      id: 6,
      user: "@WeatherAlert",
      username: "Weather Network",
      content: "🌪️ Severe weather warning issued for multiple regions. Stay safe and follow local emergency guidelines. Updates to follow.",
      timestamp: "3h",
      likes: 567,
      retweets: 890,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ], []);

  useEffect(() => {
    // Simulate API call
    const fetchTweets = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTweets(mockTweets());
      setLoading(false);
    };

    fetchTweets();
  }, [mockTweets]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="newspaper-subheadline text-news-accent dark:text-yellow-400 mb-6 border-b-2 border-news-accent dark:border-yellow-400 pb-2">
        🐦 Trending News
      </h3>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="news-card p-4 rounded-lg hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-start space-x-3">
            <img 
              src={tweet.avatar} 
              alt={tweet.username}
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40x40/8B5CF6/FFFFFF?text=' + tweet.username.charAt(1);
              }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate">
                    {tweet.username}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {tweet.user}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    •
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {tweet.timestamp}
                  </span>
                </div>
              </div>
              <p className="newspaper-body text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">
                {tweet.content}
              </p>
              <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1 hover:text-red-500 cursor-pointer transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{formatNumber(tweet.likes)}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-green-500 cursor-pointer transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>{formatNumber(tweet.retweets)}</span>
                </div>
                <div className="flex items-center space-x-1 hover:text-blue-500 cursor-pointer transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>Share</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TwitterFeed;