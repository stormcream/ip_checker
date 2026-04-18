import { Ipcn } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const IpcnProvider: IpProvider = {
  name: "ip.cn",
  region: IpProviderRegion.CN,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    const res = await Ipcn();
    const data = await res.text();
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

    const result = parseIpLocation(data);

    return {
      ip: result.ip,
      country: result.country,
      province: result.province,
      city: result.city,
      isp: result.isp,
      latency: latency,
      source_name: this.name,
      source_type: this.region,
    };
  },
};

function parseIpLocation(text: string) {
  // 1️⃣ 提取 IP
  const ipMatch = text.match(/ip[:：]\s*([\d.]+)/i);
  const ip = ipMatch?.[1] || "";

  // 2️⃣ 提取地址部分
  const addrMatch = text.match(/归属地[:：]\s*(.+)/);
  const addr = addrMatch?.[1] || "";

  // 3️⃣ 拆分地址
  const parts = addr.split(" ").filter(Boolean);

  return {
    ip,
    country: parts[0] || "",
    province: parts[1] || "",
    city: parts[2] || "",
    isp: parts[parts.length - 1] || "",
  };
}
