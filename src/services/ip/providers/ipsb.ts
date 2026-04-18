import { Ipsb } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const IpsbProvider: IpProvider = {
  name: "ip.sb",
  region: IpProviderRegion.SEA,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    const res = await Ipsb();
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
      country: data.country,
      province: data.country,
      city: data.city,
      isp: data.isp,
      latency: latency,
      source_name: this.name,
      source_type: this.region,
    };
  },
};
