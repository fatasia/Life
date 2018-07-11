import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';


/**国际化*/
import {zh} from './../assets/i18n/zh';
import {en} from './../assets/i18n/en';

/**provider*/
import {RouterUtil} from '../providers/RouterUtil';
import {Logger} from '../providers/Logger';
import {LocalStorage} from '../providers/Localstorage';
import {Utils} from '../providers/Utils';

/**pages*/
import { AppComponent } from './app.component';

import {BaseComponent} from './BaseComponent';
import {HeaderComponent} from './header/app.header';
import { UserinfoComponent } from '../pages/userinfo/userinfo.component';
import { HomeComponent } from '../pages/home/home.component';
import { ShareComponent } from '../pages/share/share.component';
import { MatchlistComponent } from '../pages/matchlist/matchlist.component';
import {MatchtoComponent} from '../pages/matchto/matchto.component';
import {MatchComponent} from '../pages/match/match.component';


/** 通过类引用方式解析国家化文件 */
export class CustomTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      switch (lang) {
        case 'zh':
        default:
          observer.next(zh);
          break;
        case 'en':
          observer.next(en);
      }

      observer.complete();
    });
  }
}

export function TranslateLoaderFactory() {
  return new CustomTranslateLoader();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BaseComponent,
    UserinfoComponent,
    ShareComponent,
    MatchlistComponent,
    MatchtoComponent ,
    MatchComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (TranslateLoaderFactory),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    RouterUtil,
    LocalStorage,
    Logger,
    HeaderComponent,
    Utils
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
