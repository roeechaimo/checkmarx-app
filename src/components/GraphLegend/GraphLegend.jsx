import {
  ACCESS_TO_IMAGE,
  LANGUAGE_TO_IMAGE,
  RESOURCE_TO_IMAGE,
} from '../../node.config';
import Image from '../Image/Image';

const sections = [LANGUAGE_TO_IMAGE, ACCESS_TO_IMAGE, RESOURCE_TO_IMAGE];

function GraphSection({ map, style }) {
  return (
    <div className={style}>
      {Object.entries(map).map((item, index) => {
        return (
          <div
            key={index}
            className='flex justify-between items-center p-2'
          >
            <div className='pr-0.5'>{item[0]}</div>

            <Image src={item[1]} />
          </div>
        );
      })}
    </div>
  );
}

function GraphLegend({ containerStyle }) {
  return (
    <div className={`${containerStyle} rounded-sm`}>
      {sections.map((section, index) => (
        <GraphSection
          key={index}
          map={section}
          style={`${
            index !== sections.length - 1 && 'border-b-2 border-gray-400'
          }`}
        />
      ))}
    </div>
  );
}

export default GraphLegend;
