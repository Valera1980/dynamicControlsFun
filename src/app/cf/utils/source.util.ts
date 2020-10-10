import { TEvent, TEventsArray } from '../enums/events';

export function getSourceOrDefault(key: TEvent, sources: TEventsArray, defaultScript = ''): string {
    const script = sources.find(s => s.event === key)?.source;
    return script && script.length ? script : defaultScript;
}
