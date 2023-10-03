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

import { V1esportscheduleitemLeague } from '../models/V1esportscheduleitemLeague';
import { V1esportscheduleitemMatch } from '../models/V1esportscheduleitemMatch';
import { V1esportscheduleitemTournament } from '../models/V1esportscheduleitemTournament';
import { HttpFile } from '../http/http';

export class V1esportscheduleitem {
    'date'?: string;
    'state'?: string;
    'type'?: string;
    'vod'?: string | null;
    'league'?: V1esportscheduleitemLeague;
    'tournament'?: V1esportscheduleitemTournament;
    'match'?: V1esportscheduleitemMatch;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "vod",
            "baseName": "vod",
            "type": "string",
            "format": ""
        },
        {
            "name": "league",
            "baseName": "league",
            "type": "V1esportscheduleitemLeague",
            "format": ""
        },
        {
            "name": "tournament",
            "baseName": "tournament",
            "type": "V1esportscheduleitemTournament",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "V1esportscheduleitemMatch",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1esportscheduleitem.attributeTypeMap;
    }

    public constructor() {
    }
}
