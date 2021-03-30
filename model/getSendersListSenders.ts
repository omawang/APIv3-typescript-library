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

import { GetSendersListIps } from './getSendersListIps';

export class GetSendersListSenders {
    /**
    * Id of the sender
    */
    'id': number;
    /**
    * From Name associated to the sender
    */
    'name': string;
    /**
    * From Email associated to the sender
    */
    'email': string;
    /**
    * Status of sender (true=activated, false=deactivated)
    */
    'active': boolean;
    /**
    * List of dedicated IP(s) available in the account. This data is displayed only for dedicated IPs
    */
    'ips'?: Array<GetSendersListIps>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "ips",
            "baseName": "ips",
            "type": "Array<GetSendersListIps>"
        }    ];

    static getAttributeTypeMap() {
        return GetSendersListSenders.attributeTypeMap;
    }
}
