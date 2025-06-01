import React from 'react';
import styles from 'src/tv/Components/ErrorFallback/ErrorFallback.module.scss';
import { ErrorMessages } from 'src/tv/Strings/Strings';

interface ErrorFallbackProps {
    error: Error | null;
    resetErrorBoundary?: () => void;
    errorInfo: React.ErrorInfo | null;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary, errorInfo }) => {
    return (
        <div>
            <h2>{ErrorMessages.title}</h2>
            <p>{error?.message}</p>
            {errorInfo && <details className={styles.errorDetail}>{errorInfo.componentStack}</details>}
            {resetErrorBoundary && <button onClick={resetErrorBoundary}>{ErrorMessages.resetButton}</button>}
        </div>
    );
};

export default ErrorFallback;
