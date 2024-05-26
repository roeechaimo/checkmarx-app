const ALT_TEXT = 'Unknown';
const FALLBACK_IMAGE = './icons8-unknown-60.png';

function Image({
  src,
  fallbackImage = FALLBACK_IMAGE,
  height = 12,
  width = 12,
  altText = ALT_TEXT,
  props,
}) {
  return (
    <img
      className={`h-${height} w-${width}`}
      alt={altText}
      src={src || fallbackImage}
      {...props}
    />
  );
}

export default Image;
