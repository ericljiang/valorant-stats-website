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

import { ModeIds } from '../models/ModeIds';
import { Modes } from '../models/Modes';
import { Platforms } from '../models/Platforms';
import { V1QueueStatusDataInnerGameRules } from '../models/V1QueueStatusDataInnerGameRules';
import { V1QueueStatusDataInnerHighSkill } from '../models/V1QueueStatusDataInnerHighSkill';
import { V1QueueStatusDataInnerMapsInner } from '../models/V1QueueStatusDataInnerMapsInner';
import { V1QueueStatusDataInnerPartySize } from '../models/V1QueueStatusDataInnerPartySize';
import { V1QueueStatusDataInnerSkillDisparityInner } from '../models/V1QueueStatusDataInnerSkillDisparityInner';
import { HttpFile } from '../http/http';

export class V1QueueStatusDataInner {
    'mode'?: Modes;
    'modeId'?: ModeIds;
    'enabled'?: boolean;
    'teamSize'?: number;
    'numberOfTeams'?: number;
    'partySize'?: V1QueueStatusDataInnerPartySize;
    'highSkill'?: V1QueueStatusDataInnerHighSkill;
    'ranked'?: boolean;
    'tournament'?: boolean;
    'skillDisparity'?: Array<V1QueueStatusDataInnerSkillDisparityInner>;
    'requiredAccountLevel'?: number;
    'gameRules'?: V1QueueStatusDataInnerGameRules;
    'platforms'?: Array<Platforms>;
    'maps'?: Array<V1QueueStatusDataInnerMapsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "Modes",
            "format": ""
        },
        {
            "name": "modeId",
            "baseName": "mode_id",
            "type": "ModeIds",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "teamSize",
            "baseName": "team_size",
            "type": "number",
            "format": ""
        },
        {
            "name": "numberOfTeams",
            "baseName": "number_of_teams",
            "type": "number",
            "format": ""
        },
        {
            "name": "partySize",
            "baseName": "party_size",
            "type": "V1QueueStatusDataInnerPartySize",
            "format": ""
        },
        {
            "name": "highSkill",
            "baseName": "high_skill",
            "type": "V1QueueStatusDataInnerHighSkill",
            "format": ""
        },
        {
            "name": "ranked",
            "baseName": "ranked",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tournament",
            "baseName": "tournament",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "skillDisparity",
            "baseName": "skill_disparity",
            "type": "Array<V1QueueStatusDataInnerSkillDisparityInner>",
            "format": ""
        },
        {
            "name": "requiredAccountLevel",
            "baseName": "required_account_level",
            "type": "number",
            "format": ""
        },
        {
            "name": "gameRules",
            "baseName": "game_rules",
            "type": "V1QueueStatusDataInnerGameRules",
            "format": ""
        },
        {
            "name": "platforms",
            "baseName": "platforms",
            "type": "Array<Platforms>",
            "format": ""
        },
        {
            "name": "maps",
            "baseName": "maps",
            "type": "Array<V1QueueStatusDataInnerMapsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1QueueStatusDataInner.attributeTypeMap;
    }

    public constructor() {
    }
}


