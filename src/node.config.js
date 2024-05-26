import MicroserviceNode from './components/MicroserviceNode/MicroserviceNode';
import ResourceNode from './components/ResourceNode/ResourceNode';

const NODE_TYPES = {
  RESOURCE: 'resourceNode',
  MICROSERVICE: 'microserviceNode',
};

const RESOURCE_TYPES = {
  ELASTIC_CACHE: 'aws_elasticache_cluster',
  S3: 'aws_s3_bucket',
  MQ_BROKER: 'aws_mq_broker',
};

const ACCESS_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
};

const LANGUAGES = {
  JAVA: 'Java',
  PYTHON: 'Python',
  C_SHARP: 'Csharp',
};

const NODE_TYPES_TO_COMPONENT = {
  [NODE_TYPES.RESOURCE]: ResourceNode,
  [NODE_TYPES.MICROSERVICE]: MicroserviceNode,
};

const LANGUAGE_TO_IMAGE = {
  [LANGUAGES.JAVA]: './icons8-java-50.png',
  [LANGUAGES.PYTHON]: './icons8-python-50.png',
  [LANGUAGES.C_SHARP]: './icons8-c-sharp-50.png',
};

const ACCESS_TO_IMAGE = {
  [ACCESS_TYPES.PUBLIC]: './icons8-public-50.png',
  [ACCESS_TYPES.PRIVATE]: './icons8-unlock-private-50.png',
};

const RESOURCE_TO_IMAGE = {
  [RESOURCE_TYPES.ELASTIC_CACHE]:
    './EC_Memcached.fdd0a4af956a3838bddba818eab0c29fb8756c62.png',
  [RESOURCE_TYPES.S3]: './icons8-s3-50.png',
  [RESOURCE_TYPES.MQ_BROKER]: './rsz_pikpngcom_amazon-icon-png_701820.png',
};

const HOR_MICROSERVICE_POSITION = 0;
const HOR_RESOURCE_POSITION = HOR_MICROSERVICE_POSITION + 300;
const VER_INITIAL_POSITION = 0;
const VER_GAP = 200;

export {
  ACCESS_TO_IMAGE,
  HOR_MICROSERVICE_POSITION,
  HOR_RESOURCE_POSITION,
  LANGUAGE_TO_IMAGE,
  NODE_TYPES,
  NODE_TYPES_TO_COMPONENT,
  RESOURCE_TO_IMAGE,
  VER_GAP,
  VER_INITIAL_POSITION,
};
