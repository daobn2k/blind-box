/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingScreen from "@/components/Section/LoadingScreen";
import { ROUTE_PATH } from "@/router/route-path";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
export default function UnityGame() {
  const navigate = useNavigate();
  const [unityKey] = useState(Date.now());
  const [devicePixelRatio, setDevicePixelRatio] = useState<number>(0);
  const { unityProvider, addEventListener, removeEventListener } =
    useUnityContext({
      loaderUrl: "/game/BlindboxBuild.loader.js",
      dataUrl: "/game/BlindboxBuild.data.unityweb",
      frameworkUrl: "/game/BlindboxBuild.framework.js.unityweb",
      codeUrl: "/game/BlindboxBuild.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "HamsterJet",
      productVersion: "1.0",
    });

  // useEffect(() => {
  //   const token = localStorage.getItem("access_token");
  //   const powerUp = localStorage.getItem("powerUp");
  //   if (isLoaded && token && powerUp) {
  //     const powerUpParse = JSON.parse(powerUp);
  //     const params = {
  //       type: "jsbridgeAPP2GAME",
  //       functionName: "onSendToken",
  //       param: {
  //         status: true,
  //         access_token: token,
  //         power_up: powerUpParse,
  //       },
  //     };

  //     sendMessage("MessageReceiver", "ReceiveApiToken", JSON.stringify(params));
  //   }
  // }, [isLoaded, sendMessage]);

  useEffect(() => {
    const updateDevicePixelRatio = () => {
      setDevicePixelRatio(window.devicePixelRatio);
    };

    updateDevicePixelRatio();

    window.addEventListener("resize", updateDevicePixelRatio);

    return () => {
      window.removeEventListener("resize", updateDevicePixelRatio);
    };
  }, []);

  useEffect(() => {
    const handleUnityMessage = () => {
      navigate(ROUTE_PATH.HOME);
    };

    addEventListener("UnityToJS", handleUnityMessage);

    return () => {
      removeEventListener("UnityToJS", handleUnityMessage);
    };
  }, [addEventListener, removeEventListener]);

  if (!devicePixelRatio) return <LoadingScreen />;
  return (
    <>
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
        }}
        tabIndex={1}
        devicePixelRatio={devicePixelRatio}
        key={unityKey}
      />
    </>
  );
}
