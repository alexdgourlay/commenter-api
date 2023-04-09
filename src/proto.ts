import * as protoLoader from '@grpc/proto-loader'
import * as grpc from '@grpc/grpc-js'
import path from 'path';
import { ProtoGrpcType } from './__generated__/proto/scraper';
import { ScraperClient } from './__generated__/proto/scraper/Scraper';

export type ProtoClients = {
    scraper: ScraperClient
}

export const createProtoClients = async () => {
    const scraperPackageDef = await protoLoader.load(path.join(process.cwd(), '../proto/scraper.proto'));
    const scraperProto = (grpc.loadPackageDefinition(scraperPackageDef) as unknown) as ProtoGrpcType;
    const scraperClient = new scraperProto.scraper.Scraper("[::1]:50051", grpc.credentials.createInsecure())

    return {
        scraper: scraperClient
    }
}