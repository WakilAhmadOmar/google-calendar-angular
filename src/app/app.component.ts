import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CdkDrag,  } from '@angular/cdk/drag-drop';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CdkDrag , NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'googleCalendar';
  mouseDown = 0;
  showDialog = false;
  mounth:string[]  = []
  damyData = [
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
    [
    {
      selected:false,
      value:1
    },
    {
      selected:false,
      value:2
    },
    {
      selected:false,
      value:3
    },
    {
      selected:false,
      value:4
    },
    {
      selected:false,
      value:5
    },
    {
      selected:false,
      value:6
    },
    {
      selected:false,
      value:7
    },
    {
      selected:false,
      value:8
    },
    {
      selected:false,
      value:9
    },
    {
      selected:false,
      value:10
    },
    {
      selected:false,
      value:11
    },
    {
      selected:false,
      value:12
    },
    {
      selected:false,
      value:13
    },
    {
      selected:false,
      value:14
    },
    {
      selected:false,
      value:15
    },
    {
      selected:false,
      value:16
    },
    {
      selected:false,
      value:17
    },
    {
      selected:false,
      value:18
    },
    {
      selected:false,
      value:19
    },
    {
      selected:false,
      value:20
    },
    {
      selected:false,
      value:21
    },
    {
      selected:false,
      value:22
    },
    {
      selected:false,
      value:23
    },
  ] ,
 ]
 date = new Date()
 weekDays:{
  date:string,
  text:string
 }[] = [ ]
 times=[
  "1AM",
  "2AM",
  "3AM",
  "4AM",
  "5AM",
  "6AM",
  "7AM",
  "9AM",
  "10AM",
  "11AM",
  "12AM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
  "6PM",
  "7PM",
  "8PM",
  "9PM",
  "10PM",
  "11PM",
 ]




  getWeekDates (){
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayOfMonth = today.getDate();

  // Calculate how many days to subtract to get to Monday
  // If today is Sunday (0), set it to 6 (previous Monday), otherwise dayOfWeek - 1
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Create a new date object set to the Monday of this week
  const monday = new Date(today);
  monday.setDate(dayOfMonth - daysToMonday);

  // Array to hold all days of the week formatted
  const weekDates = [];

  // Weekdays array for formatting
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Loop 7 days to cover Monday to Sunday
  for (let i = 0; i < 7; i++) {
    // Create a new date object for each day of the week
    const weekDay = new Date(monday);
    weekDay.setDate(monday.getDate() + i);

    // Format the date as "Mon (05-29-2024)"
    const formattedDate = `${weekdays[weekDay.getDay() === 0 ? 6 : weekDay.getDay() - 1]} (${weekDay.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    })})`;

    // Add the formatted date to the array
    weekDates.push({
      date:`${weekDay.toLocaleDateString('en-US', {
      // month: '2-digit',

      day: '2-digit',
      // year: 'numeric'
    })}`,
    text:weekdays[i]
    });
  }
  this.weekDays = weekDates 
  console.log("weekDates" , weekDates)
  
  return weekDates;
}
  getMounthDates (){
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayOfMonth = today.getDate();

  // Calculate how many days to subtract to get to Monday
  // If today is Sunday (0), set it to 6 (previous Monday), otherwise dayOfWeek - 1
  const daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Create a new date object set to the Monday of this week
  const monday = new Date(today);
  monday.setDate(dayOfMonth - daysToMonday);

  // Array to hold all days of the week formatted
  const weekDates:string[] = [];

  // Weekdays array for formatting
  // const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Loop 7 days to cover Monday to Sunday
  for (let i = 0; i < 42; i++) {
    // Create a new date object for each day of the week
    const weekDay = new Date(monday);
    weekDay.setDate(monday.getDate() + i);

    // Add the formatted date to the array
    weekDates.push(
      `${weekDay.toLocaleDateString('en-US', {
      // month: '2-digit',

      day: '2-digit',
      // year: 'numeric'
    })}`
    );
  }
  this.mounth = weekDates
  // console.log("mounthDates" , weekDates)
  
  return weekDates;
}

 openDialog() {
   this.showDialog = true;
 }

 closeDialog() {
   this.showDialog = false;
 }
  ngOnInit(): void {
    this.getWeekDates();
    this.getMounthDates();
  }

  handleClickFunction(event:any){
    console.log("click " , event.clientX, event.clientY)
  }

  hnadleMouseDown(event:any){
   console.log("down", event.target.id) 
   let indexs = event.target.id.split("-")
   this.mouseDown = indexs[0]
  //  let newData = this.damyData[indexs[0]][indexs[1]]
   this.damyData[indexs[0]][indexs[1]] = {
    selected: !this.damyData[indexs[0]][indexs[1]].selected,
    value:this.damyData[indexs[0]][indexs[1]].value
   }
   
  }
  handleMouseMove(event:any) {
    console.log("move", event.target.id) 
    let indexs = event.target.id.split("-")
    if (indexs[0] !== this.mouseDown)return

    this.damyData[indexs[0]][indexs[1]] = {
      selected: true,
      value:this.damyData[indexs[0]][indexs[1]].value
     }
  }
  handleMouseUp(event:any){
    console.log("up", event.target.id)
    this.mouseDown = 0
    this.showDialog = true
  }

  

}
