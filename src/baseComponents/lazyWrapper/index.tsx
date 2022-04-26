import { FC, lazy, Suspense } from 'react';
import ErrorBoundary from '../errorBoundary'
interface LazyWrapperProps {
  /** 组件路径： 在 src/pages 目录下的页面路径，eg: /home => src/pages/home/index.tsx */
  path: string;
}

/**
 * 懒加载组件包装器
 */
const LazyWrapper: FC<LazyWrapperProps> = ({ path }) => {
  const LazyComponent = lazy(() => import(`/src/pages${path}`));

  return (
    <Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary>
        <LazyComponent />
      </ErrorBoundary>
    </Suspense>
  );
};

export default LazyWrapper;
