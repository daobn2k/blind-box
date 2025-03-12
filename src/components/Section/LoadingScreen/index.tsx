import { useUserInfo } from "@/hooks/useUserInfo";
import { atomLoading } from "@/store/loading.store";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import ProcessBar from "../../UI/ProcessBar/ProcessBar";
import WrapperPage from "../WrapperPage";
import { CircularProgress } from "@nextui-org/react";
import clsx from "clsx";
export default function LoadingScreen({
  loading,
  isGame,
  isLoaded,
}: {
  loading?: boolean;
  isGame?: boolean;
  isLoaded?: boolean;
}) {
  const { user } = useUserInfo();
  const [, setLoading] = useAtom(atomLoading);
  const [value, setValue] = useState<number>(25);

  useEffect(() => {
    if (!user && !isGame) return;
    const interval = setInterval(() => {
      if (value >= 100) {
        return setLoading(false);
      }
      setValue((v) => v + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [value, user, isGame]);

  useEffect(() => {
    if (!isLoaded && isGame) return;
    const interval = setInterval(() => {
      if (value >= 100) {
        return setLoading(false);
      }
      setValue((v) => v + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [value, isLoaded, isGame]);
  return (
    <WrapperPage
      className={clsx(
        " bg-no-repeat bg-cover fixed z-[9999] top-0 left-0 right-0 bottom-0 !mb-0 !pb-0 py-12 px-6",
        { ["!z-0"]: isLoaded && value >= 100 }
      )}
      showMenu={false}
      style={
        {
          // backgroundImage: `url('/loading/loading-screen.png')`,
        }
      }
    >
      <div className="flex  justify-center items-center flex-col mt-4">
        <p className="text-custom-xl-bold text-white font-korolev-compressed">
          INITIALIZING...
        </p>
        {loading && <CircularProgress className="mt-4" />}
        {!loading && <ProcessBar value={value} />}
      </div>
      <div className="flex items-center justify-center mt-7">
        <img src="logo-wtf.png" className="h-[54.5px] w-[64px]" />
      </div>
    </WrapperPage>
  );
}
