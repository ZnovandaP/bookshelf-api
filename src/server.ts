import * as Hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`server running on ${server.info.uri}`);
};

init();
