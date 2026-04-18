import type { IpResults } from "@/types/ip";
import { ipProviders } from "./providers";

export async function ipEngine(): Promise<IpResults> {
  const results = await Promise.allSettled(ipProviders.map((p) => p.request()));

  const success = results
    .filter((r: any) => r.status === "fulfilled")
    .map((r: any) => r.value);

  return {
    ipResults: success,
  };
}
