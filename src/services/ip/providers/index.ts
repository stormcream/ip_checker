//Provider注册中心
import type { IpProvider } from "@/types/ip";

import { IpcnProvider } from "./ipcn";
import { UpyunProvider } from "./upyun";
import { IpsbProvider } from "./ipsb";
import { IPAPIProvider } from "./ipapi";

export const ipProviders: IpProvider[] = [
  IpcnProvider,
  UpyunProvider,
  IpsbProvider,
  IPAPIProvider,
];
