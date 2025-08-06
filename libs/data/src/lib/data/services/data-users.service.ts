import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataUsers {
  allPeoples = [
    {
      id: 0,
      name: 'Иванов Игорь Николаевич',
      email: 'igorn@mail.ru',
      active: true
    },
    {
      id: 1,
      name: 'Петров Петр Петрович',
      email: 'petrov@mail.ru',
      active: false
    },
    {
      id: 2,
      name: 'Сидорова Анна Васильевна',
      email: 'sidorova@mail.ru',
      active: false
    },
    {
      id: 3,
      name: 'Козлов Дмитрий Сергеевич',
      email: 'kozlov@mail.ru',
      active: true
    },
    {
      id: 4,
      name: 'Смирнова Елена Александровна',
      email: 'smirnova@mail.ru',
      active: true
    },
    {
      id: 5,
      name: 'Данилов Игнатий Феликсович',
      email: 'danilov@mail.ru',
      active: false
    },
    {
      id: 6,
      name: 'Андреев Вениамин Максимович',
      email: 'Veniamin@mail.ru',
      active: true
    },
    {
      id: 7,
      name: 'Комиссаров Трофим Артёмович',
      email: 'comissar@mail.ru',
      active: false
    },
    {
      id: 8,
      name: 'Владимиров Трофим Мартынович',
      email: 'vladimirov@mail.ru',
      active: true
    },
    {
      id: 9,
      name: 'Мельников Остап Святославович',
      email: 'melnik@mail.ru',
      active: true
    },
    {
      id: 10,
      name: 'Игнатьев Руслан Наумович',
      email: 'ignat@mail.ru',
      active: false
    },
    {
      id: 11,
      name: 'Сазонов Аверьян Давидович',
      email: 'sazon@mail.ru',
      active: false
    },
    {
      id: 12,
      name: 'Бобылёв Климент Агафонович',
      email: 'bob@mail.ru',
      active: true
    },
    {
      id: 13,
      name: 'Гущин Руслан Всеволодович',
      email: 'gush@mail.ru',
      active: true
    },
    {
      id: 14,
      name: 'Симонов Лукьян Лаврентьевич',
      email: 'simon@mail.ru',
      active: false
    },
  ]

  getUsers(): Observable<any[]> {
    return of(this.allPeoples)
  }
  getUserById(id: number) {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }
}
