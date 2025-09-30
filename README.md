# NextIn News

NextIn News is a news application built for learning purposes. This project combines real-time weather updates with news headlines and category-specific news, providing a user-friendly interface built using React JS and React Bootstrap.

> **✨ Recently Updated**: This project has been modernized to use React 18 and the latest stable versions of all dependencies. See the [Beta Branch Improvements](#beta-branch-improvements) section for details.

## Features

- **Weather Updates**: Fetches current weather information using the Weather API.
- **News Headlines & Categories**: Retrieves latest news headlines and category-based news through the News API.
- **UI Components**: Built with both functional and class-based components for learning versatility.
- **Responsive Design**: Uses React Bootstrap for seamless responsiveness across devices.
- **Modern React**: Now uses React 18 with the latest createRoot API
- **Secure**: Updated with security best practices and latest dependency versions

## Getting Started

### Prerequisites

1. **API Keys**: Sign up and obtain API keys from the following services:
   - **Weather API**: [https://www.weatherapi.com/](https://www.weatherapi.com/)
   - **News API**: [https://newsapi.org/](https://newsapi.org/)

2. **Environment Variables**:
   - Copy the sample environment file to `.env`:

     ```bash
     cp env-sample .env
     ```

   - Open `.env` and add your Weather API and News API keys.

### Installation

1. Clone this repository.
2. Navigate to the project directory and install dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run start
```

This will start the application on [http://localhost:3000](http://localhost:3000).

## Built With

- **React 18.3.1** – Latest stable version of React with modern features
- **React Bootstrap 2.10.10** – Latest responsive components for Bootstrap styling
- **Bootstrap 5.3.8** – Latest stable version of Bootstrap
- **React Router DOM 6.30.1** – Modern routing for React applications
- **Axios 0.27.2** – HTTP client for API requests
- **React Icons 4.12.0** – Icon library for React
- **Weather API** – For real-time weather updates
- **News API** – For retrieving news headlines and category-specific news

## Project Structure

This project utilizes both **functional** and **class-based components**, allowing for a broader understanding of React component types.

## Beta Branch Improvements

The `beta` branch contains significant modernization improvements:

### 🔧 Technical Updates
- **React**: Upgraded from 17.0.2 → 18.3.1
- **React DOM**: Updated to use the new `createRoot` API instead of deprecated `render`
- **Dependencies**: All dependencies updated to latest stable versions
- **Security**: Reduced vulnerabilities from 59 to 10
- **ESLint**: Fixed all linting warnings and errors
- **Build**: Project now builds successfully without warnings

### 🛡️ Security Improvements
- Added `rel="noreferrer"` to all external links
- Updated to secure versions of all dependencies
- Fixed potential security vulnerabilities

### 🎯 Code Quality
- Fixed React hooks dependency warnings
- Removed unused imports and variables
- Improved error handling in API calls
- Updated to modern React patterns

### ✅ Testing & Building
- ✅ Tests: All tests now pass
- ✅ Build: Production build works successfully
- ✅ Development: Dev server runs without issues
- ✅ Navigation: All routing works correctly

### 🚀 Performance
- Removed unused dependencies (Swiper, react-owl-carousel)
- Updated to more efficient React 18 rendering
- Cleaner bundle size and faster loading

