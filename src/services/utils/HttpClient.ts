type IBodyFetch = {
  name: string;
  phone: string;
};

class HttpClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async post(path: string, bodyFetch: IBodyFetch): Promise<void> {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyFetch),
    });

    const contentType = response.headers.get('Content-Type');

    let body = null;
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new Error(
      body?.error || `${response.status} - ${response.statusText}`
    );
  }
}
export default HttpClient;
