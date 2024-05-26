import { Handle, Position } from 'reactflow';
import Image from '../Image/Image';

function ResourceNode({ data }) {
  return (
    <>
      <div className='flex w-56 h-28 justify-between items-center bg-gray-300'>
        <div className='flex flex-col w-36 h-24 justify-center items-center mr-2'>
          <Image src={data?.accessTypeImage} />

          <Image src={data?.typeImage} />
        </div>

        <span className='text-black mr-2'>{data?.name}</span>

        <Handle
          type='source'
          position={Position.Left}
        />
      </div>
    </>
  );
}

export default ResourceNode;
