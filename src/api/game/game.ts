/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "@/service/api-route.service";
import BaseRequest from "@/service/base-request.serivce";

export const startGame = () => {
  const rq = new BaseRequest();

  return rq.post(API_ROUTES.GAME_START);
};

export const endGame = () => {
  const rq = new BaseRequest();
  return rq.post(API_ROUTES.GAME_END);
};
