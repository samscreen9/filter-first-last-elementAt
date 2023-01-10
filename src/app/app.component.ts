
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

/*  js creating debounce and throttle

</head>
<body>
<input type="text" id="input1"><br>
Default:<span id="p1"></span><br>
Debounce:<span id="p2"></span><br>
Throttle:<span id="p3"></span><br>
</body>
</html>


let inp1= document.getElementById("input1");
let df=document.getElementById("p1");
let de=document.getElementById("p2");
let th=document.getElementById("p3");

inp1.addEventListener("input",(e)=>{
df.textContent=e.target.value;
betterThanExpensive(e.target.value);
betterThanExpensiveThrottle(e.target.value);
})

function expensive(text){
return  de.textContent=text;
}
function expensiveth(text){
return  th.textContent=text;
}

let betterThanExpensive=debounce(expensive);
let betterThanExpensiveThrottle=throttle(expensiveth);

function debounce(cb){
let tm;
return (...args)=>{
clearTimeout(tm);
tm=setTimeout(()=>{cb(...args)},1000);
}
}

function throttle(cb){
let f=true;
return (...args)=>{
if(f)
 cb(...args);
 f=false
 setTimeout(()=>{f=true},1000)
}
}
*/