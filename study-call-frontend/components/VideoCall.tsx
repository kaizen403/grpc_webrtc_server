"use client";
import React, { useEffect, useRef } from "react";
import client from "../app/grpcClient"; // Import the gRPC client
import { CallRequest, SDPRequest, ICERequest } from "../app/study_pb"; // Import message types from `study_pb`

const VideoCall: React.FC = () => {
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const sessionId = useRef<string>(""); // Changed to ensure it's always a string

  useEffect(() => {
    const startCall = async () => {
      try {
        // Set up WebRTC peer connection
        peerConnection.current = new RTCPeerConnection({
          iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
        });

        // Handle local ICE candidates
        peerConnection.current.onicecandidate = (event) => {
          if (event.candidate && sessionId.current) {
            const iceRequest = new ICERequest();
            iceRequest.setSessionid(sessionId.current);
            iceRequest.setCandidate(JSON.stringify(event.candidate));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            client.exchangeICE(iceRequest, {}, (err, response) => {
              if (err) {
                console.error("Error sending ICE candidate:", err.message);
              } else {
                console.log("Sent ICE candidate");
              }
            });
          }
        };

        // Handle remote stream
        peerConnection.current.ontrack = (event) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        // Access local video and audio
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        stream.getTracks().forEach((track) => {
          peerConnection.current!.addTrack(track, stream);
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        // Initiate gRPC call to get a session ID
        const callRequest = new CallRequest();
        callRequest.setUserId("user1"); // Replace with unique user ID

        client.initiateCall(callRequest, {}, (err, response) => {
          if (err) {
            console.error("Error initiating call:", err.message);
            return;
          }
          sessionId.current = response.getSessionid() || ""; // Ensure sessionId is a string
          console.log("Session ID:", sessionId.current);

          // Create and send SDP offer
          peerConnection.current!.createOffer().then((offer) => {
            peerConnection.current!.setLocalDescription(offer);

            const sdpRequest = new SDPRequest();
            sdpRequest.setSessionid(sessionId.current);
            sdpRequest.setSdp(JSON.stringify(offer));

            client.exchangeSDP(sdpRequest, {}, (err, response) => {
              if (err) {
                console.error("Error sending SDP offer:", err.message);
              } else {
                const remoteSDP = JSON.parse(response.getSdp());
                peerConnection.current!.setRemoteDescription(remoteSDP);
              }
            });
          });
        });
      } catch (error) {
        console.error("Error starting the call:", error);
      }
    };

    startCall();
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline muted />
      <video ref={remoteVideoRef} autoPlay playsInline />
    </div>
  );
};

export default VideoCall;
