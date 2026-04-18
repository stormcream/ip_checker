import { Upyun } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const UpyunProvider: IpProvider = {
  name: "又拍云",

  region: IpProviderRegion.CN,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    const res = await Upyun();
    const data = await res.json();
    let endTime: number = new Date().getTime();
    const latency = endTime - startTime;

    if (res.status !== 200) {
      return {
        ip: "0.0.0.0",
        latency: latency,
        source_name: this.name,
        source_type: this.region,
      };
    }

    return {
      ip: data.remote_addr,
      country: data.remote_addr_location.country,
      province: data.remote_addr_location.province,
      city: data.remote_addr_location.city,
      isp: data.remote_addr_location.isp,
      latency: latency,
      source_name: this.name,
      source_type: this.region,
    };
  },
};
