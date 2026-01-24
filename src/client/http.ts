export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  async get<T>(
  path: string,
  headers?: HeadersInit
): Promise<T> {
  const init: RequestInit = {
    method: 'GET'
  }

  if (headers) {
    init.headers = headers
  }

  const res = await fetch(this.baseUrl + path, init)
  return res.json() as Promise<T>
}

}

