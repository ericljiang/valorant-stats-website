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

export class MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets {
    'displayIcon'?: string;
    'killfeedIcon'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayIcon",
            "baseName": "display_icon",
            "type": "string",
            "format": ""
        },
        {
            "name": "killfeedIcon",
            "baseName": "killfeed_icon",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchRoundsInnerPlayerStatsInnerEconomyWeaponAssets.attributeTypeMap;
    }

    public constructor() {
    }
}

