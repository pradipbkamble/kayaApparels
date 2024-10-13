import { Directive, ElementRef, HostListener } from "@angular/core";



@Directive({
    selector:'[scrollbar]'
})

export class scrollbarDirective{
constructor(private _elemref:ElementRef){}

@HostListener('scroll',['$event'])
onScroll(event:any){
const scrollposition=event.target.scrollTop
const scrollheight=event.target.scrollheight
const clientheight=event.target.clientheight

}

}