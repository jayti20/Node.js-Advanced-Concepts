// fetch events module
const events = require("events");

// Sending/Emitting events
const eventEmitter = new events.EventEmitter();

// Create an event listener
const registeredListener = () => {
  console.log("I am listening to the event.");
};

// Assign event to listener
eventEmitter.on("registered", registeredListener);

// Emit the event.
eventEmitter.emit("registered");
