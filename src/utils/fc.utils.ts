/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { REGEX_WALLET_APTOS } from "@/types/regex.types";
import copy from "copy-to-clipboard";
import CryptoJS from "crypto-js";
import dayjs from "dayjs";
import { ESocial } from "./type";
import { isMobile } from "react-device-detect";

export const formatLoyalScore = (number: number) => {
  const roundedNumber = Math.round(number); // Round to the nearest integer
  return roundedNumber.toString().padStart(6, "0");
};

export const shareLink = (link: string, text?: string) => {
  let newLink = "";
  if (link && text) {
    newLink = `${link}&text=${text}`;
  } else {
    newLink = link;
  }
  copy(newLink);
  if ((window as any).Telegram?.WebApp?.openTelegramLink) {
    (window as any).Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(newLink)}`
    );
  }
};

export const redirectUrl = (url: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.rel = "noopener noreferrer";
  link.click();
};
export function formatNumber(num: number) {
  if (!num) return 0;
  return new Intl.NumberFormat("en-US").format(num);
}
export const previewLink = (link: string, social_type: string) => {
  if (isMobile) {
    if (social_type.toLowerCase() === "telegram") {
      if ((window as any).Telegram?.WebApp?.openTelegramLink) {
        (window as any).Telegram.WebApp.openTelegramLink(link);
      }

      return;
    }
    if ((window as any).Telegram?.WebApp?.openLink) {
      (window as any).Telegram.WebApp.openLink(link);
    }
  } else {
    window.open(link);
  }
};

export const isValidEthereumAddress = (address: string) => {
  const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;
  return ethAddressRegex.test(address);
};

export const isValidAptosAddress = (address: string) => {
  return REGEX_WALLET_APTOS.test(address);
};

export const checkSocialType = (type: ESocial) => {
  return type?.includes(ESocial.TELEGRAM) ? "TELEGRAM" : "X";
};

export function shortenAddress(address: string = "", length: number = 4) {
  return (
    address &&
    `${address.slice(0, 6)}...${address.slice(
      Math.max(0, address.length - length)
    )}`
  );
}

export function encryptAESData(data: any) {
  const key = CryptoJS.enc.Hex.parse(import.meta.env.VITE_AES_KEY);
  const iv = CryptoJS.enc.Hex.parse(import.meta.env.VITE_AES_IV);

  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return encrypted.toString();
}

export const animationDelay = (key: number) => {
  return `${Number(key) * 0.1}s`;
};

export const formattedDate = (date: string) => {
  return dayjs(date).format("D MMMM YYYY");
};

export const buyWithStar = (link: string) => {
  return (window as any).Telegram.WebApp.openInvoice(link);
};

export const formatValueToNumber = (num: number) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "b"; // Tỷ (billion)
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "m"; // Triệu (million)
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Nghìn (thousand)
  }
  return num.toString(); // Số nhỏ hơn 1000 giữ nguyên
};

export const toNanotons = (toncoin: number) => Math.round(toncoin * 1e9);
export const formatNumberDot = (num: number) => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: num % 1 !== 0 ? 1 : 0,
    maximumFractionDigits: 1,
  });
};

export function isJSON(data: string) {
  try {
    // Thử parse dữ liệu
    JSON.parse(data);
    return true; // Nếu không lỗi, thì là JSON hợp lệ
  } catch (error: any) {
    return false; // Nếu lỗi, thì không phải JSON
  }
}
