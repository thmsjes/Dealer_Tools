import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-display',
  standalone: true,
  imports: [],
  templateUrl: './tool-display.component.html',
  styleUrl: './tool-display.component.css'
})
export class ToolDisplayComponent {
 @Input({required: true})  name!: string
 @Input({required: true})  description!: string
}
