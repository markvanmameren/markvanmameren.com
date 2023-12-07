import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pf-typewriter-box[text]',
  templateUrl: './typewriter-box.component.html',
  styleUrls: ['./typewriter-box.component.scss'],
})
export class TypewriterBoxComponent implements OnInit {
  @Input() text!: string;
  @Input() speed?: number = 150;
  @ViewChild('typewriterText') typewriterText!: ElementRef;

  public isWriting = true;
  public writtenText = '';
  private progress = 0;

  public ngOnInit(): void {
    this.writeLetter();
  }

  private writeLetter(): void {
    if (this.progress < this.text?.length) {
      this.writtenText += this.text.charAt(this.progress);
      this.progress++;
      setTimeout(() => this.writeLetter(), this.speed);
    } else {
      this.isWriting = false;
    }
  }
}
