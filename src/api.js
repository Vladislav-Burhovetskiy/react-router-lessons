export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  return fetchData(url);
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
  return fetchData(url);
}

async function fetchData(url) {
  const res = await fetch(url)
  if (!res.ok) {
      throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status
      }
  }
  const data = await res.json()
  return data.vans
}