function ErrorFallback({ error }) {
  return (
    <div
      role='alert'
      className='p-4 top-0 bottom-0 right-0 left-0 bg-red-400 rounded w-1/3 h-fit absolute m-auto'
    >
      <p>Something went wrong:</p>

      <span>{error.message}</span>
    </div>
  );
}

export default ErrorFallback;
