// Original file: ../proto/scraper.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Content as _scraper_Content, Content__Output as _scraper_Content__Output } from '../scraper/Content';
import type { ContentRequest as _scraper_ContentRequest, ContentRequest__Output as _scraper_ContentRequest__Output } from '../scraper/ContentRequest';

export interface ScraperClient extends grpc.Client {
  GetContent(argument: _scraper_ContentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  GetContent(argument: _scraper_ContentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  GetContent(argument: _scraper_ContentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  GetContent(argument: _scraper_ContentRequest, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  getContent(argument: _scraper_ContentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  getContent(argument: _scraper_ContentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  getContent(argument: _scraper_ContentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  getContent(argument: _scraper_ContentRequest, callback: grpc.requestCallback<_scraper_Content__Output>): grpc.ClientUnaryCall;
  
}

export interface ScraperHandlers extends grpc.UntypedServiceImplementation {
  GetContent: grpc.handleUnaryCall<_scraper_ContentRequest__Output, _scraper_Content>;
  
}

export interface ScraperDefinition extends grpc.ServiceDefinition {
  GetContent: MethodDefinition<_scraper_ContentRequest, _scraper_Content, _scraper_ContentRequest__Output, _scraper_Content__Output>
}
