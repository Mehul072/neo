import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from 'react-router';
import ScrollToTop from './components/ScrollToTop'

const rootElement = document.getElementById('root');

// If react-snap has pre-rendered content, hydrate it instead of re-rendering
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  );
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  );
}
