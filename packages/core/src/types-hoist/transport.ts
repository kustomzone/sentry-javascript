import type { Client } from '../client';
import type { Envelope } from './envelope';

export type TransportRequest = {
  body: string | Uint8Array;
};

export type TransportMakeRequestResponse = {
  statusCode?: number;
  headers?: {
    [key: string]: string | null;
    'x-sentry-rate-limits': string | null;
    'retry-after': string | null;
  };
};

export interface InternalBaseTransportOptions {
  /**
   * @ignore
   * Users should pass the tunnel property via the init/client options.
   * This is only used by the SDK to pass the tunnel to the transport.
   */
  tunnel?: string;
  bufferSize?: number;
  recordDroppedEvent: Client['recordDroppedEvent'];
}

export interface BaseTransportOptions extends InternalBaseTransportOptions {
  // url to send the event
  // transport does not care about dsn specific - client should take care of
  // parsing and figuring that out
  url: string;
}

export interface Transport {
  send(request: Envelope): PromiseLike<TransportMakeRequestResponse>;
  flush(timeout?: number): PromiseLike<boolean>;
}

export type TransportRequestExecutor = (request: TransportRequest) => PromiseLike<TransportMakeRequestResponse>;
