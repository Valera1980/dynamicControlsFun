import * as moment from 'moment-mini';

export function toLocal(date: string | Date | undefined): Date {
    if (!date) {
        return this.now();
    }
    return moment(moment.utc(date).format('YYYY-MM-DD HH:mm:ss')).local().toDate();
}
export function toUTC(date: Date | string): string {
    return moment.utc(date).format('YYYY-MM-DD HH:mm:ss');
}
