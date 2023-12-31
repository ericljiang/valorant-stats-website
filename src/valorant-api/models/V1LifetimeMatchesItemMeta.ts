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
import { V1LifetimeMatchesItemMetaSeason } from '../models/V1LifetimeMatchesItemMetaSeason';
import { HttpFile } from '../http/http';

export class V1LifetimeMatchesItemMeta {
    'id'?: string;
    'map'?: V1LifetimeMatchesItemMetaMap;
    'version'?: string;
    'mode'?: string;
    'startedAt'?: string;
    'season'?: V1LifetimeMatchesItemMetaSeason;
    'region'?: string | null;
    'cluster'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "map",
            "baseName": "map",
            "type": "V1LifetimeMatchesItemMetaMap",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string",
            "format": ""
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "season",
            "baseName": "season",
            "type": "V1LifetimeMatchesItemMetaSeason",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "cluster",
            "baseName": "cluster",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1LifetimeMatchesItemMeta.attributeTypeMap;
    }

    public constructor() {
    }
}

