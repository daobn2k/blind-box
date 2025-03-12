/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from "react-router-dom";
const AuthGlobalLayout = () => {
  // if (!isMobile && import.meta.env.VITE_MODE !== "DEV") {
  //   return (
  //     <WarningPage
  //       showButton={false}
  //       title="Telegram Desktop is not supported!"
  //     />
  //   );
  // }
  // const [authToken, setAuthToken] = useState<string | undefined>(undefined);
  // const { user, onGetMe } = useUserInfo();
  // const loadingFirst = useAtomValue(atomLoading);
  // useHapticFeedback();
  // const { run } = useRequest(authUser, {
  //   manual: true,
  //   onSuccess(res) {
  //     setAuthToken(res?.data?.data?.access_token);
  //     localStorage.setItem("access_token", res?.data?.data?.access_token);
  //   },
  // });

  // useEffect(() => {
  //   const initData = localStorage.getItem("initData") || "";
  //   console.log(initData, "initData");
  //   run({ initData });
  // }, []);

  // const load = async () => {
  //   onGetMe();
  // };
  // useEffect(() => {
  //   if (authToken) {
  //     load();
  //   }
  // }, [authToken]);
  // const { pathname } = useLocation();
  // if ((!user || loadingFirst) && pathname !== ROUTE_PATH.GAME)
  //   return <LoadingScreen />;
  return (
    <div className=" w-full flex h-[100dvh]">
      <Outlet />
    </div>
  );
};

export default AuthGlobalLayout;
