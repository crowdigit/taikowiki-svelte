import {GENRE, DIFFICULTY, VERSION} from './const'

export interface SongData {
    songNo: string;
    title: string;
    titleKo: string | null;
    aliasKo: string | null;
    titleEn: string | null;
    aliasEn: string | null;
    bpm: Record<'min' | 'max', number>;
    bpmShiver: 1 | 0;
    version: Version[];
    isAsiaBanned: 1 | 0;
    isKrBanned: 1 | 0;
    genre: Genre[];
    artists: string[];
    addedDate: number|null;
    courses: Partial<Record<Difficulty, Course>>
    isDeleted: 1 | 0;
}

export type Genre = typeof GENRE[number]
export type Difficulty = typeof DIFFICULTY[number]
export interface Course {
    level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    isBranched: 1 | 0;
    maxCombo: number;
    playTime: number;
    balloon: number[];
    rollTime: number[];
    maxDensity: number;
    daniUsed: 1 | 0;
    dani: {
        version: string;
        dan: string;
        order: number;
    }[];
}
export type Version = typeof VERSION[number][number]
export type SongLang = "jp" | "ko" | "ako" | "en" | "aen";
