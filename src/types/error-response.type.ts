export interface ErrorRes {
  message: string;
  name: string;
  stack: string;
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: any;
    transformRequest: any;
    transformResponse: any;
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: any;
    headers: any;
    method: string;
    url: string;
  };
  code: string;
  status: number;
}
