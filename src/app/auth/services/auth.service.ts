import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RegisterRequestIntrface } from "../types/registerRequest.interface";
import { Observable, map } from "rxjs";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root',
})
export class AuthService{

constructor(private http: HttpClient) {}

register(data: RegisterRequestIntrface): Observable<CurrentUserInterface>{
    const url = environment.apiUrl + '/users'
return this.http.post<AuthResponseInterface>(url, data)
.pipe(map((response) => response.user))
}
}