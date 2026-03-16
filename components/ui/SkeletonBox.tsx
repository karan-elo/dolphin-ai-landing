interface SkeletonBoxProps {
  className?: string;
}

export default function SkeletonBox({ className = "" }: SkeletonBoxProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 animate-pulse bg-[#28292c] rounded-[16px] ${className}`}
    />
  );
}
