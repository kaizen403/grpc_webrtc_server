"use client";
import dynamic from "next/dynamic";

// Dynamically import the VideoCall component to avoid SSR
const VideoCall = dynamic(() => import("../../components/VideoCall"), {
  ssr: false,
});

export default function CallPage() {
  return <VideoCall />;
}
