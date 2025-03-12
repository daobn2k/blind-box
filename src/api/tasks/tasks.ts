/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "@/service/api-route.service";
import BaseRequest from "@/service/base-request.serivce";
export const getTasks = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.SOCIAL_TASKS);
};

export const getMission = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.MISSION);
};

export const postCheckMission = (data: { key: string; point: number }) => {
  const rq = new BaseRequest();
  return rq.post(API_ROUTES.CHECK_MISSION, data);
};
