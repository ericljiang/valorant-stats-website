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

export class PlayerSessionPlaytime {
    'minutes'?: number;
    'seconds'?: number;
    'milliseconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minutes",
            "baseName": "minutes",
            "type": "number",
            "format": ""
        },
        {
            "name": "seconds",
            "baseName": "seconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "milliseconds",
            "baseName": "milliseconds",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerSessionPlaytime.attributeTypeMap;
    }

    public constructor() {
    }
}
