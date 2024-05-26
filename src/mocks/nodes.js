import {
  ACCESS_TO_IMAGE,
  HOR_MICROSERVICE_POSITION,
  HOR_RESOURCE_POSITION,
  LANGUAGE_TO_IMAGE,
  NODE_TYPES,
  RESOURCE_TO_IMAGE,
  VER_GAP,
  VER_INITIAL_POSITION,
} from '../node.config';

const mockNodes = [
  {
    id: '1',
    type: NODE_TYPES.RESOURCE,
    position: { x: HOR_RESOURCE_POSITION, y: VER_INITIAL_POSITION },
    data: {
      label: '1',
      name: 'MemCache_1',
      accessTypeImage: ACCESS_TO_IMAGE.PRIVATE,
      typeImage: RESOURCE_TO_IMAGE.ELASTIC_CACHE,
    },
  },
  {
    id: '2',
    type: NODE_TYPES.RESOURCE,
    position: { x: HOR_RESOURCE_POSITION, y: VER_GAP },
    data: {
      label: '1',
      name: 'MemCache_2',
      accessTypeImage: ACCESS_TO_IMAGE.PUBLIC,
      typeImage: RESOURCE_TO_IMAGE.ELASTIC_CACHE,
    },
  },
  {
    id: '3',
    type: NODE_TYPES.MICROSERVICE,
    position: { x: HOR_MICROSERVICE_POSITION, y: VER_INITIAL_POSITION },
    data: { languageImage: LANGUAGE_TO_IMAGE.C_SHARP },
  },
  {
    id: '4',
    type: NODE_TYPES.MICROSERVICE,
    position: { x: HOR_MICROSERVICE_POSITION, y: VER_GAP },
    data: { languageImage: LANGUAGE_TO_IMAGE.JAVA },
  },
];

const mockEdges = [
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e1-4', source: '1', target: '4' },
];

const initialNodes = mockNodes;
const initialEdges = mockEdges;

export { initialEdges, initialNodes };
