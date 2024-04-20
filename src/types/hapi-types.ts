import * as Hapi from '@hapi/hapi';

export type HapiReq = Hapi.Request<Hapi.ReqRefDefaults>;

export type HapiResToolkit = Hapi.ResponseToolkit<Hapi.ReqRefDefaults>;
