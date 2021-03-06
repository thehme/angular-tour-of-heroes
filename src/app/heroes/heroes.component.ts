import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

/**
 * @Component is a decorator function that specifies the Angular metadata for the component.
 * selector— the component's CSS element selector
 * templateUrl— the location of the component's template file.
 * styleUrls— the location of the component's private CSS styles.
 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/**
 * The ngOnInit() is a lifecycle hook.
 * Angular calls ngOnInit() shortly after creating a component.
 * It's a good place to put initialization logic.
 */
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm' // no double quotes
  };

  constructor() { }

  ngOnInit() {
  }

}
