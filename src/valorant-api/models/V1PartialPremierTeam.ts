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

import { Affinities } from '../models/Affinities';
import { PremierConferences } from '../models/PremierConferences';
import { Regions } from '../models/Regions';
import { TeamRoasterCustomization } from '../models/TeamRoasterCustomization';
import { HttpFile } from '../http/http';

export class V1PartialPremierTeam {
    'id'?: string;
    'name'?: string;
    'tag'?: string;
    'conference'?: PremierConferences;
    'division'?: number;
    'affinity'?: Affinities;
    'region'?: Regions;
    'losses'?: number;
    'wins'?: number;
    'score'?: number;
    'ranking'?: number;
    'customization'?: TeamRoasterCustomization;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string",
            "format": ""
        },
        {
            "name": "conference",
            "baseName": "conference",
            "type": "PremierConferences",
            "format": ""
        },
        {
            "name": "division",
            "baseName": "division",
            "type": "number",
            "format": ""
        },
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "Affinities",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "Regions",
            "format": ""
        },
        {
            "name": "losses",
            "baseName": "losses",
            "type": "number",
            "format": ""
        },
        {
            "name": "wins",
            "baseName": "wins",
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
            "name": "ranking",
            "baseName": "ranking",
            "type": "number",
            "format": ""
        },
        {
            "name": "customization",
            "baseName": "customization",
            "type": "TeamRoasterCustomization",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1PartialPremierTeam.attributeTypeMap;
    }

    public constructor() {
    }
}


