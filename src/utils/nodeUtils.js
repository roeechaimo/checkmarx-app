const buildEdge = (source, target) => {
  return {
    id: `e${source}-${target}`,
    source,
    target,
  };
};

const buildEdges = (microservices, resources) => {
  let edges = [];
  resources.map((resource) => {
    const { microservices: microserviceArr, id } = resource;
    microserviceArr.map((itemId) => {
      const connectedMicroservice = microservices.find(
        (microservice) => itemId === microservice.id
      );

      if (connectedMicroservice) {
        edges = [...edges, buildEdge(id, itemId)];
      }
    });
  });

  return edges;
};

export { buildEdges };
