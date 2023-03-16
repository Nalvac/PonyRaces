import { Pipe, PipeTransform } from "@angular/core";
import { formatDistance, formatDistanceToNow, parseISO } from "date-fns";

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        const date = parseISO(value);
        return formatDistanceToNow(date, {addSuffix: true});
    }
}