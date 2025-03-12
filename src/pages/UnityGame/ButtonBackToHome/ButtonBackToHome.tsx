import { ROUTE_PATH } from "@/router/route-path";
import { CircularProgress } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ButtonBackToHome({
  title = "BACK TO HOME",
  loading,
}: {
  title?: string;
  loading?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-[#094EED] border-1 border-solid border-black rounded-[7px] pb-[3px] h-[68px] w-full"
      onClick={() => navigate(ROUTE_PATH.HOME)}
      style={{
        clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
      }}
    >
      <div className="bg-[#094EED] shadow-1 rounded-[6px] w-full h-full p-[3px]">
        <div
          className="bg-[#2574FF] w-full h-full rounded-[4px]  py-1 flex items-center justify-center gap-1"
          style={{
            boxShadow: "0px 0px 30px 8px #0000000D inset",
          }}
        >
          {loading && <CircularProgress />}
          {!loading && (
            <>
              <p
                className="text-custom-2xl-bold text-white stroke-1-51 font-lilita-one"
                style={{
                  WebkitTextFillColor: "white",
                  WebkitTextStroke: "1.51px black",
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
