import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`#${AppComponent.prototype.like.name}
  Should add likes number when called`, () => {
    component.likes = 0
    const initialLikes = component.likes;

    for (let i = 0; i < 50; i++) {
      component.like();
    }
    expect(component.likes).toBe(initialLikes + 50);
  });
});
