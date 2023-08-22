export async function getVans(id) {
  const url = id ? `/api/react-router-lessons/vans/${id}` : "/api/react-router-lessons/vans"
  return fetchData(url);
}

export async function getHostVans(id) {
  const url = id ? `/api/react-router-lessons/host/vans/${id}` : "/api/react-router-lessons/host/vans"
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
  const res = await fetch("/api/react-router-lessons/login",
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