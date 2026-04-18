//Provider注册中心
import type { IpProvider } from "@/types/ip";

import { IpcnProvider } from "./ipcn";
import { PconlineProvider } from "./pconline";
import { IpsbProvider } from "./ipsb";
import { Ip2locationProvider } from "./ip2location";

export const ipProviders: IpProvider[] = [
  IpcnProvider,
  PconlineProvider,
  IpsbProvider,
  Ip2locationProvider,
];
