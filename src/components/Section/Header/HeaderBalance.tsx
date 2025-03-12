import { useUserInfo } from "@/hooks/useUserInfo";
import { formatNumberDot } from "@/utils/fc.utils";

export default function HeaderBalance() {
  const { user } = useUserInfo();
  return (
    <div className="relative">
      <img
        src="/currency/coin.png"
        className="w-8 h-8 absolute top-[-4px] left-[-6px]"
        style={{
          zIndex: 10,
        }}
      />
      <div
        className="w-[134px] h-6 rounded-[2px]  bg-black border-1 border-solid border-black pl-6 flex items-center justify-center py-1 relative z-1"
        style={{
          clipPath: "polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)",
        }}
      >
        <p className="text-custom-sm-bold text-white custom-border-text-1 z-2 relative stroke-0-4">
          {user && formatNumberDot(user?.points)}
        </p>
      </div>
    </div>
  );
}
