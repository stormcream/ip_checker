import { runIpService } from "@/services/ip/ipService";

export function useIpProbe() {
  const run = () => runIpService();
  return { run };
}
