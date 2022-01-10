import { Injectable } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfflineManagerService {

  constructor(
    private localDbService: LocalStorageService,
  ) { }

  async removeItem(table: string, key: string) {
    const item = await this.localDbService.getByKey(table, key);
    if (item) {
      return this.localDbService.delete(table, key );
    }
    return null;
  }

  async clearAll(table: string) {
    try {
      await this.localDbService.clearAll(table);
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  getItems(dataKey: string): Observable<any> {
    return new Observable( (observer) => {
      this.localDbService.getAll(dataKey)
        .then(
          items => observer.next(items)
        ).catch(e => observer.error(e));
    });
  }

  saveItem(item: any, dataKey: string): Promise<any> {
    return this.localDbService.update(dataKey, {...item} );
  }
}
