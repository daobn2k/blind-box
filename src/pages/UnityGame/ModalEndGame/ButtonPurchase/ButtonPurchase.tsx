import { CircularProgress } from "@nextui-org/react";

export default function ButtonPurchase({
  title,
  loading,
  onClick,
}: {
  title: string;
  loading: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      className="bg-t-brown-1 border-1 border-solid border-black rounded-[7px] pb-[3px] h-[68px] w-full"
      onClick={onClick}
      style={{
        clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
      }}
    >
      <div
        className="bg-t-yellow-1 shadow-1 rounded-[6px] w-full h-full p-[3px]"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        <div
          className="linear-gradient-play-game w-full h-full rounded-[4px]  py-1 flex items-center justify-center gap-1"
          style={{
            boxShadow: "0px 0px 30px 8px #0000000D inset",
          }}
        >
          {loading && <CircularProgress />}
          {!loading && (
            <>
              <p
                className="text-custom-4xl-bold text-white stroke-0-4"
                style={{
                  textShadow: "0px 2.5px 0px 0px #000000",
                }}
              >
                {title}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
