import { ReactNode } from "react";

export enum MODE {
  STAGING = "staging",
  PRODUCTION = "production",
}

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
  total?: number;
  successCode?: string;
  skip?: number;
  take?: number;
}

export interface RouteEl {
  label: string;
  path: string;
  key: string;
  icon?: ReactNode;
  component?: ReactNode;
  children?: RouteEl[];
  hidden?: boolean;
}
