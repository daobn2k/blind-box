export enum ESocial {
  YOUTUBE = "YOUTUBE",
  TWITTER = "TWITTER",
  DISCORD = "DISCORD",
  TELEGRAM = "TELEGRAM",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
  TIKTOK = "TIKTOK",
  TWITCH = "TWITCH",
}

export interface Friends {
  _id: string;
  referrer: string;
  referredUser: {
    _id: string;
    code: string;
    username: string;
    points: number;
    avatar: string;
  };
  is_premium: boolean;
  point_reward: number;
  claim_reward: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IRank {
  _id: string;
  username: string;
  points: number;
  friend: number;
  avatar: string;
  top_distance: number;
  total_point: number;
}

export enum EBoot {
  COIN_MAGNET = "COIN_MAGNET",
  SHIELD = "SHIELD",
  BOOST = "BOOST",
  ENERGY = "ENERGY",
}

export interface IBoostParam {
  level: number;
  price: number;
  time?: number;
  distance?: number;
}

export interface IBoosts {
  _id: string;
  name: string;
  img: string;
  description: string;
  type: string;
  params: IBoostParam[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IBoostPurchase {
  _id: string;
  user: string;
  boost: IBoosts;
  current_level: number;
  purchase_date: string;
  params: IBoostParam;
  createdAt: string;
  updatedAt: string;
  __v: number;
  boost_id: string;
}

export interface ISocialTask {
  _id: string;
  type: string;
  key: string;
  name: string;
  point: number;
  uri: string;
  tag: string;
  social: ESocial;
  __v: number;
}

export enum EFilterRank {
  NORMIE = "NORMIE",
  FULL_DEGEN = "FULL_DEGEN",
  APEX_DEGEN = "APEX_DEGEN",
}
