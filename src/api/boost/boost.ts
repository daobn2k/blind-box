/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ROUTES } from "@/service/api-route.service";
import BaseRequest from "@/service/base-request.serivce";
export const getBoosts = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.BOOST);
};
export const getBoostPurchase = () => {
  const rq = new BaseRequest();
  return rq.get(API_ROUTES.BOOST_PURCHASE);
};

export const boostPurchase = (data: { boost_id: string; level: number }) => {
  const rq = new BaseRequest();
  return rq.post(API_ROUTES.BOOST_PURCHASE, data);
};
