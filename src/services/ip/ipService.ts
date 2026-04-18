import { ipEngine } from "./ipEngine";
import { useIPStore } from "@/stores";
import { useUiStore } from "@/stores";

export async function runIpService() {
  const store = useIPStore();
  const uiStore = useUiStore();
  uiStore.setLoading(true);

  const data = await ipEngine();

  store.setIpResults(data);
  uiStore.setLoading(false);
}
