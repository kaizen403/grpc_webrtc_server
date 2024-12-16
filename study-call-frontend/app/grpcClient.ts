import { StudyCallClient } from "./StudyServiceClientPb"; // Generated client
// Use the proxy server URL (replace with your proxy server address)
const client = new StudyCallClient("http://localhost:8080/grpc");
export default client;
