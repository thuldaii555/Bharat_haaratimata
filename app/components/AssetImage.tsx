import Image from "next/image";

type AssetImageProps = {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  label?: string;
};

export function AssetImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  label,
}: AssetImageProps) {
  return (
    <div className={`asset-image ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,252,245,0.72),transparent_9rem),radial-gradient(circle_at_78%_20%,rgba(217,213,204,0.48),transparent_10rem),linear-gradient(135deg,#e8dfd1,#d9d5cc_42%,#c8b89d_74%,#a98263)]" />
      )}
      <div className="asset-image-overlay" />
      {label ? (
        <span className="absolute bottom-5 left-5 z-10 rounded-full bg-ivory/82 px-4 py-2 text-xs uppercase tracking-[0.16em] text-walnut shadow-sm backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
