import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public routeName$ = this.router.events.pipe(
    map(() => this.title.getTitle()),
    map((title) =>
      title !== 'About Me' && title !== 'Portfolio' ? title : null
    )
  );

  constructor(private router: Router, private title: Title) {}
}
