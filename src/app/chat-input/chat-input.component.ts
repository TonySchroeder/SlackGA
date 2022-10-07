import { Component, OnInit } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'
import 'quill-emoji/dist/quill-emoji.js'
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {


  modules = {};
  
  constructor() {
    this.modules = {
      'toolbar': {
        container: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],
          ['image', 'video'],                         // link and image, video
        ],
      }
    }
  }

  ngOnInit(): void {

  }
  

}
