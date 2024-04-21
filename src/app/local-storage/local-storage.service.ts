import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setCache(key:string, value:string){
    localStorage.setItem(key,value);
  }

  public getCache(key:string){
    return localStorage.getItem(key);
  }

  public deleteCache(key:string){
    localStorage.removeItem(key);
  }

  public clearCache(){
    localStorage.clear();
  }
}
