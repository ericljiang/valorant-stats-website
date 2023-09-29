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

import { MatchRoundsInnerPlayerStatsInnerAbilityCasts } from '../models/MatchRoundsInnerPlayerStatsInnerAbilityCasts';
import { MatchRoundsInnerPlayerStatsInnerDamageEventsInner } from '../models/MatchRoundsInnerPlayerStatsInnerDamageEventsInner';
import { MatchRoundsInnerPlayerStatsInnerEconomy } from '../models/MatchRoundsInnerPlayerStatsInnerEconomy';
import { MatchRoundsInnerPlayerStatsInnerKillEventsInner } from '../models/MatchRoundsInnerPlayerStatsInnerKillEventsInner';
import { HttpFile } from '../http/http';

export class MatchRoundsInnerPlayerStatsInner {
    'abilityCasts'?: MatchRoundsInnerPlayerStatsInnerAbilityCasts;
    'playerPuuid'?: string;
    'playerDisplayName'?: string;
    'playerTeam'?: string;
    'damageEvents'?: Array<MatchRoundsInnerPlayerStatsInnerDamageEventsInner>;
    'damage'?: number;
    'bodyshots'?: number;
    'headshots'?: number;
    'legshots'?: number;
    'killEvents'?: Array<MatchRoundsInnerPlayerStatsInnerKillEventsInner>;
    'kills'?: number;
    'score'?: number;
    'economy'?: MatchRoundsInnerPlayerStatsInnerEconomy;
    'wasAfk'?: boolean;
    'wasPenalized'?: boolean;
    'stayedInSpawn'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "abilityCasts",
            "baseName": "ability_casts",
            "type": "MatchRoundsInnerPlayerStatsInnerAbilityCasts",
            "format": ""
        },
        {
            "name": "playerPuuid",
            "baseName": "player_puuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "playerDisplayName",
            "baseName": "player_display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "playerTeam",
            "baseName": "player_team",
            "type": "string",
            "format": ""
        },
        {
            "name": "damageEvents",
            "baseName": "damage_events",
            "type": "Array<MatchRoundsInnerPlayerStatsInnerDamageEventsInner>",
            "format": ""
        },
        {
            "name": "damage",
            "baseName": "damage",
            "type": "number",
            "format": ""
        },
        {
            "name": "bodyshots",
            "baseName": "bodyshots",
            "type": "number",
            "format": ""
        },
        {
            "name": "headshots",
            "baseName": "headshots",
            "type": "number",
            "format": ""
        },
        {
            "name": "legshots",
            "baseName": "legshots",
            "type": "number",
            "format": ""
        },
        {
            "name": "killEvents",
            "baseName": "kill_events",
            "type": "Array<MatchRoundsInnerPlayerStatsInnerKillEventsInner>",
            "format": ""
        },
        {
            "name": "kills",
            "baseName": "kills",
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
            "name": "economy",
            "baseName": "economy",
            "type": "MatchRoundsInnerPlayerStatsInnerEconomy",
            "format": ""
        },
        {
            "name": "wasAfk",
            "baseName": "was_afk",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "wasPenalized",
            "baseName": "was_penalized",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "stayedInSpawn",
            "baseName": "stayed_in_spawn",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchRoundsInnerPlayerStatsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
