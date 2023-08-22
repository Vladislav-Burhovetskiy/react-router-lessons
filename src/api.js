export async function getVans(id) {
  const url = id ? `/api/vanlifewebs/vans/${id}` : "/api/vanlifewebs/vans"
  return fetchData(url);
}

export async function getHostVans(id) {
  const url = id ? `/api/vanlifewebs/host/vans/${id}` : "/api/vanlifewebs/host/vans"
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

export async function loginUser(creds) {
  const res = await fetch("/api/vanlifewebs/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
      throw {
          message: data.message,
          statusText: res.statusText,
          status: res.status
      }
  }

  return data
}