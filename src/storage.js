const storage = require('store');

const events = require('store/plugins/events');
storage.addPlugin(events);

export default storage;