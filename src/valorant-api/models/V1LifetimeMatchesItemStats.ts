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

import { V1LifetimeMatchesItemMetaMap } from '../models/V1LifetimeMatchesItemMetaMap';
import { V1LifetimeMatchesItemStatsDamage } from '../models/V1LifetimeMatchesItemStatsDamage';
import { V1LifetimeMatchesItemStatsShots } from '../models/V1LifetimeMatchesItemStatsShots';
import { HttpFile } from '../http/http';

export class V1LifetimeMatchesItemStats {
    'puuid'?: string;
    'team'?: string;
    'level'?: number;
    'character'?: V1LifetimeMatchesItemMetaMap;
    'tier'?: number;
    'score'?: number;
    'kills'?: number;
    'deaths'?: number;
    'assists'?: number;
    'shots'?: V1LifetimeMatchesItemStatsShots;
    'damage'?: V1LifetimeMatchesItemStatsDamage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "puuid",
            "baseName": "puuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "string",
            "format": ""
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "number",
            "format": ""
        },
        {
            "name": "character",
            "baseName": "character",
            "type": "V1LifetimeMatchesItemMetaMap",
            "format": ""
        },
        {
            "name": "tier",
            "baseName": "tier",
            "type": "number",
            "format": ""
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number",
            "format": ""
        },
        {
            "name": "kills",
            "baseName": "kills",
            "type": "number",
            "format": ""
        },
        {
            "name": "deaths",
            "baseName": "deaths",
            "type": "number",
            "format": ""
        },
        {
            "name": "assists",
            "baseName": "assists",
            "type": "number",
            "format": ""
        },
        {
            "name": "shots",
            "baseName": "shots",
            "type": "V1LifetimeMatchesItemStatsShots",
            "format": ""
        },
        {
            "name": "damage",
            "baseName": "damage",
            "type": "V1LifetimeMatchesItemStatsDamage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifetimeMatchesItemStats.attributeTypeMap;
    }

    public constructor() {
    }
}

