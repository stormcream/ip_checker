import { Pconline } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const PconlineProvider: IpProvider = {
  name: "PC-Online",
  region: IpProviderRegion.CN,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    const res = await Pconline();
    const buffer = await res.arrayBuffer();

    const decoder = new TextDecoder("gbk");
    const text = decoder.decode(buffer);
    const data = JSON.parse(text);
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
      country: data.pro,
      province: data.pro,
      city: data.city,
      isp: data.addr.split(" ").pop() || "",
      latency: latency,
      source_name: this.name,
      source_type: this.region,
    };
  },
};
