# Work-Day-Scheduler

Design a work day scheduler that user can add work note to each hourly time block, So that the user can manage time effectively.
## Acceptance Criteria

* GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
* THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
* THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
* THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
* THEN I can enter an event
* WHEN I click the save button for that timeblock
* THEN the text for that event is saved in local storage
* WHEN I refresh the page
* THEN the saved events persist

## Description
I learned a lot from this week's task about using third party APIs like Day.js to finish my work day planner. 

Although I have the starter code for html and css files, I do spend a little bit time to explore the starter code about how to use Bootstrap to plan my html page. It really saves a lot time to make layout and style the page. For jQuery part, I find using jQuery make my JavaScript code simple. For example, I use jQuery element to select the html element. I also use jQuery to traverse the DOM to find the target element.  

To build this project, I need to access current time and date to make planner interactive. I use Day.js APIs to manage my time blocks color. I also use Day.js to choose a particular time to clear the local storage every midnight at 00:00 AM. So this planner will reload every day. 

All in all, it is a great project to practice this week's content like jQuery, Bootstrap and google font.

## Made With
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Installation

N/A

## Usage

To view this application,the following image shows the landing page of the application, or click on https://mid30s.github.io/Work-Day-Scheduler/

![work-day-scheduler](./assets/images/password-generator-1.png)

## Credits

Thanks for the start code provided by the web bootcamp.

## License

Please refer to the LICENSE in the repo.