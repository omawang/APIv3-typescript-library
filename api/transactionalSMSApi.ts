/**
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line @typescript-eslint/no-var-requires
const localVarRequest = require('request');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http');

/* tslint:disable:no-unused-locals */
import { GetSmsEventReport } from '../model/getSmsEventReport';
import { GetTransacAggregatedSmsReport } from '../model/getTransacAggregatedSmsReport';
import { GetTransacSmsReport } from '../model/getTransacSmsReport';
import { SendSms } from '../model/sendSms';
import { SendTransacSms } from '../model/sendTransacSms';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';

import { HttpError } from './apis';

const defaultBasePath = 'https://api.sendinblue.com/v3';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TransactionalSMSApiApiKeys {
    apiKey,
    partnerKey,
}

export class TransactionalSMSApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        'user-agent': 'sendinblue_clientAPI/v2.2.3-beta.1/ts-node'
    };
    protected _useQuerystring  = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'apiKey': new ApiKeyAuth('header', 'api-key'),
        'partnerKey': new ApiKeyAuth('header', 'partner-key'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        if (defaultHeaders['user-agent'] && defaultHeaders['user-agent'].substr(0,11).toLowerCase() !== 'sendinblue_') {
            this._defaultHeaders = this._defaultHeaders;
        } else {
            this._defaultHeaders = defaultHeaders;
        }
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: TransactionalSMSApiApiKeys, value: string) {
        (this.authentications as any)[TransactionalSMSApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Get all your SMS activity (unaggregated events)
     * @param limit Number of documents per page
     * @param startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param offset Index of the first document of the page
     * @param days Number of days in the past including today (positive integer). Not compatible with \&#39;startDate\&#39; and \&#39;endDate\&#39;
     * @param phoneNumber Filter the report for a specific phone number
     * @param event Filter the report for specific events
     * @param tags Filter the report for specific tags passed as a serialized urlencoded array
     * @param sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed
     */
    public async getSmsEvents (limit?: number, startDate?: string, endDate?: string, offset?: number, days?: number, phoneNumber?: string, event?: 'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'sent' | 'accepted' | 'unsubscription' | 'replies' | 'blocked', tags?: string, sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetSmsEventReport;  }> {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/events';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
        }

        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }

        if (phoneNumber !== undefined) {
            localVarQueryParameters['phoneNumber'] = ObjectSerializer.serialize(phoneNumber, "string");
        }

        if (event !== undefined) {
            localVarQueryParameters['event'] = ObjectSerializer.serialize(event, "'bounces' | 'hardBounces' | 'softBounces' | 'delivered' | 'sent' | 'accepted' | 'unsubscription' | 'replies' | 'blocked'");
        }

        if (tags !== undefined) {
            localVarQueryParameters['tags'] = ObjectSerializer.serialize(tags, "string");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetSmsEventReport;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetSmsEventReport");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get your SMS activity aggregated over a period of time
     * @param startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param days Number of days in the past including today (positive integer). Not compatible with startDate and endDate
     * @param tag Filter on a tag
     */
    public async getTransacAggregatedSmsReport (startDate?: string, endDate?: string, days?: number, tag?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetTransacAggregatedSmsReport;  }> {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/aggregatedReport';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }

        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }

        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetTransacAggregatedSmsReport;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetTransacAggregatedSmsReport");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Get your SMS activity aggregated per day
     * @param startDate Mandatory if endDate is used. Starting date (YYYY-MM-DD) of the report
     * @param endDate Mandatory if startDate is used. Ending date (YYYY-MM-DD) of the report
     * @param days Number of days in the past including today (positive integer). Not compatible with \&#39;startDate\&#39; and \&#39;endDate\&#39;
     * @param tag Filter on a tag
     * @param sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed
     */
    public async getTransacSmsReport (startDate?: string, endDate?: string, days?: number, tag?: string, sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetTransacSmsReport;  }> {
        const localVarPath = this.basePath + '/transactionalSMS/statistics/reports';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        if (startDate !== undefined) {
            localVarQueryParameters['startDate'] = ObjectSerializer.serialize(startDate, "string");
        }

        if (endDate !== undefined) {
            localVarQueryParameters['endDate'] = ObjectSerializer.serialize(endDate, "string");
        }

        if (days !== undefined) {
            localVarQueryParameters['days'] = ObjectSerializer.serialize(days, "number");
        }

        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }

        if (sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, "'asc' | 'desc'");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: GetTransacSmsReport;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetTransacSmsReport");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary Send SMS message to a mobile number
     * @param sendTransacSms Values to send a transactional SMS
     */
    public async sendTransacSms (sendTransacSms: SendTransacSms, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: SendSms;  }> {
        const localVarPath = this.basePath + '/transactionalSMS/sms';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const localVarFormParams: any = {};

        // verify required parameter 'sendTransacSms' is not null or undefined
        if (sendTransacSms === null || sendTransacSms === undefined) {
            throw new Error('Required parameter sendTransacSms was null or undefined when calling sendTransacSms.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(sendTransacSms, "SendTransacSms")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.apiKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.apiKey.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.partnerKey.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.partnerKey.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: SendSms;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "SendSms");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
