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

import { V1esportscheduleitem } from '../models/V1esportscheduleitem';
import { HttpFile } from '../http/http';

export class V1esportschedule {
    'status'?: number;
    'data'?: Array<V1esportscheduleitem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "number",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<V1esportscheduleitem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1esportschedule.attributeTypeMap;
    }

    public constructor() {
    }
}
