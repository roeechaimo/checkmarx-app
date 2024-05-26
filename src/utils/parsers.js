import {
  ACCESS_TO_IMAGE,
  HOR_MICROSERVICE_POSITION,
  HOR_RESOURCE_POSITION,
  LANGUAGE_TO_IMAGE,
  NODE_TYPES,
  RESOURCE_TO_IMAGE,
  VER_GAP,
} from '../node.config';

const parseResources = (resources) => {
  const parsedResources = resources.map((resource, index) => {
    const { name, type, access, microservices } = resource;
    const accessTypeImage = ACCESS_TO_IMAGE[access];
    const typeImage = RESOURCE_TO_IMAGE[type];
    const componentType = NODE_TYPES.RESOURCE;
    const position = { x: HOR_RESOURCE_POSITION, y: index * VER_GAP };
    const data = {
      name,
      accessTypeImage,
      typeImage,
    };

    return {
      id: index.toString(),
      type: componentType,
      access,
      microservices,
      resourceType: type,
      position,
      data,
    };
  });

  return parsedResources;
};

const parseMicroservices = (microservices) => {
  const parsedMicroservices = microservices.map((microservice, index) => {
    const { language, microserviceId } = microservice;
    const languageImage = LANGUAGE_TO_IMAGE[language];
    const type = NODE_TYPES.MICROSERVICE;
    const position = { x: HOR_MICROSERVICE_POSITION, y: index * VER_GAP };
    const data = {
      languageImage,
    };

    return {
      language,
      id: microserviceId,
      type,
      position,
      data,
    };
  });

  return parsedMicroservices;
};

export { parseMicroservices, parseResources };
