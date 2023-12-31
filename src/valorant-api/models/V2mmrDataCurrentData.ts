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

import { V1mmrDataImages } from '../models/V1mmrDataImages';
import { HttpFile } from '../http/http';

export class V2mmrDataCurrentData {
    'currenttier'?: number | null;
    'currenttierPatched'?: string | null;
    'images'?: V1mmrDataImages;
    'rankingInTier'?: number | null;
    'mmrChangeToLastGame'?: number | null;
    'elo'?: number | null;
    'old'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currenttier",
            "baseName": "currenttier",
            "type": "number",
            "format": ""
        },
        {
            "name": "currenttierPatched",
            "baseName": "currenttier_patched",
            "type": "string",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "V1mmrDataImages",
            "format": ""
        },
        {
            "name": "rankingInTier",
            "baseName": "ranking_in_tier",
            "type": "number",
            "format": ""
        },
        {
            "name": "mmrChangeToLastGame",
            "baseName": "mmr_change_to_last_game",
            "type": "number",
            "format": ""
        },
        {
            "name": "elo",
            "baseName": "elo",
            "type": "number",
            "format": ""
        },
        {
            "name": "old",
            "baseName": "old",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2mmrDataCurrentData.attributeTypeMap;
    }

    public constructor() {
    }
}

