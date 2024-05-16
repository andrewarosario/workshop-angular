import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { mockUsers } from './mocks/user.mock';
import { UserService } from './shared/user.service';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => of(mockUsers),
          },
        },
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    const users: HTMLElement[] = fixture.nativeElement.querySelectorAll('li');
    expect(users.length).toBe(mockUsers.length);

    users.forEach((user, index) => {
      expect(user.textContent).toBe(mockUsers[index].name);
    });
  });
});
