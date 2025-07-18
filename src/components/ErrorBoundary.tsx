import { Component, ErrorInfo, ReactNode, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import { Bug, RefreshCw, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactElement;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  resetOnChange?: any[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  timestamp: number;
}

// Helper component to use hooks in class component
const ErrorFallback = ({
  error,
  errorInfo,
  onRetry,
}: {
  error: Error;
  errorInfo?: ErrorInfo;
  onRetry: () => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-50">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-red-50 rounded-full mb-4">
          <Bug className="w-8 h-8 text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Something went wrong
        </h1>
        <p className="text-slate-600 mb-6">
          We apologize for the inconvenience. Our team has been notified about
          this issue.
        </p>

        {process.env.NODE_ENV === "development" && (
          <details className="text-left mb-6 bg-slate-50 p-4 rounded-lg overflow-auto max-h-60">
            <summary className="cursor-pointer text-sm font-medium text-slate-700 mb-2">
              Error Details
            </summary>
            <pre className="text-xs text-red-600 whitespace-pre-wrap">
              {error.toString()}
              {errorInfo?.componentStack}
            </pre>
          </details>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={onRetry} className="gap-2" variant="default">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="gap-2"
            variant="outline"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    timestamp: Date.now(),
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
      timestamp: Date.now(),
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({ error, errorInfo });
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    // Reset error boundary when resetOnChange dependencies change
    if (
      this.state.hasError &&
      this.props.resetOnChange &&
      JSON.stringify(prevProps.resetOnChange) !==
        JSON.stringify(this.props.resetOnChange)
    ) {
      this.resetErrorBoundary();
    }
  }

  resetErrorBoundary = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      timestamp: Date.now(),
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      // Use provided fallback or default error UI
      return (
        fallback || (
          <ErrorFallback
            error={error}
            errorInfo={errorInfo}
            onRetry={this.resetErrorBoundary}
          />
        )
      );
    }

    return children;
  }
}

export default ErrorBoundary;
