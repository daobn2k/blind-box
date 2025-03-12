import { useUserInfo } from "@/hooks/useUserInfo";

export default function HeaderInfo() {
  const { user } = useUserInfo();

  return (
    <div
      className="relative bg-no-repeat bg-center bg-cover w-auto h-[50px] flex items-end justify-center min-w-[78px]"
      style={{
        backgroundImage: "url('/global/user-info.png')",
      }}
    >
      {/* <div className="w-[134px] h-6 rounded-lg bg-ui-background-3 border-1 border-solid border-black pl-6 flex items-center justify-center py-1 absolute top-2">
        <div className="bg-[#004154] h-1/3 absolute top-0 left-0 right-0 rounded-t-lg z-1"></div>
        <p className="text-custom-sm-bold text-white z-2 relative stroke-0-4">
          {user?.username}
        </p>  
      </div>
      <div className="flex items-center justify-center p-[3px] bg-t-blue-1 border-1 border-solid border-black rounded-lg relative">
        <div className="bg-ui-background-3 rounded-[6px] w-8 h-8">
          <img src="/character/hamter.svg" className="object-cover" />
        </div>
      </div>
      <div
        className="bg-contain bg-no-repeat bg-full h-[12px] min-w-[28px] absolute bottom-[-6px] left-[6px] flex items-center justify-center"
        style={{
          backgroundImage: "url('/rank/rank.png')",
        }}
      >
      
      </div> */}
      <p
        className="text-custom-xs-bold stroke-0-8 text-white relative mb-1 font-lilita-one"
        style={{
          zIndex: 10,
          WebkitTextStrokeColor: "black",
        }}
      >
        {user?.username}
      </p>
      <img
        src={user?.avatar || "/global/avatar.svg"}
        className="absolute top-[4px] w-8 h-8"
      />
    </div>
  );
}
