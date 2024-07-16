import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
@Input({required:true}) avitar!: string;
@Input({required:true}) name!: string;

get imagePath(){
  return 'assets/tools/' + this.avitar
}

 onToolSelect(){
  //route to the seleted path
 }



}
