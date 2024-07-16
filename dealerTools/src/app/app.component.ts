import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ToolsComponent } from './tools/tools.component';
import {tools} from './tools/toolsDescriptions'
import { ToolDisplayComponent } from "./tool-display/tool-display.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ToolsComponent, ToolDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dealer Tools';
  allTools = tools
  selectedToolsId = "u6" // default page

  get selectedToolDescrition(){
    return this.allTools.find((tool) => tool.id === this.selectedToolsId
    
    )!
  }

  onSelectTool(id:string){
    this.selectedToolsId = id

  }
}
