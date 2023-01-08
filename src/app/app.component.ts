
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  of,
  fromEvent,
  AsyncSubject,
  BehaviorSubject,
  interval,
  ReplaySubject,
  Subject,
  Observable,
  map,
  catchError,
  throwError,
  take,
  retry,
  delay,
  tap,
  retryWhen,
  combineLatest,
  concat,
  forkJoin,
  merge,
  skip,
  skipUntil,skipWhile, distinct, from, distinctUntilChanged, distinctUntilKeyChanged, filter, first, elementAt
} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
name = 'Angular';
/*returns elements emitted by the source that satisfies condition*/
ngOnInit(){
of(1,2,3,4).pipe(filter((x)=>x%2==0)).subscribe(
  (data)=>{console.log(data);}
)

fromEvent(document,'click')
.pipe(filter((e:Event)=>{
  return (e.target as HTMLElement).tagName=='P'
})).subscribe(
  (data)=>{console.log(data);}
)

/*first*/
of(1,2,3,4).pipe(first((x)=>x%2==0)).subscribe(
  (data)=>{console.log(data);}
)
console.log("..................ElementAT.....")
/*ElementAt*/
of(1,2,3,4).pipe(elementAt(2,8)).subscribe(
  (data)=>{console.log(data);} /*try get find value at 2 if not send value 8*/
)


}


}