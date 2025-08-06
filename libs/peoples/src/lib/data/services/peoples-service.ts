import { DataUsers } from '@ttn/data';
import { inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/people.interface';


@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  nowEmail = ''

  dataUsers = inject(DataUsers)

  getUsersInfo():Observable<IUser[]>{
    return this.dataUsers.getUsers()
  }

  updateNowEmail(val: string){
    this.nowEmail = val
  }

  getUserInfo(id: number): Observable<IUser | undefined> {
    return this.dataUsers.getUserById(id);
  }
}

