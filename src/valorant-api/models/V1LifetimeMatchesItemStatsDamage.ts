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

export class V1LifetimeMatchesItemStatsDamage {
    'made'?: number;
    'received'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "made",
            "baseName": "made",
            "type": "number",
            "format": ""
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifetimeMatchesItemStatsDamage.attributeTypeMap;
    }

    public constructor() {
    }
}

