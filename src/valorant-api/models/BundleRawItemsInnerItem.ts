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

export class BundleRawItemsInnerItem {
    'itemTypeID'?: string;
    'itemID'?: string;
    'amount'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "itemTypeID",
            "baseName": "ItemTypeID",
            "type": "string",
            "format": ""
        },
        {
            "name": "itemID",
            "baseName": "ItemID",
            "type": "string",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleRawItemsInnerItem.attributeTypeMap;
    }

    public constructor() {
    }
}

