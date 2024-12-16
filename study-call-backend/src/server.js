import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import pairingService from "./pairingService.js"; // Singleton instance

const packageDefinition = protoLoader.loadSync("./proto/study.proto");
const studyProto = grpc.loadPackageDefinition(packageDefinition).StudyCall;

const server = new grpc.Server();

server.addService(studyProto.service, {
  InitiateCall: (call, callback) => {
    const { userId } = call.request;
    pairingService.addUser(userId, (sessionId) => {
      callback(null, { sessionId });
    });
  },

  ExchangeSDP: (call, callback) => {
    const { sessionId, userId, sdp } = call.request;
    const session = pairingService.getSession(sessionId);
    if (!session) {
      return callback(new Error("Session not found"));
    }
    const recipient = session.user1 === userId ? session.user2 : session.user1;
    callback(null, { recipient, sdp });
  },

  ExchangeICE: (call, callback) => {
    const { sessionId, userId, candidate } = call.request;
    const session = pairingService.getSession(sessionId);
    if (!session) {
      return callback(new Error("Session not found"));
    }
    const recipient = session.user1 === userId ? session.user2 : session.user1;
    callback(null, { recipient, candidate });
  },

  EndCall: (call, callback) => {
    const { sessionId } = call.request;
    pairingService.removeSession(sessionId);
    callback(null, { success: true });
  },
});

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (error, port) => {
    if (error) {
      console.error("Server failed to bind:", error);
      return;
    }
    console.log(`Server running at http://0.0.0.0:${port}`);
  },
);
