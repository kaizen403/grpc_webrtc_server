//study_pb.js
import * as protobuf from "google-protobuf";

class CallRequest extends protobuf.Message {
  constructor() {
    super();
    this.userId = "";
  }

  setUserId(value) {
    this.userId = value;
  }

  getUserId() {
    return this.userId;
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new CallRequest();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.userId = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.userId);
    return writer.getResultBuffer();
  }
}

class CallResponse extends protobuf.Message {
  constructor() {
    super();
    this.sessionId = "";
  }

  setSessionId(value) {
    this.sessionId = value;
  }

  getSessionId() {
    return this.sessionId;
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new CallResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sessionId = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sessionId);
    return writer.getResultBuffer();
  }
}
class CallResponse extends protobuf.Message {
  constructor() {
    super();
    this.sessionId = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new CallResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sessionId = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sessionId);
    return writer.getResultBuffer();
  }
}

class CallEndRequest extends protobuf.Message {
  constructor() {
    super();
    this.sessionId = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new CallEndRequest();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sessionId = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sessionId);
    return writer.getResultBuffer();
  }
}

class CallEndResponse extends protobuf.Message {
  constructor() {
    super();
    this.success = false;
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new CallEndResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.success = reader.readBool();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeBool(1, this.success);
    return writer.getResultBuffer();
  }
}

class SDPRequest extends protobuf.Message {
  constructor() {
    super();
    this.sessionId = "";
    this.sdp = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new SDPRequest();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sessionId = reader.readString();
      } else if (reader.getFieldNumber() === 2) {
        message.sdp = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sessionId);
    writer.writeString(2, this.sdp);
    return writer.getResultBuffer();
  }
}

class SDPResponse extends protobuf.Message {
  constructor() {
    super();
    this.sdp = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new SDPResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sdp = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sdp);
    return writer.getResultBuffer();
  }
}

class ICERequest extends protobuf.Message {
  constructor() {
    super();
    this.sessionId = "";
    this.candidate = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new ICERequest();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.sessionId = reader.readString();
      } else if (reader.getFieldNumber() === 2) {
        message.candidate = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.sessionId);
    writer.writeString(2, this.candidate);
    return writer.getResultBuffer();
  }
}

class ICEResponse extends protobuf.Message {
  constructor() {
    super();
    this.candidate = "";
  }

  static deserializeBinary(bytes) {
    const reader = new protobuf.BinaryReader(bytes);
    const message = new ICEResponse();
    while (reader.nextField()) {
      if (reader.isEndGroup()) break;
      if (reader.getFieldNumber() === 1) {
        message.candidate = reader.readString();
      } else {
        reader.skipField();
      }
    }
    return message;
  }

  serializeBinary() {
    const writer = new protobuf.BinaryWriter();
    writer.writeString(1, this.candidate);
    return writer.getResultBuffer();
  }
}

module.exports = {
  CallRequest,
  CallResponse,
  CallEndRequest,
  CallEndResponse,
  SDPRequest,
  SDPResponse,
  ICERequest,
  ICEResponse,
};
