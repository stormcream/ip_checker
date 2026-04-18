import { Ip2location } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const Ip2locationProvider: IpProvider = {
  name: "ip2location",
  region: IpProviderRegion.SEA,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    const res = await Ip2location();
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
      ip: data.ip,
      country: data.country_name,
      province: data.region_name,
      city: data.city_name,
      isp: data.as,
      latency: latency,
      source_name: this.name,
      source_type: this.region,
    };
  },
};
