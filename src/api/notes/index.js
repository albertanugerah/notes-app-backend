const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const notesHanlder = new NotesHandler(service, validator);
    server.route(routes(notesHanlder));
  },
};
