import { NextUIProvider } from "@nextui-org/react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { Provider } from "jotai";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import i18n from "./i18n/i18n";
import { router } from "./router/router";
import "./styles/global.css";

dayjs.extend(duration);

createRoot(document.getElementById("root")!).render(
  <>
    {/* <TonConnectUIProvider
      manifestUrl={`${import.meta.env.VITE_WEB_URL}/tonconnect-manifest.json`}
      actionsConfiguration={{
        twaReturnUrl: import.meta.env.VITE_TELEGRAM_LINK_BOT,
      }}
    > */}
    <I18nextProvider i18n={i18n}>
      <Provider>
        <NextUIProvider>
          <Toaster position="top-center" duration={1000} />
          <RouterProvider router={router} />
        </NextUIProvider>
      </Provider>
    </I18nextProvider>
    {/* </TonConnectUIProvider> */}
  </>
);
