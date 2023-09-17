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

import { BundleRawItemsInner } from '../models/BundleRawItemsInner';
import { HttpFile } from '../http/http';

export class BundleRaw {
    'ID'?: string;
    'dataAssetID'?: string;
    'currencyID'?: string;
    'items'?: Array<BundleRawItemsInner>;
    'durationRemainingInSeconds'?: number;
    'wholesaleonly'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataAssetID",
            "baseName": "DataAssetID",
            "type": "string",
            "format": ""
        },
        {
            "name": "currencyID",
            "baseName": "CurrencyID",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "Items",
            "type": "Array<BundleRawItemsInner>",
            "format": ""
        },
        {
            "name": "durationRemainingInSeconds",
            "baseName": "DurationRemainingInSeconds",
            "type": "number",
            "format": ""
        },
        {
            "name": "wholesaleonly",
            "baseName": "Wholesaleonly",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleRaw.attributeTypeMap;
    }

    public constructor() {
    }
}
