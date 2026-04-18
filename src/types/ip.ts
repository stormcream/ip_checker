export enum IpProviderRegion {
  CN,
  SEA,
}

export interface Ipinfo {
  ip: string;
  country?: string;
  province?: string;
  city?: string;
  isp?: string;
  latency: number | 9999;
  source_name: string;
  source_type: IpProviderRegion;
}

export interface IpResults {
  ipResults: Ipinfo[];
}

export interface IpProvider {
  name: string;
  region: IpProviderRegion;
  request(): Promise<Ipinfo>;
}
