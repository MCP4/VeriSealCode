// Replaces next/image's `fill` layout: an absolutely-positioned image that
// covers its (position: relative) parent. Parent controls aspect ratio + radius.
export default function CoverImage({ src, alt = '', objectPosition = 'center', priority }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition,
      }}
    />
  );
}
