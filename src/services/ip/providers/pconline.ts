import { Pconline } from "@/api/ip.api";
import type { Ipinfo, IpProvider } from "@/types/ip";
import { IpProviderRegion } from "@/types/ip";

export const PconlineProvider: IpProvider = {
  name: "PConline",
  region: IpProviderRegion.CN,

  async request(): Promise<Ipinfo> {
    let startTime: number = new Date().getTime();
    let endTime: number = 0;
    const url = (await Pconline()).toString();
    const cb: string = "cb_" + startTime;

    (window as any).pc_online_data = null;
    (window as any)[cb] = (result: any) => {
      endTime = new Date().getTime();
      (window as any).pc_online_data = {
        ...result,
        endTime,
      };
    };

    const script = document.createElement("script");
    script.src = `${url}?callback=${cb}`;

    document.body.appendChild(script);

    return new Promise<Ipinfo>((resolve) => {
      let timeoutId: number;
      const timeout = 3000;
      const checkData = () => {
        if (new Date().getTime() - startTime > timeout) {
          clearTimeout(timeoutId);
          resolve({
            ip: "0.0.0.0",
            country: "未知",
            province: "未知",
            city: "未知",
            isp: "未知",
            latency: timeout,
            source_name: this.name,
            source_type: this.region,
          });
        }
        if ((window as any).pc_online_data) {
          resolve({
            ip: (window as any).pc_online_data.ip,
            country: (window as any).pc_online_data.pro,
            province: (window as any).pc_online_data.pro,
            city: (window as any).pc_online_data.city,
            isp: (window as any).pc_online_data.addr,
            latency: (window as any).pc_online_data.endTime - startTime,
            source_name: this.name,
            source_type: this.region,
          });
        } else {
          timeoutId = window.setTimeout(checkData, 100);
        }
      };
      checkData();
    });
  },
};
