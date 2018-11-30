export function genericFetch<T>(url: string, data?: any): Promise<T> {
  if (data) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data)
    }).then(toJson);
  }
  return fetch(url).then(toJson);
}

function toJson(response: Response) {
  return response.json();
}
