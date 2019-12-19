import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'NPC Generator';

  darkTheme: boolean = false;
  font: string
  theme: string

  ngOnInit() {
    document.documentElement.style.setProperty('--theme-color', "#000000");
    document.documentElement.style.setProperty('--font-color', "#c9c9c9");
  }
  
  changeTheme(){
    if (this.darkTheme){
      document.documentElement.style.setProperty('--theme-color', "#000000");
      document.documentElement.style.setProperty('--font-color', "#c9c9c9");
      this.theme = "#000000"
      this.font = "#c9c9c9"
      this.darkTheme = false;
    } else {
      document.documentElement.style.setProperty('--theme-color', "#FFFFFF");
      document.documentElement.style.setProperty('--font-color', "#000000");
      this.theme = "#c9c9c9"
      this.font = "#000000"
      this.darkTheme = true;
    }
  }
}
