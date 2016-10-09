/* Defines the setting entity */
export interface ISetting {
    settingId: number;
    settingGroup: string;
    settingTitle: string;
    settingKey: string;
    settingValue: string;
    readOnly: boolean;
}