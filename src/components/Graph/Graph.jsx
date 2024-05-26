import { useEffect, useReducer } from 'react';
import ReactFlow, { Controls } from 'reactflow';
import { PATHS } from '../../api/paths';
import useApi from '../../hooks/useApi';
import { useAsyncError } from '../../hooks/useAsyncError';
import { NODE_TYPES_TO_COMPONENT } from '../../node.config';
import { buildEdges } from '../../utils/nodeUtils';
import { parseMicroservices, parseResources } from '../../utils/parsers';
import { ACTIONS, reducer } from './reducer';

function Graph({}) {
  const throwError = useAsyncError();

  const [state, dispatch] = useReducer(reducer, {
    nodes: [],
    edges: [],
    microservices: [],
    resources: [],
  });

  const { fetchData: fetchMicroservices } = useApi({
    onSuccess: (res) => {
      const microservices = parseMicroservices(res.microservices);

      dispatch({ type: ACTIONS.SET_MICROSERVICE, payload: microservices });
    },
    onError: (error) => {
      throwError(error);
    },
  });

  const { fetchData: fetchResources } = useApi({
    onSuccess: (res) => {
      const resources = parseResources(res.resources);

      dispatch({ type: ACTIONS.SET_RESOURCE, payload: resources });
    },
    onError: (error) => {
      throwError(error);
    },
  });

  useEffect(() => {
    fetchResources(PATHS.RESOURCES);

    fetchMicroservices(PATHS.MICROSERVICES);
  }, []);

  useEffect(() => {
    if (state.microservices.length && state.resources.length) {
      dispatch({
        type: ACTIONS.SET_NODES,
        payload: [...state.microservices, ...state.resources],
      });

      const edgesArr = buildEdges(state.microservices, state.resources);

      dispatch({
        type: ACTIONS.SET_EDGES,
        payload: edgesArr,
      });
    }
  }, [state.microservices, state.resources]);

  return (
    <>
      {state.nodes.length > 0 && (
        <ReactFlow
          nodes={state.nodes}
          edges={state.edges}
          nodeTypes={NODE_TYPES_TO_COMPONENT}
        >
          <div className='absolute bottom-8'>
            <Controls
              showFitView={false}
              showInteractive={false}
            />
          </div>
        </ReactFlow>
      )}
    </>
  );
}

export default Graph;
