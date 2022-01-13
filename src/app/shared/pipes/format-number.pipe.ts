import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
  transform(value: any, label: string = '') {
    if (value && !checkForNonNumbers(label)) {
      if (isNaN(value)) {
        if (isDate(value)) {
          // console.log({value})
          return new DatePipe('en-US').transform(value, 'MMM d, y');
        }
      } else {
        return numberWithCommas(value);
      }
    }
    return value;
  }
}

const checkForNonNumbers = (label: string): boolean => {
  return (
    label.indexOf('GTIN') !== -1 ||
    label.indexOf('Phone Number') !== -1 ||
    label.indexOf('Target Audience') !== -1 ||
    label.indexOf('Simu#') !== -1 ||
    label.indexOf('Name') !== -1 ||
    label.indexOf('Month') !== -1 ||
    label.indexOf('Transaction') !== -1 ||
    label.indexOf('Period') !== -1 ||
    label.indexOf('Packaging') !== -1 ||
    label.indexOf('Package Number') !== -1 ||
    label.indexOf('Reference') !== -1 ||
    label.indexOf('Version') !== -1
  );
};

const numberWithCommas = (x: any) => {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const isStringAValidDate = (date: any) => {
  // const formats = [Moment.ISO_8601, 'MM/DD/YYYY  :)  HH*mm*ss'];
  // return Moment(date, formats).isValid() && new Date(date) instanceof Date;
  const dateWrapper = new Date(date);
  if (/^[a-z]/i.test(date)) {
    return false;
  }
  return !isNaN(dateWrapper.getDate());
};

function isDate(sDate: any) {
  if (sDate.toString() === parseInt(sDate, 10).toString()) {
    return false;
  }
  const tryDate = new Date(sDate);
  return (tryDate && tryDate.toString() !== 'NaN' && tryDate.toString() !== 'Invalid Date');
}
