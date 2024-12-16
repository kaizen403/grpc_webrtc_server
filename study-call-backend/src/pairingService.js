class PairingService {
  constructor() {
    if (!PairingService.instance) {
      this.queue = []; // Queue to hold unmatched users
      this.sessions = {}; // Active sessions with session IDs
      PairingService.instance = this;
    }
    return PairingService.instance;
  }

  // Add a user to the queue
  addUser(userId, callback) {
    if (this.queue.length === 0) {
      // If no one is in the queue, add the user
      this.queue.push({ userId, callback });
    } else {
      // Pair the user with the first person in the queue
      const pair = this.queue.shift();
      const sessionId = `${pair.userId}-${userId}`; // Unique session ID
      this.sessions[sessionId] = { user1: pair.userId, user2: userId };

      // Notify both users of the match
      pair.callback(sessionId);
      callback(sessionId);
    }
  }

  // Remove a user from the queue
  removeUser(userId) {
    this.queue = this.queue.filter((user) => user.userId !== userId);
  }

  // Get session by session ID
  getSession(sessionId) {
    return this.sessions[sessionId];
  }

  // Remove a session
  removeSession(sessionId) {
    delete this.sessions[sessionId];
  }
}

const instance = new PairingService();
Object.freeze(instance);
export default instance;
