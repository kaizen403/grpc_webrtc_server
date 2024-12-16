import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Proxy gRPC-Web requests to the gRPC server
app.use(
  "/grpc", // Prefix for gRPC-Web requests
  createProxyMiddleware({
    target: "http://localhost:50051", // gRPC server address
    changeOrigin: true,
    ws: true, // Enable WebSocket support
    logLevel: "debug",
    headers: {
      "Content-Type": "application/grpc-web",
    },
    onProxyReq: (proxyReq) => {
      // Ensure gRPC-Web specific headers are passed
      proxyReq.setHeader("x-grpc-web", "1");
    },
  }),
);

// Start the proxy server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
