/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: study.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as study_pb from './study_pb'; // proto import: "study.proto"


export class StudyCallClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorInitiateCall = new grpcWeb.MethodDescriptor(
    '/StudyCall/InitiateCall',
    grpcWeb.MethodType.UNARY,
    study_pb.CallRequest,
    study_pb.CallResponse,
    (request: study_pb.CallRequest) => {
      return request.serializeBinary();
    },
    study_pb.CallResponse.deserializeBinary
  );

  initiateCall(
    request: study_pb.CallRequest,
    metadata?: grpcWeb.Metadata | null): Promise<study_pb.CallResponse>;

  initiateCall(
    request: study_pb.CallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: study_pb.CallResponse) => void): grpcWeb.ClientReadableStream<study_pb.CallResponse>;

  initiateCall(
    request: study_pb.CallRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: study_pb.CallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/StudyCall/InitiateCall',
        request,
        metadata || {},
        this.methodDescriptorInitiateCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/StudyCall/InitiateCall',
    request,
    metadata || {},
    this.methodDescriptorInitiateCall);
  }

  methodDescriptorEndCall = new grpcWeb.MethodDescriptor(
    '/StudyCall/EndCall',
    grpcWeb.MethodType.UNARY,
    study_pb.CallEndRequest,
    study_pb.CallEndResponse,
    (request: study_pb.CallEndRequest) => {
      return request.serializeBinary();
    },
    study_pb.CallEndResponse.deserializeBinary
  );

  endCall(
    request: study_pb.CallEndRequest,
    metadata?: grpcWeb.Metadata | null): Promise<study_pb.CallEndResponse>;

  endCall(
    request: study_pb.CallEndRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: study_pb.CallEndResponse) => void): grpcWeb.ClientReadableStream<study_pb.CallEndResponse>;

  endCall(
    request: study_pb.CallEndRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: study_pb.CallEndResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/StudyCall/EndCall',
        request,
        metadata || {},
        this.methodDescriptorEndCall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/StudyCall/EndCall',
    request,
    metadata || {},
    this.methodDescriptorEndCall);
  }

  methodDescriptorExchangeSDP = new grpcWeb.MethodDescriptor(
    '/StudyCall/ExchangeSDP',
    grpcWeb.MethodType.UNARY,
    study_pb.SDPRequest,
    study_pb.SDPResponse,
    (request: study_pb.SDPRequest) => {
      return request.serializeBinary();
    },
    study_pb.SDPResponse.deserializeBinary
  );

  exchangeSDP(
    request: study_pb.SDPRequest,
    metadata?: grpcWeb.Metadata | null): Promise<study_pb.SDPResponse>;

  exchangeSDP(
    request: study_pb.SDPRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: study_pb.SDPResponse) => void): grpcWeb.ClientReadableStream<study_pb.SDPResponse>;

  exchangeSDP(
    request: study_pb.SDPRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: study_pb.SDPResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/StudyCall/ExchangeSDP',
        request,
        metadata || {},
        this.methodDescriptorExchangeSDP,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/StudyCall/ExchangeSDP',
    request,
    metadata || {},
    this.methodDescriptorExchangeSDP);
  }

  methodDescriptorExchangeICE = new grpcWeb.MethodDescriptor(
    '/StudyCall/ExchangeICE',
    grpcWeb.MethodType.UNARY,
    study_pb.ICERequest,
    study_pb.ICEResponse,
    (request: study_pb.ICERequest) => {
      return request.serializeBinary();
    },
    study_pb.ICEResponse.deserializeBinary
  );

  exchangeICE(
    request: study_pb.ICERequest,
    metadata?: grpcWeb.Metadata | null): Promise<study_pb.ICEResponse>;

  exchangeICE(
    request: study_pb.ICERequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: study_pb.ICEResponse) => void): grpcWeb.ClientReadableStream<study_pb.ICEResponse>;

  exchangeICE(
    request: study_pb.ICERequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: study_pb.ICEResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/StudyCall/ExchangeICE',
        request,
        metadata || {},
        this.methodDescriptorExchangeICE,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/StudyCall/ExchangeICE',
    request,
    metadata || {},
    this.methodDescriptorExchangeICE);
  }

}
