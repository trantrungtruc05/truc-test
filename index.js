// const { Keystone } = require('@keystonejs/keystone');
// const { Text } = require('@keystonejs/fields');
// const { GraphQLApp } = require('@keystonejs/app-graphql');
// const { AdminUIApp } = require('@keystonejs/app-admin-ui');
// const { StaticApp } = require('@keystonejs/app-static');

// const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');

// const PROJECT_NAME = "Truc Test";


// const keystone = new Keystone({
//   name: PROJECT_NAME,
//   adapter: new Adapter(),
// });

// keystone.createList('Todo', {
//   schemaDoc: 'A list of things which need to be done',
//   fields: {
//     name: { type: Text, schemaDoc: 'This is the thing you need to do' },
//   },
// });

// module.exports = {
//   keystone,
//   apps: [
//     new GraphQLApp(),
//     new StaticApp({ path: '/', src: 'public' }),
//     new AdminUIApp({ enableDefaultRoute: true }),
//   ],
// };
