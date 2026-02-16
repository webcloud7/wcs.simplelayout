import * as xmlrpc from 'xmlrpc';

const client = xmlrpc.createClient({
  host: process.env.E2E_XMLRPC_HOST || 'localhost',
  port: 49999,
  path: '/'
});

function callMethod(method: string): Promise<any> {
  return new Promise((resolve, reject) => {
    client.methodCall(method, [], (error: Error, value: any) => {
      if (error) {
        reject(error);
      }
      resolve(value);
    });
  });
}

export const setup = () => callMethod('zodb_setup');
export const teardown = () => callMethod('zodb_teardown');
