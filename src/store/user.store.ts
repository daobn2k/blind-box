import { atom } from "jotai";

export interface IUser {
  _id: string;
  code: string;
  userId: number;
  username: string;
  points: number;
  is_premium: boolean;
  energy: number;
  depth: number;
  referrer: string | null;
  parents: string[];
  children: string[];
  last_online: string; // ISO date string
  currentCheckinDay: number;
  new_member: boolean;
  nonce: number;
  friend: number;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  ranking: number;
  last_energy: number;
  top_distance: number;
  total_point: number;
  avatar: string;
}

export const atomUser = atom<IUser | null>(null);
