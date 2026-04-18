// src/api/ip.api.ts

export async function Ipcn() {
  return fetch("api/ipcn");
}

export async function Ipsb() {
  return fetch("api/ipsb");
}

export async function Pconline() {
  return fetch("/api/pconline");
}

export async function Ip2location() {
  return fetch("/api/ip2location");
}
