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

import { BundleRawItemsInnerItem } from '../models/BundleRawItemsInnerItem';
import { HttpFile } from '../http/http';

export class BundleRawItemsInner {
    'item'?: BundleRawItemsInnerItem;
    'basePrice'?: number;
    'currencyID'?: string;
    'discountPercent'?: number;
    'discountedPrice'?: number;
    'isPromoItem'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "item",
            "baseName": "Item",
            "type": "BundleRawItemsInnerItem",
            "format": ""
        },
        {
            "name": "basePrice",
            "baseName": "BasePrice",
            "type": "number",
            "format": ""
        },
        {
            "name": "currencyID",
            "baseName": "CurrencyID",
            "type": "string",
            "format": ""
        },
        {
            "name": "discountPercent",
            "baseName": "DiscountPercent",
            "type": "number",
            "format": ""
        },
        {
            "name": "discountedPrice",
            "baseName": "DiscountedPrice",
            "type": "number",
            "format": ""
        },
        {
            "name": "isPromoItem",
            "baseName": "IsPromoItem",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleRawItemsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

