/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1AccountDataCard } from '../models/V1AccountDataCard';
import { HttpFile } from '../http/http';

export class V1AccountData {
    'puuid'?: string;
    'region'?: string;
    'accountLevel'?: number;
    'name'?: string | null;
    'tag'?: string | null;
    'card'?: V1AccountDataCard;
    'lastUpdate'?: string;
    'lastUpdateRaw'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "puuid",
            "baseName": "puuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountLevel",
            "baseName": "account_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "V1AccountDataCard",
            "format": ""
        },
        {
            "name": "lastUpdate",
            "baseName": "last_update",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastUpdateRaw",
            "baseName": "last_update_raw",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1AccountData.attributeTypeMap;
    }

    public constructor() {
    }
}

