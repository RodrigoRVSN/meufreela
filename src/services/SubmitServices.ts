import HttpClient from './utils/HttpClient';

class SubmitServices {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_LOCAL);
  }

  async sendInfo(name: string, phone: string): Promise<void> {
    const body = { name, phone };
    return this.httpClient.post(`/submit`, body);
  }
}

export default new SubmitServices();
