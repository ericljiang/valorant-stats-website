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

import { BundleParsedItemsInner } from '../models/BundleParsedItemsInner';
import { HttpFile } from '../http/http';

export class BundleParsed {
    'bundleUuid'?: string;
    'secondsRemaining'?: number;
    'bundlePrice'?: number;
    'wholeSaleOnly'?: boolean;
    'expiresAt'?: string;
    'items'?: Array<BundleParsedItemsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bundleUuid",
            "baseName": "bundle_uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondsRemaining",
            "baseName": "seconds_remaining",
            "type": "number",
            "format": ""
        },
        {
            "name": "bundlePrice",
            "baseName": "bundle_price",
            "type": "number",
            "format": ""
        },
        {
            "name": "wholeSaleOnly",
            "baseName": "whole_sale_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BundleParsedItemsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BundleParsed.attributeTypeMap;
    }

    public constructor() {
    }
}
