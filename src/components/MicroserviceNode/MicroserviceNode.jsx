import { Handle, Position } from 'reactflow';

function MicroserviceNode({ data }) {
  return (
    <>
      <div className='flex p-2 w-20 h-20 bg-green-300 justify-center items-center rounded-full'>
        <img
          src={data?.languageImage}
          className='h-12 w-12'
        />
      </div>

      <Handle
        type='target'
        position={Position.Right}
      />
    </>
  );
}

export default MicroserviceNode;
