import {Pipe} from '@angular/core';
 
@Pipe({
  name: 'twoDigit'
})
export class TwoDigit {
	transform(value, args) {
		return this.pad(value, 2, 0);
	}
  
	pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
}
