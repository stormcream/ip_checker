// src/api/ip.api.ts

export async function Ipcn() {
  return fetch("https://my.ip.cn");
}

export async function Ipsb() {
  return fetch("https://api.ip.sb/geoip");
}

export async function Pconline() {
  return "https://whois.pconline.com.cn/ipJson.jsp";
}

export async function IPAPI() {
  return fetch("https://api.ipapi.is");
}
