/* eslint-disable react-hooks/rules-of-hooks */
import { authUser } from "@/api/auth/auth";
import LoadingScreen from "@/components/Section/LoadingScreen";
import { useHapticFeedback } from "@/hooks/useHaptic";
import { useUserInfo } from "@/hooks/useUserInfo";
import { atomLoading } from "@/store/loading.store";
import { useRequest } from "ahooks";
import { useAtomValue } from "jotai";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const AuthGlobalLayout = () => {
  const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  const { user, onGetMe } = useUserInfo();
  const loadingFirst = useAtomValue(atomLoading);
  useHapticFeedback();
  const { run } = useRequest(authUser, {
    manual: true,
    onSuccess(res) {
      setAuthToken(res?.data?.data?.access_token);
      localStorage.setItem("access_token", res?.data?.data?.access_token);
    },
  });

  useEffect(() => {
    const initDataStr = localStorage.getItem("initDataStr") || "";
    const initData = localStorage.getItem("initData") || "";
    if (initData && initDataStr) {
      const webAppInitDataStr = JSON.parse(initDataStr);
      const webAppInitData = JSON.parse(initData);
      run({
        webAppInitDataStr,
        webAppInitData,
      });
    }
  }, []);

  const load = async () => {
    onGetMe();
  };
  useEffect(() => {
    if (authToken) {
      load();
    }
  }, [authToken]);
  if (!user || loadingFirst) return <LoadingScreen />;
  return (
    <div className=" w-full flex h-[100dvh]">
      <Outlet />
    </div>
  );
};

export default AuthGlobalLayout;
