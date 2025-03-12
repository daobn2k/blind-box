/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "@/service/api-route.service";
import BaseRequest from "@/service/base-request.serivce";
import { EFilterRank } from "@/utils/type";
export const getMe = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.USER);
};
export const getUserFriends = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.USER_FRIEND);
};

export const getUserLeaderBoard = (params: { type: EFilterRank }) => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.USER_LEADERBOARD, params);
};
