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

import { HttpFile } from '../http/http';

export class V1QueueStatusDataInnerHighSkill {
    'maxPartySize'?: number;
    'minTier'?: number;
    'maxTier'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "maxPartySize",
            "baseName": "max_party_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "minTier",
            "baseName": "min_tier",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxTier",
            "baseName": "max_tier",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1QueueStatusDataInnerHighSkill.attributeTypeMap;
    }

    public constructor() {
    }
}
