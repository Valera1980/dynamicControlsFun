type TEvent = 'click' | 'change' | 'mouseover' | 'focus';
interface IEvent {
    event: TEvent;
    source: string;
}
export type TEventsArray = IEvent[];

