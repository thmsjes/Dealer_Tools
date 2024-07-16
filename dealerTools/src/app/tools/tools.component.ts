import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
@Input({required: true}) id!: string
@Input({required:true}) avitar!: string;
@Input({required:true}) name!: string;
@Output() selectTool = new EventEmitter<string>()

get imagePath(){
  return 'assets/tools/' + this.avitar
}

 onToolSelect(){this.selectTool.emit(this.id)

  //route to the seleted path
 }



}
