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

import { SendSmtpEmailAttachment } from './sendSmtpEmailAttachment';
import { SendSmtpEmailBcc } from './sendSmtpEmailBcc';
import { SendSmtpEmailCc } from './sendSmtpEmailCc';
import { SendSmtpEmailMessageVersions } from './sendSmtpEmailMessageVersions';
import { SendSmtpEmailReplyTo } from './sendSmtpEmailReplyTo';
import { SendSmtpEmailSender } from './sendSmtpEmailSender';
import { SendSmtpEmailTo } from './sendSmtpEmailTo';

export class SendSmtpEmail {
    'sender'?: SendSmtpEmailSender;
    /**
    * Mandatory if messageVersions are not passed, ignored if messageVersions are passed. List of email addresses and names (optional) of the recipients. For example, [{\"name\":\"Jimmy\", \"email\":\"jimmy98@example.com\"}, {\"name\":\"Joe\", \"email\":\"joe@example.com\"}]
    */
    'to'?: Array<SendSmtpEmailTo>;
    /**
    * List of email addresses and names (optional) of the recipients in bcc
    */
    'bcc'?: Array<SendSmtpEmailBcc>;
    /**
    * List of email addresses and names (optional) of the recipients in cc
    */
    'cc'?: Array<SendSmtpEmailCc>;
    /**
    * HTML body of the message ( Mandatory if \'templateId\' is not passed, ignored if \'templateId\' is passed )
    */
    'htmlContent'?: string;
    /**
    * Plain Text body of the message ( Ignored if \'templateId\' is passed )
    */
    'textContent'?: string;
    /**
    * Subject of the message. Mandatory if \'templateId\' is not passed
    */
    'subject'?: string;
    'replyTo'?: SendSmtpEmailReplyTo;
    /**
    * Pass the absolute URL (no local file) or the base64 content of the attachment along with the attachment name (Mandatory if attachment content is passed). For example, `[{\"url\":\"https://attachment.domain.com/myAttachmentFromUrl.jpg\", \"name\":\"myAttachmentFromUrl.jpg\"}, {\"content\":\"base64 example content\", \"name\":\"myAttachmentFromBase64.jpg\"}]`. Allowed extensions for attachment file: xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg and wmv ( If \'templateId\' is passed and is in New Template Language format then both attachment url and content are accepted. If template is in Old template Language format, then \'attachment\' is ignored )
    */
    'attachment'?: Array<SendSmtpEmailAttachment>;
    /**
    * Pass the set of custom headers (not the standard headers) that shall be sent along the mail headers in the original email. \'sender.ip\' header can be set (only for dedicated ip users) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example, `{\"sender.ip\":\"1.2.3.4\", \"X-Mailin-custom\":\"some_custom_header\"}`.
    */
    'headers'?: object;
    /**
    * Id of the template. Mandatory if messageVersions are passed
    */
    'templateId'?: number;
    /**
    * Pass the set of attributes to customize the template. For example, {\"FNAME\":\"Joe\", \"LNAME\":\"Doe\"}. It\'s considered only if template is in New Template Language format.
    */
    'params'?: object;
    /**
    * You can customize and send out multiple versions of a templateId. Some global parameters such as **to(mandatory), bcc, cc, replyTo, subject** can also be customized specific to each version. The size of individual params in all the messageVersions shall not exceed 100 KB limit and that of cumulative params shall not exceed 1000 KB. This feature is currently in its beta version. You can follow this **step-by-step guide** on how to use **messageVersions** to batch send emails - https://developers.sendinblue.com/docs/batch-send-transactional-emails
    */
    'messageVersions'?: Array<SendSmtpEmailMessageVersions>;
    /**
    * Tag your emails to find them more easily
    */
    'tags'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sender",
            "baseName": "sender",
            "type": "SendSmtpEmailSender"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<SendSmtpEmailTo>"
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<SendSmtpEmailBcc>"
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<SendSmtpEmailCc>"
        },
        {
            "name": "htmlContent",
            "baseName": "htmlContent",
            "type": "string"
        },
        {
            "name": "textContent",
            "baseName": "textContent",
            "type": "string"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string"
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "SendSmtpEmailReplyTo"
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "Array<SendSmtpEmailAttachment>"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "object"
        },
        {
            "name": "templateId",
            "baseName": "templateId",
            "type": "number"
        },
        {
            "name": "params",
            "baseName": "params",
            "type": "object"
        },
        {
            "name": "messageVersions",
            "baseName": "messageVersions",
            "type": "Array<SendSmtpEmailMessageVersions>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return SendSmtpEmail.attributeTypeMap;
    }
}
