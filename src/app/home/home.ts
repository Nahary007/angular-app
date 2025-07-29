import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  styleUrl: './home.css',
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
})
export class Home {

}
