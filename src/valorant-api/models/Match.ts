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

import { Coach } from '../models/Coach';
import { MatchMetadata } from '../models/MatchMetadata';
import { MatchPlayers } from '../models/MatchPlayers';
import { MatchRoundsInner } from '../models/MatchRoundsInner';
import { MatchTeams } from '../models/MatchTeams';
import { Observer } from '../models/Observer';
import { HttpFile } from '../http/http';

export class Match {
    'metadata'?: MatchMetadata;
    'players'?: MatchPlayers;
    'observers'?: Array<Observer>;
    'coaches'?: Array<Coach>;
    'teams'?: MatchTeams;
    'rounds'?: Array<MatchRoundsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "MatchMetadata",
            "format": ""
        },
        {
            "name": "players",
            "baseName": "players",
            "type": "MatchPlayers",
            "format": ""
        },
        {
            "name": "observers",
            "baseName": "observers",
            "type": "Array<Observer>",
            "format": ""
        },
        {
            "name": "coaches",
            "baseName": "coaches",
            "type": "Array<Coach>",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "MatchTeams",
            "format": ""
        },
        {
            "name": "rounds",
            "baseName": "rounds",
            "type": "Array<MatchRoundsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Match.attributeTypeMap;
    }

    public constructor() {
    }
}

