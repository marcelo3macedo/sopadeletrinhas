import { WritableDraft } from 'immer/dist/internal';

export type ConfigUpdateTarget = keyof WritableDraft<{
    alertNewSessions: boolean;
    soundEffects: boolean;
    nightMode: boolean;
    fontSize: string;
    language: string;
    fontAvailable: string[];
    languageAvailable: string[];
}>;
