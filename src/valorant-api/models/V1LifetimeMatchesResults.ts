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

export class V1LifetimeMatchesResults {
    'total'?: number;
    'returned'?: number;
    'before'?: number;
    'after'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "returned",
            "baseName": "returned",
            "type": "number",
            "format": ""
        },
        {
            "name": "before",
            "baseName": "before",
            "type": "number",
            "format": ""
        },
        {
            "name": "after",
            "baseName": "after",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifetimeMatchesResults.attributeTypeMap;
    }

    public constructor() {
    }
}

