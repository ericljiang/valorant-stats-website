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

export class V2mmrDataHighestRank {
    'old'?: boolean;
    'tier'?: number | null;
    'patchedTier'?: string | null;
    'season'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "old",
            "baseName": "old",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "number",
            "format": ""
        },
        {
            "name": "patchedTier",
            "baseName": "patched_tier",
            "type": "string",
            "format": ""
        },
        {
            "name": "season",
            "baseName": "season",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2mmrDataHighestRank.attributeTypeMap;
    }

    public constructor() {
    }
}

