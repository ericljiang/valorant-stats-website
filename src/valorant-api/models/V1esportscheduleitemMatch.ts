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

import { V1esportscheduleitemMatchGameType } from '../models/V1esportscheduleitemMatchGameType';
import { V1esportscheduleitemMatchTeamsInner } from '../models/V1esportscheduleitemMatchTeamsInner';
import { HttpFile } from '../http/http';

export class V1esportscheduleitemMatch {
    'id'?: string | null;
    'gameType'?: V1esportscheduleitemMatchGameType;
    'teams'?: Array<V1esportscheduleitemMatchTeamsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "gameType",
            "baseName": "game_type",
            "type": "V1esportscheduleitemMatchGameType",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "Array<V1esportscheduleitemMatchTeamsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1esportscheduleitemMatch.attributeTypeMap;
    }

    public constructor() {
    }
}

