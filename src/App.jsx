import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import 'reactflow/dist/style.css';
import './App.css';
import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Graph from './components/Graph/Graph';
import GraphLegend from './components/GraphLegend/GraphLegend';
import Loader from './components/Loader/Loader';
import { AppContext } from './contexts/AppContext';

function App() {
  const { isLoading } = useContext(AppContext);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='w-screen h-screen'>
        {isLoading && (
          <div className='flex fixed top-0 bottom-0 right-0 left-0 justify-center items-center'>
            <Loader />
          </div>
        )}

        <Graph />

        <GraphLegend containerStyle='bg-gray-100 text-gray-900 absolute bottom-8 right-8' />
      </div>
    </ErrorBoundary>
  );
}

export default App;
