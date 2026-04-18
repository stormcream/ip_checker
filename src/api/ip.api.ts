// src/api/ip.api.ts

export async function Ipcn() {
  return fetch("https://my.ip.cn");
}

export async function Ipsb() {
  return fetch("https://api.ip.sb/geoip");
}

export async function IPAPI() {
  return fetch("https://api.ipapi.is");
}

export async function Upyun() {
  let t = new Date().getTime();
  return fetch("https://pubstatic.b0.upaiyun.com/?_upnode&r=" + t);
}
