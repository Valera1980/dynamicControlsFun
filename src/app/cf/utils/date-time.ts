import * as moment from 'moment-mini';

export function toLocal(date: string | Date | undefined): Date {
    if (!date) {
        return this.now();
    }
    const str = moment.utc(date).local().format('YYYY-MM-DD HH:mm:ss');
    return moment(str).local().toDate();
}
export function toUTC(date: Date | string): string {
    return moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
}

export function addDays(date: Date, interval: number): string {
    return moment(date).add(interval, 'days').toString();
}
export function isBefore(dateNow: Date | string, dateCompare: Date | string): boolean {
    return moment(dateCompare).isBefore(dateNow);
}
