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
import * as http from 'http';

/* tslint:disable:no-unused-locals */
import { AddContactToList } from '../model/addContactToList';
import { CreateList } from '../model/createList';
import { CreateModel } from '../model/createModel';
import { GetContacts } from '../model/getContacts';
import { GetExtendedList } from '../model/getExtendedList';
import { GetFolderLists } from '../model/getFolderLists';
import { GetLists } from '../model/getLists';
import { PostContactInfo } from '../model/postContactInfo';
import { RemoveContactFromList } from '../model/removeContactFromList';
import { UpdateList } from '../model/updateList';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';

import { HttpError } from './apis';

const defaultBasePath = 'https://api.sendinblue.com/v3';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ListsApiApiKeys {
    apiKey,
    partnerKey,
}

export class ListsApi {
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

    public setApiKey(key: ListsApiApiKeys, value: string) {
        (this.authentications as any)[ListsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary Add existing contacts to a list
     * @param listId Id of the list
     * @param contactEmails Emails addresses OR IDs of the contacts
     */
    public async addContactToList (listId: number, contactEmails: AddContactToList, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PostContactInfo;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/add'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling addContactToList.');
        }

        // verify required parameter 'contactEmails' is not null or undefined
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling addContactToList.');
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
            body: ObjectSerializer.serialize(contactEmails, "AddContactToList")
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
            return new Promise<{ response: http.IncomingMessage; body: PostContactInfo;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PostContactInfo");
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
     * @summary Create a list
     * @param createList Values to create a list
     */
    public async createList (createList: CreateList, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateModel;  }> {
        const localVarPath = this.basePath + '/contacts/lists';
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

        // verify required parameter 'createList' is not null or undefined
        if (createList === null || createList === undefined) {
            throw new Error('Required parameter createList was null or undefined when calling createList.');
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
            body: ObjectSerializer.serialize(createList, "CreateList")
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
            return new Promise<{ response: http.IncomingMessage; body: CreateModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateModel");
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
     * @summary Delete a list
     * @param listId Id of the list
     */
    public async deleteList (listId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling deleteList.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
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
     * @summary Get contacts in a list
     * @param listId Id of the list
     * @param modifiedSince Filter (urlencoded) the contacts modified after a given UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for accurate result.
     * @param limit Number of documents per page
     * @param offset Index of the first document of the page
     * @param sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed
     */
    public async getContactsFromList (listId: number, modifiedSince?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetContacts;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getContactsFromList.');
        }

        if (modifiedSince !== undefined) {
            localVarQueryParameters['modifiedSince'] = ObjectSerializer.serialize(modifiedSince, "string");
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: GetContacts;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetContacts");
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
     * @summary Get lists in a folder
     * @param folderId Id of the folder
     * @param limit Number of documents per page
     * @param offset Index of the first document of the page
     * @param sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed
     */
    public async getFolderLists (folderId: number, limit?: number, offset?: number, sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetFolderLists;  }> {
        const localVarPath = this.basePath + '/contacts/folders/{folderId}/lists'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));
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

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new Error('Required parameter folderId was null or undefined when calling getFolderLists.');
        }

        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: GetFolderLists;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetFolderLists");
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
     * @summary Get a list\'s details
     * @param listId Id of the list
     */
    public async getList (listId: number, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetExtendedList;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling getList.');
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
            return new Promise<{ response: http.IncomingMessage; body: GetExtendedList;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetExtendedList");
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
     * @summary Get all the lists
     * @param limit Number of documents per page
     * @param offset Index of the first document of the page
     * @param sort Sort the results in the ascending/descending order of record creation. Default order is **descending** if &#x60;sort&#x60; is not passed
     */
    public async getLists (limit?: number, offset?: number, sort?: 'asc' | 'desc', options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: GetLists;  }> {
        const localVarPath = this.basePath + '/contacts/lists';
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

        if (offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(offset, "number");
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
            return new Promise<{ response: http.IncomingMessage; body: GetLists;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "GetLists");
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
     * @summary Delete a contact from a list
     * @param listId Id of the list
     * @param contactEmails Emails addresses OR IDs of the contacts
     */
    public async removeContactFromList (listId: number, contactEmails: RemoveContactFromList, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: PostContactInfo;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}/contacts/remove'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling removeContactFromList.');
        }

        // verify required parameter 'contactEmails' is not null or undefined
        if (contactEmails === null || contactEmails === undefined) {
            throw new Error('Required parameter contactEmails was null or undefined when calling removeContactFromList.');
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
            body: ObjectSerializer.serialize(contactEmails, "RemoveContactFromList")
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
            return new Promise<{ response: http.IncomingMessage; body: PostContactInfo;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "PostContactInfo");
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
     * @summary Update a list
     * @param listId Id of the list
     * @param updateList Values to update a list
     */
    public async updateList (listId: number, updateList: UpdateList, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body?: any;  }> {
        const localVarPath = this.basePath + '/contacts/lists/{listId}'
            .replace('{' + 'listId' + '}', encodeURIComponent(String(listId)));
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

        // verify required parameter 'listId' is not null or undefined
        if (listId === null || listId === undefined) {
            throw new Error('Required parameter listId was null or undefined when calling updateList.');
        }

        // verify required parameter 'updateList' is not null or undefined
        if (updateList === null || updateList === undefined) {
            throw new Error('Required parameter updateList was null or undefined when calling updateList.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        const localVarUseFormData = false;

        const localVarRequestOptions: localVarRequest.Options = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(updateList, "UpdateList")
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
            return new Promise<{ response: http.IncomingMessage; body?: any;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
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
