export type TEvent = 'click' | 'change' | 'mouseover' | 'focus';
export interface IEvent {
    event: TEvent;
    source: string;
}
export type TEventsArray = IEvent[];

