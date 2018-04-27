/**
 * Proximax P2P Storage REST API
 * Proximax P2P Storage REST API
 *
 * OpenAPI spec version: v0.0.1
 * Contact: proximax.storage@proximax.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';


import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PublishAndSubscribeService {

    protected basePath = 'http://demo-gateway.proximax.io';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
     * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
     * @param topic Topic
     * @param message Initial Message
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public publishTopicUsingGET(topic: string, message: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public publishTopicUsingGET(topic: string, message: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public publishTopicUsingGET(topic: string, message: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public publishTopicUsingGET(topic: string, message: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (topic === null || topic === undefined) {
            throw new Error('Required parameter topic was null or undefined when calling publishTopicUsingGET.');
        }
        if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling publishTopicUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (message !== undefined) {
            queryParameters = queryParameters.set('message', <any>message);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/pubsub/init/${encodeURIComponent(String(topic))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Send a message to a published topic
     * Publish and Subscribe. Make sure that the IPFS daemon has pubsub enabled.
     * @param topic Topic
     * @param message Initial Message
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public sendToTopicUsingGET(topic: string, message: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public sendToTopicUsingGET(topic: string, message: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public sendToTopicUsingGET(topic: string, message: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public sendToTopicUsingGET(topic: string, message: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (topic === null || topic === undefined) {
            throw new Error('Required parameter topic was null or undefined when calling sendToTopicUsingGET.');
        }
        if (message === null || message === undefined) {
            throw new Error('Required parameter message was null or undefined when calling sendToTopicUsingGET.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (message !== undefined) {
            queryParameters = queryParameters.set('message', <any>message);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.get<any>(`${this.basePath}/pubsub/send/to/${encodeURIComponent(String(topic))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
