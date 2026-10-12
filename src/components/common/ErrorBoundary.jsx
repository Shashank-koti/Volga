import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 my-6 mx-auto max-w-xl rounded-xl bg-red-950/40 border border-red-500/40 text-white text-center">
          <h3 className="text-lg font-bold text-red-400 mb-2">Section Failed to Render</h3>
          <p className="text-xs font-mono text-slate-300 mb-4 bg-black/50 p-3 rounded">
            {this.state.error?.message || 'Unknown render error'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-bold transition-colors"
          >
            Retry Section
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
