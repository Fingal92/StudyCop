import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() {}
  getNavConfigs() {
    return [
      {
        "routerUrl": "/home",
        "navIcon": "all",
        "navText": "最新动态",
        "introTitle": "Router11学习研讨会",
        "intro": "学习学习增长知识，分享分享开拓视野！在这里，每个人都能分享，每个人都能学习，欢迎大家提出需求、发起分亨！"
      },
      {
        "routerUrl": "/profile",
        "navIcon": "fe",
        "navText": "活动简介",
        "introTitle": "活动简介",
        "intro": "关于Router11学习研讨会的活动介绍"
      },
      {
        "routerUrl": "/plans",
        "navIcon": "php",
        "navText": "分享计划",
        "introTitle": "分享计划",
        "intro": "分享计划在一个需求被认领或者有人发起分享时建立"
      },
      {
        "routerUrl": "/needs",
        "navIcon": "java",
        "navText": "需求列表",
        "introTitle": "需求列表",
        "intro": "你可以根据你想学习、想了解的东西，提出自己的需求",
      },
      {
        "routerUrl": "/resource",
        "navIcon": "ios",
        "navText": "学习资源",
        "introTitle": "学习资源",
        "intro": "这里不仅有以往相关培训资料还有大量优质的学习资源和干货",
      },
      {
        "routerUrl": "/about",
        "navIcon": "android",
        "navText": "活动剪影",
        "introTitle": "活动剪影",
        "intro": "我们是努力奋斗好学上进的团队，快来看看我们的风采吧"
      },
      {
        "routerUrl": "/suggest",
        "navIcon": "fe",
        "navText": "发表留言",
        "introTitle": "发表留言",
        "intro": "你可以在这里发表留言，提出自已的意见和建议"
      }
    ];
  }
}
