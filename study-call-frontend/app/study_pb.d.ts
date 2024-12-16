//study_pb.d.ts
import * as jspb from "google-protobuf";

export class CallRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallRequest,
  ): CallRequest.AsObject;
  static serializeBinaryToWriter(
    message: CallRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallRequest;
  static deserializeBinaryFromReader(
    message: CallRequest,
    reader: jspb.BinaryReader,
  ): CallRequest;
}
export namespace CallRequest {
  export type AsObject = {
    userid: string;
  };
}

export class CallResponse extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): CallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallResponse,
  ): CallResponse.AsObject;
  static serializeBinaryToWriter(
    message: CallResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallResponse;
  static deserializeBinaryFromReader(
    message: CallResponse,
    reader: jspb.BinaryReader,
  ): CallResponse;
}

export namespace CallResponse {
  export type AsObject = {
    sessionid: string;
  };
}

export class CallEndRequest extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): CallEndRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallEndRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallEndRequest,
  ): CallEndRequest.AsObject;
  static serializeBinaryToWriter(
    message: CallEndRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallEndRequest;
  static deserializeBinaryFromReader(
    message: CallEndRequest,
    reader: jspb.BinaryReader,
  ): CallEndRequest;
}

export namespace CallEndRequest {
  export type AsObject = {
    sessionid: string;
  };
}

export class CallEndResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CallEndResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallEndResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CallEndResponse,
  ): CallEndResponse.AsObject;
  static serializeBinaryToWriter(
    message: CallEndResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): CallEndResponse;
  static deserializeBinaryFromReader(
    message: CallEndResponse,
    reader: jspb.BinaryReader,
  ): CallEndResponse;
}

export namespace CallEndResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class SDPRequest extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): SDPRequest;

  getSdp(): string;
  setSdp(value: string): SDPRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SDPRequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SDPRequest,
  ): SDPRequest.AsObject;
  static serializeBinaryToWriter(
    message: SDPRequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SDPRequest;
  static deserializeBinaryFromReader(
    message: SDPRequest,
    reader: jspb.BinaryReader,
  ): SDPRequest;
}

export namespace SDPRequest {
  export type AsObject = {
    sessionid: string;
    sdp: string;
  };
}

export class SDPResponse extends jspb.Message {
  getSdp(): string;
  setSdp(value: string): SDPResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SDPResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SDPResponse,
  ): SDPResponse.AsObject;
  static serializeBinaryToWriter(
    message: SDPResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): SDPResponse;
  static deserializeBinaryFromReader(
    message: SDPResponse,
    reader: jspb.BinaryReader,
  ): SDPResponse;
}

export namespace SDPResponse {
  export type AsObject = {
    sdp: string;
  };
}

export class ICERequest extends jspb.Message {
  getSessionid(): string;
  setSessionid(value: string): ICERequest;

  getCandidate(): string;
  setCandidate(value: string): ICERequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICERequest.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ICERequest,
  ): ICERequest.AsObject;
  static serializeBinaryToWriter(
    message: ICERequest,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ICERequest;
  static deserializeBinaryFromReader(
    message: ICERequest,
    reader: jspb.BinaryReader,
  ): ICERequest;
}

export namespace ICERequest {
  export type AsObject = {
    sessionid: string;
    candidate: string;
  };
}

export class ICEResponse extends jspb.Message {
  getCandidate(): string;
  setCandidate(value: string): ICEResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICEResponse.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ICEResponse,
  ): ICEResponse.AsObject;
  static serializeBinaryToWriter(
    message: ICEResponse,
    writer: jspb.BinaryWriter,
  ): void;
  static deserializeBinary(bytes: Uint8Array): ICEResponse;
  static deserializeBinaryFromReader(
    message: ICEResponse,
    reader: jspb.BinaryReader,
  ): ICEResponse;
}

export namespace ICEResponse {
  export type AsObject = {
    candidate: string;
  };
}
