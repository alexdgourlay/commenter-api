import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ScraperClient as _scraper_ScraperClient, ScraperDefinition as _scraper_ScraperDefinition } from './scraper/Scraper';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  scraper: {
    Content: MessageTypeDefinition
    ContentRequest: MessageTypeDefinition
    Scraper: SubtypeConstructor<typeof grpc.Client, _scraper_ScraperClient> & { service: _scraper_ScraperDefinition }
  }
}

