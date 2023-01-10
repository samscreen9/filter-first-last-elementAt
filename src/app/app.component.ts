
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
  skipUntil,skipWhile, distinct, from, distinctUntilChanged, distinctUntilKeyChanged, filter, first, elementAt,debounceTime, pipe, debounce,throttleTime
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
let inp1=document.getElementById("input1");
/*
let x1=fromEvent(inp1,'input')
.pipe(
  map((i:any) => i.target.value),
  debounceTime(500),
 // distinctUntilChanged()
).subscribe(
  (data)=>{console.log(data);}
)
*/

/*
let intTime=200;
let x2=fromEvent(inp1,'input')
.pipe(
  map((i:any) => i.target.value),
  debounce(x =>{//intTime+=1000;
               // console.log(intTime);
                return interval(intTime)}
                ),
  distinctUntilChanged()
).subscribe(
  (data)=>{console.log(data);}
)
*/

/*****debounce debounceTime and throttle (run individually by commenting other) 
   are used to improve the performance of the application e.g consider you are working on search functionality
  a default behaviour will be on every entered text a new request will be sent, this will used resource from both client and server, the server will recieve unnecessary extra load of requests. debouceTime(1000) will wait till the time difference between you intering inputs or clicks is more than 1000, same for debounce but debounce instead of taking time directly is dependent on other observable that gives out time period.
 throttle on other hand will always create new request after certain delay if you are putting inputs 
*/

fromEvent(inp1,'input')
.pipe(map((x:any)=>x.target.value),
throttleTime(1000)
//distinctUntilChanged()
).subscribe(
  (data)=>{console.log(data);}
)

}

}