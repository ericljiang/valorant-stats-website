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

import { Match } from '../models/Match';
import { HttpFile } from '../http/http';

export class V3matches {
    'status'?: string;
    'data'?: Array<Match>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Match>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V3matches.attributeTypeMap;
    }

    public constructor() {
    }
}

