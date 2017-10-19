import { Injectable } from '@angular/core';
@Injectable()
export class RssProvider {
constructor() {}
getSomeText(): string {
return 'This comes from my service!';
}
}