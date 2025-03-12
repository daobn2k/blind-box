import clsx from "clsx";

export default function ProcessBar({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) {
  return (
    <div
      className={clsx("h-1 w-full rounded-full bg-[#FFFFFF33] relative mt-4", {
        [className]: !!className,
      })}
    >
      <div
        className="absolute top-0 bottom-0 bg-[#FFFFFF] rounded-full transition-all"
        style={{
          width: `${value}%`,
        }}
      />
    </div>
  );
}
