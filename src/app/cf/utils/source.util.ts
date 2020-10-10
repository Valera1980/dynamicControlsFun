import { TEvent, TEventsArray } from '../enums/events';

export function getSourceOrDefault(key: TEvent, sources: TEventsArray, defaultScript = ''): string {
    if (!Array.isArray(sources)) {
        return '';
    }
    const script = sources.find(s => s.event === key)?.source;
    return typeof script === 'string' && script.length ? script : defaultScript;
}
