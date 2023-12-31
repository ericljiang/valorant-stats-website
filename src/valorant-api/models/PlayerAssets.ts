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

import { PlayerAssetsAgent } from '../models/PlayerAssetsAgent';
import { PlayerAssetsCard } from '../models/PlayerAssetsCard';
import { HttpFile } from '../http/http';

export class PlayerAssets {
    'card'?: PlayerAssetsCard;
    'agent'?: PlayerAssetsAgent;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "card",
            "baseName": "card",
            "type": "PlayerAssetsCard",
            "format": ""
        },
        {
            "name": "agent",
            "baseName": "agent",
            "type": "PlayerAssetsAgent",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerAssets.attributeTypeMap;
    }

    public constructor() {
    }
}

