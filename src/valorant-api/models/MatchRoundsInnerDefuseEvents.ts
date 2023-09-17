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

import { MatchRoundsInnerPlantEventsPlantLocation } from '../models/MatchRoundsInnerPlantEventsPlantLocation';
import { MatchRoundsInnerPlantEventsPlantedBy } from '../models/MatchRoundsInnerPlantEventsPlantedBy';
import { MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner } from '../models/MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner';
import { HttpFile } from '../http/http';

export class MatchRoundsInnerDefuseEvents {
    'defuseLocation'?: MatchRoundsInnerPlantEventsPlantLocation | null;
    'defusedBy'?: MatchRoundsInnerPlantEventsPlantedBy | null;
    'defuseTimeInRound'?: number | null;
    'playerLocationsOnDefuse'?: Array<MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defuseLocation",
            "baseName": "defuse_location",
            "type": "MatchRoundsInnerPlantEventsPlantLocation",
            "format": ""
        },
        {
            "name": "defusedBy",
            "baseName": "defused_by",
            "type": "MatchRoundsInnerPlantEventsPlantedBy",
            "format": ""
        },
        {
            "name": "defuseTimeInRound",
            "baseName": "defuse_time_in_round",
            "type": "number",
            "format": ""
        },
        {
            "name": "playerLocationsOnDefuse",
            "baseName": "player_locations_on_defuse",
            "type": "Array<MatchRoundsInnerPlantEventsPlayerLocationsOnPlantInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MatchRoundsInnerDefuseEvents.attributeTypeMap;
    }

    public constructor() {
    }
}
