const xmlrpc = require('xmlrpc');

// create a client
const client = xmlrpc.createClient({
  host: process.env.E2E_XMLRPC_HOST || 'localhost',
  port: 49999,
  path: '/'
});

async function setup() {
  return new Promise((resolve, reject) => {
    // Setup site
    client.methodCall(
      'zodb_setup',
      [],
      (error, value) => {
        if (error) {
          reject(error);
        }
        resolve(value);
      },
    );
  });
}

async function teardown() {
  return new Promise((resolve, reject) => {
  // Tearing down
    client.methodCall(
      'zodb_teardown',
      [],
      (error, value) => {
        if (error) {
          reject(error);
        }
        resolve(value);
      },
    );
  });
}

module.exports = {
    setup: setup,
    teardown: teardown,
};