const ACTIONS = {
  SET_NODES: 'set_nodes',
  SET_EDGES: 'set_edges',
  SET_RESOURCE: 'set_resource',
  SET_MICROSERVICE: 'set_microservice',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_RESOURCE:
      return {
        ...state,
        resources: action.payload,
      };
    case ACTIONS.SET_MICROSERVICE:
      return {
        ...state,
        microservices: action.payload,
      };
    case ACTIONS.SET_NODES:
      return {
        ...state,
        nodes: action.payload,
      };
    case ACTIONS.SET_EDGES:
      return {
        ...state,
        edges: action.payload,
      };
    default:
      return state;
  }
}

export { ACTIONS, reducer };
