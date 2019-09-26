import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idescription, Iuser, Iuser_description, IeditUser } from './iuser';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private _url_for_all_users = 'http://127.0.0.1:8000/users/users/';
  private _url_post_new_user = 'http://127.0.0.1:8000/users/p_user/';
  private _url_get_user_by_username = 'http://127.0.0.1:8000/users/g_user/'; // Add corresponding username to the end
  private _url_add_description = 'http://127.0.0.1:8000/users/add_description/';
  private _url_get_and_patch_description = 'http://127.0.0.1:8000/users/description/'; // Add corresponding id of user with description
  private _url_patch_get_delete_usere = 'http://127.0.0.1:8000/users/user/'; // Add corresponding id of user with description


  constructor(private _http: HttpClient) { }

  // Get all users
  getUsers(): Observable<Iuser_description[]> {
    return this._http.get<Iuser_description[]>(this._url_for_all_users);
  }

  // Add user without description
  postUser(user): Observable<Iuser> {
    return this._http.post<Iuser>(this._url_post_new_user, user);
  }

  // Get user by username, used only in add user purposes
  getUserByUsername(username: string): Observable<Iuser> {
    const url = `${this._url_get_user_by_username}${username}`;
    return this._http.get<Iuser>(url);
  }

  // Add Description
  addDescription(description): Observable<Idescription>{
    return this._http.post<Idescription>(this._url_add_description, description);
  }

  // Get description
  getDescription(id: number): Observable<Idescription> {
    const url = `${this._url_get_and_patch_description}${id}`;
    return this._http.get<Idescription>(url);
  }

  // Patch description
  patchDescription(id: number, description): Observable<Idescription> {
    const url = `${this._url_get_and_patch_description}${id}/`;
    return this._http.patch<Idescription>(url, description);
  }

  // Get user by id
  getUser(id: number): Observable<Iuser> {
    const url = `${this._url_patch_get_delete_usere}${id}`;
    return this._http.get<Iuser>(url);
  }

  // Patch user
  patchUser(id:number, user): Observable<IeditUser> {
    const url = `${this._url_patch_get_delete_usere}${id}/`;
    return this._http.patch<IeditUser>(url, user);
  }

  // Delete user
  deleteUser(id: number): any {
    const url = `${this._url_patch_get_delete_usere}${id}`;
    return this._http.delete(url);
  }
}