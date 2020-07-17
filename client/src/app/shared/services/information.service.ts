import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {InformationPage, OverviewPage} from '../interfaces'

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  constructor(private http: HttpClient) {
  }

  getOverview(): Observable<OverviewPage> {
    return this.http.get<OverviewPage>('/api/information/overview')
  }

  getInformation(): Observable<InformationPage> {
    return this.http.get<InformationPage>('/api/information/information')
  }
}
