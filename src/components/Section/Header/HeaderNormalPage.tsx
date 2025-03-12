import { ROUTE_PATH } from "@/router/route-path";
import { useNavigate } from "react-router-dom";

export default function HeaderNormalPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="w-full h-[66px] bg-cover bg-no-repeat px-4 pt-[14px] pb-[12px] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/global/header.svg')",
        }}
      >
        <div
          className="absolute top-[12px] left-4 z-10"
          onClick={() => navigate(ROUTE_PATH.HOME)}
        >
          <img
            src="/global/button-back.png"
            className="w-12 h-10 object-cover"
          />
        </div>
        <p className="text-custom-xl-bold text-white stroke-1 uppercase">
          {title}
        </p>
      </div>
      <p className="text-custom-sm-bold text-white stroke-1 uppercase text-center mt-4 font-lilita-one">
        {description}
      </p>
    </div>
  );
}
