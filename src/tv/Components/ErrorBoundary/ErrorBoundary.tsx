import React from 'react';
import ErrorFallback from 'src/tv/Components/ErrorFallback/ErrorFallback';

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false, error: null, errorInfo: null };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
        this.setState({ errorInfo });
    }


    resetErrorBoundary = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render() {
        const { hasError, error, errorInfo } = this.state;
        const { fallback } = this.props;

        if (hasError) {
            if (fallback) {
                return <>{fallback}</>;
            } else {
                return <ErrorFallback error={error} resetErrorBoundary={this.resetErrorBoundary} errorInfo={errorInfo}></ErrorFallback>
            }
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
