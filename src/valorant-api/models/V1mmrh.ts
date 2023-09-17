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

import { V1mmrhDataInner } from '../models/V1mmrhDataInner';
import { HttpFile } from '../http/http';

export class V1mmrh {
    'status'?: number;
    'name'?: string;
    'tag'?: string;
    'data'?: Array<V1mmrhDataInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
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
            "name": "data",
            "baseName": "data",
            "type": "Array<V1mmrhDataInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1mmrh.attributeTypeMap;
    }

    public constructor() {
    }
}

