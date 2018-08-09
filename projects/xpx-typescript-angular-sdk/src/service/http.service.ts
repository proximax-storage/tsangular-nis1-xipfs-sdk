/*
 * Copyright 2018 ProximaX Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



/**
 * Abstract class represents the HttpService
 */
@Injectable({
    providedIn: 'root'
})
export abstract class HttpService {

    /**
     * The baseUrl
     */
    protected abstract baseUrl: string;

    /**
     * HttpService constructor
     * @param http the http client instance
     */
    constructor(protected http: HttpClient) {

    }

    /**
     * Sets base url
     * @param baseUrl the base url
     */
    public setBaseUrl(baseUrl: string) {
        this.baseUrl = baseUrl;
    }


    /**
     * Handles common error
     * @param error the error
     */
    protected handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);

        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${JSON.stringify(error.error)}`);
        }
        // console.log(error.message);
        // return an observable with a user-facing error message
        return throwError(error);
    }

    /**
     * Checks the input string is in JSON format
     * @param str the input string
     */
    protected isJSONString(str: string) {
        if (str === null || str === undefined || str.length === 0) {
            return true;
        }

        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }

        return true;
    }

}
