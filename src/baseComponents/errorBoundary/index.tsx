import React, { ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  fallback?: ReactNode | null;
  onError?: (error:Error ,errorInfo: ErrorInfo) => void;
  children: ReactNode;
};

type ErrorBoundaryState = {
  isError: boolean;
  retryCount: number;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      isError: false,
      retryCount: 0,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('error::', error);
    console.log('errorInfo::', errorInfo);
    const { retryCount } = this.state;
    const {onError} = this.props
    if (retryCount > 2) {
      this.setState({
        isError: true,
      });
    } else {
      this.setState({
        retryCount: retryCount + 1,
      });
    }
    onError?.(error, errorInfo);
  }

  render() {
    const { isError } = this.state;
    const { fallback, children } = this.props;
    if (isError) {
      if (fallback) {
        // 自定义渲染
        return fallback;
      }
      // 出错后的默认渲染
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}
export default ErrorBoundary
