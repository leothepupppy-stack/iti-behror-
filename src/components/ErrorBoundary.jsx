import { Component } from 'react';
import { LanguageContext } from '../context/LanguageContext.jsx';

// Catches render errors and failed lazy-loaded page chunks (e.g. when the visitor
// goes offline) and shows a translated message instead of a blank screen.
export default class ErrorBoundary extends Component {
  static contextType = LanguageContext;

  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Page failed to render:', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const t = this.context?.t;
    const text = (key, fallback) => (t ? t(key) : fallback);

    return (
      <section className="section">
        <div className="container">
          <div className="empty-state" role="alert">
            <h1>{text('error.title', 'Something went wrong')}</h1>
            <p>
              {text(
                'error.text',
                'An unexpected error occurred while loading this page. Please try again.',
              )}
            </p>
            <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
              {text('error.reload', 'Reload page')}
            </button>
          </div>
        </div>
      </section>
    );
  }
}
