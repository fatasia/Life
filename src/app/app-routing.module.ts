import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


/**pages*/
import {UserinfoComponent} from '../pages/userinfo/userinfo.component';
import {HomeComponent} from '../pages/home/home.component';
import {ShareComponent} from '../pages/share/share.component';
import {MatchlistComponent} from '../pages/matchlist/matchlist.component';
import {MatchComponent} from '../pages/match/match.component';


/** 路由配置*/
const routes: Routes = [
  {path: '', component: HomeComponent},  // 根目录和默认目录
  {path: 'home', component: HomeComponent},  // 首页
  {path: 'user/:id', component: UserinfoComponent}, // 用户信息
  {path: 'share/:id', component: ShareComponent}, // 用户分享
  {path: 'matchlist', component: MatchlistComponent}, // 匹配列表
  {path: 'match/:id', component: MatchComponent}, // 匹配详情


  {path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
