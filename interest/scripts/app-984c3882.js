"use strict";angular.module("mmLandingPages",["ngAnimate","ngCookies","ngTouch","ngSanitize","firebase","ui.router","ngDialog"]).constant("FIREBASE_URL","https://torrid-heat-4778.firebaseio.com/").constant("BASE_SUBDOMAIN","interest").constant("FB_CONVID","6021874300262").config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("login",{url:"/login",templateUrl:"app/login/login.html",controller:"LoginCtrl",resolve:{currentAuth:["Auth",function(e){return e.$waitForAuth()}]}}).state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminCtrl",resolve:{currentAuth:["Auth",function(e){return e.$requireAuth()}]}}),t.otherwise("/")}]).run(["$rootScope","$location","$state",function(e,t,s){e.$on("$stateChangeError",function(e,t,n,a,i,r){"AUTH_REQUIRED"===r&&s.go("login")})}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("registerinterestCtrl",["$scope","$firebase","$location","$timeout","ngDialog","FIREBASE_URL","BASE_SUBDOMAIN","FB_CONVID",function(e,t,s,n,a,i,r,o){var l=new Firebase(i+r+"/usersinterested");e.users=t(l).$asArray(),e.registerSuccess=!1,e.user={},e.addUser=function(){e.user.useragent=navigator.userAgent,e.user.referrer=document.referrer,e.user.domain=window.location.hostname,e.user.timestamp=Firebase.ServerValue.TIMESTAMP,e.users.$add(e.user),e.registerSuccess=!0,window.fb_param={},fb_param.pixel_id=o,fb_param.value="0.01",fb_param.currency="USD",function(){var e=document.createElement("script");e.async=!0,e.src="//connect.facebook.net/en_US/fp.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("feedbackCtrl",["$scope","$firebase","$location","$timeout","ngDialog","FIREBASE_URL","BASE_SUBDOMAIN",function(e,t,s,n,a,i,r){var o=new Firebase(i+r+"/usersnotinterested");e.users=t(o).$asArray(),e.feedbackSuccess=!1,e.user={},e.addUser=function(){e.user.useragent=navigator.userAgent,e.user.referrer=document.referrer,e.user.domain=window.location.hostname,e.user.timestamp=Firebase.ServerValue.TIMESTAMP,e.users.$add(e.user),e.feedbackSuccess=!0,n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("contactCtrl",["$scope","$firebase","$location","$timeout","ngDialog","FIREBASE_URL","BASE_SUBDOMAIN",function(e,t,s,n,a,i,r){var o=new Firebase(i+r+"/correspondence");e.requests=t(o).$asArray(),e.requestSuccess=!1,e.request={},e.addRequest=function(){e.request.useragent=navigator.userAgent,e.request.referrer=document.referrer,e.request.domain=window.location.hostname,e.request.timestamp=Firebase.ServerValue.TIMESTAMP,e.requests.$add(e.request),e.requestSuccess=!0,n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("MainCtrl",["$scope","$firebase",function(e,t){var s=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.users=t(s).$asArray(),e.user={},e.addUser=function(){e.users.$add(e.user)}}]),angular.module("mmLandingPages").factory("Auth",["$firebaseAuth","FIREBASE_URL",function(e,t){var s=new Firebase(t);return e(s)}]),angular.module("mmLandingPages").controller("LoginCtrl",["$scope","$state","$firebase","$firebaseAuth","$window","currentAuth","FIREBASE_URL",function(e,t,s,n,a,i,r){var o=new Firebase(r);e.admin={},e.loginObj=n(),e.login=function(){o.authWithPassword({email:e.admin.email,password:e.admin.password},function(s){s?e.errorormessage=s:t.go("admin")},{remember:"sessionOnly"})}}]),angular.module("mmLandingPages").factory("usersFactory",["$firebase","FIREBASE_URL",function(e,t){return{getInterestedUserBySubdomain:function(s){return e(new Firebase(t+"/"+s+"/usersinterested"))},getNotInterestedUserBySubdomain:function(s){return e(new Firebase(t+"/"+s+"/usersnotinterested"))},getQueriesUserBySubdomain:function(s){return e(new Firebase(t+"/"+s+"/correspondence"))}}}]),angular.module("mmLandingPages").controller("AdminCtrl",["$scope","$firebase","usersFactory","currentAuth",function(e,t,s){e.tab,e.usersonInterest=s.getInterestedUserBySubdomain("interest").$asArray(),e.usersonRegister=s.getInterestedUserBySubdomain("register").$asArray(),e.usersonInterestNot=s.getNotInterestedUserBySubdomain("interest").$asArray(),e.usersonRegisterNot=s.getNotInterestedUserBySubdomain("register").$asArray(),e.usersonInterestContact=s.getQueriesUserBySubdomain("interest").$asArray(),e.usersonRegisterContact=s.getQueriesUserBySubdomain("register").$asArray(),e.UsersNetNot={},e.usersonInterestNot.$loaded().then(function(){e.UsersNetNot.interest=e.usersonInterestNot.length}),e.usersonRegisterNot.$loaded().then(function(){e.UsersNetNot.register=e.usersonRegisterNot.length}),e.UsersNetContact={},e.usersonInterestContact.$loaded().then(function(){e.UsersNetContact.interest=e.usersonInterestContact.length}),e.usersonRegisterContact.$loaded().then(function(){e.UsersNetContact.register=e.usersonRegisterContact.length}),e.UsersNet={},e.usersonInterest.$loaded().then(function(){e.UsersNet.interest=e.usersonInterest.length}),e.usersonRegister.$loaded().then(function(){e.UsersNet.register=e.usersonRegister.length}),e.pageTodisplay=10,e.currentPage=1,e.filteredTodos=[]}]),angular.module("mmLandingPages").run(["$templateCache",function(e){e.put("app/admin/admin.html",'<nav class="wrap nav" ng-include="\'components/navbar/navbar.html\'"></nav><section class="wrap--data"><div class="content-hero"><ul class="stats" ng-click="tab = 1" ng-class="{active:tab===1}"><li class="top"><span class="number-large">{{UsersNetNot.interest + UsersNetNot.register}}</span><span>Not Interested</span></li><li class="button-split"><span class="number-medium">{{UsersNetNot.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNetNot.interest}}</span><span>/interest</span></li></ul><ul class="stats" ng-click="tab = 2" ng-class="{active:tab===2}"><li class="top"><span class="number-large">{{UsersNet.interest + UsersNet.register}}</span><span>Interested</span></li><li class="button-split"><span class="number-medium">{{UsersNet.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNet.interest}}</span><span>/interest</span></li></ul><ul class="stats" ng-click="tab = 3" ng-class="{active:tab===3}"><li class="top"><span class="number-large">{{UsersNetContact.interest + UsersNetContact.register}}</span><span>Contact Enquiries</span></li><li class="button-split"><span class="number-medium">{{UsersNetContact.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNetContact.interest}}</span><span>/interest</span></li></ul></div><div class="content-inner"><section class="table"><div class="tabs" ng-show="tab === 1" ng-init="tabsub1 = 11"><ul class="tabs--links"><li ng-class="{active:tabsub1===12}"><a ng-click="tabsub1 = 12">/Register</a></li><li ng-class="{active:tabsub1===11}"><a ng-click="tabsub1 = 11">/Interest</a></li></ul><ul class="tabs--content"><li ng-show="tabsub1 === 11"><div class="section-table--forms"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNetNot.interest}}</div></div><table><thead><tr><th>Date</th><th>Domain</th><th>Reasons</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonInterestNot | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.reasons}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li><li ng-show="tabsub1 === 12"><div class="section-table--forms"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNetNot.register}}</div></div><table><thead><tr><th>Date</th><th>Domain</th><th>Reasons</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonRegisterNot | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.reasons}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li></ul></div><div class="tabs" ng-show="tab === 2" ng-init="tabsub2 = 21"><ul class="tabs--links"><li ng-class="{active:tabsub2===22}"><a ng-click="tabsub2 = 22">/Register</a></li><li ng-class="{active:tabsub2===21}"><a ng-click="tabsub2 = 21">/Interest</a></li></ul><ul class="tabs--content"><li ng-show="tabsub2 === 21"><div class="section-table--forms"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Search Email only <input ng-model="search.email"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNet.interest}}</div></div><table><thead><tr><th>Date</th><th>Domain</th><th>Name</th><th>Email</th><th>Age</th><th>Mobile</th><th>Country</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonInterest | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.age}}</td><td>{{result.mobile}}</td><td>{{result.country}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li><li ng-show="tabsub2 === 22"><div class="section-table--forms"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Search Email only <input ng-model="search.email"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNet.register}}</div></div><table><thead><tr><th>Date</th><th>Domain</th><th>Name</th><th>Email</th><th>Age</th><th>Mobile</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonRegister | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.age}}</td><td>{{result.mobile}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li></ul></div><div class="tabs" ng-show="tab === 3" ng-init="tabsub3 = 31"><ul class="tabs--links"><li ng-class="{active:tabsub3===32}"><a ng-click="tabsub3 = 32">/Register</a></li><li ng-class="{active:tabsub3===31}"><a ng-click="tabsub3 = 31">/Interest</a></li></ul><ul class="tabs--content"><li ng-show="tabsub3 === 31"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Search Email only <input ng-model="search.email"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNetContact.interest}}</div><table><thead><tr><th>Date</th><th>Domain</th><th>Name</th><th>Email</th><th>Message</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonInterestContact | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.message}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li><li ng-show="tabsub3 === 32"><div class="section-form section-inline">Search Any Field: <input ng-model="search.$"></div><div class="section-form section-inline">Search Email only <input ng-model="search.email"></div><div class="section-form section-inline">Displaying <input type="number" value="10" ng-model="pageTodisplay" ng-init="10"> items out of {{UsersNetContact.interest}}</div><table><thead><tr><th>Date</th><th>Domain</th><th>Name</th><th>Email</th><th>Message</th><th>Referrer</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonRegisterContact | filter:search | limitTo:pageTodisplay"><td class="field-time">{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.domain}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.message}}</td><td class="field-referrer">{{result.referrer}}</td><td class="field-useragent">{{result.useragent}}</td></tr></tbody></table><a ng-click="goback">Prev</a> <a ng-click="gonext">Next</a></li></ul></div></section></div></section>'),e.put("app/login/login.html",'<nav class="wrap nav" ng-include="\'components/navbar/navbar.html\'"></nav><section class="wrap--data"><div class="content-hero"><h1>Login To admin Panel</h1></div><div class="content-inner"><section id="cd-table"><form ng-submit="login()" name="formLogin" class="form-admin">{{$scope.errorormessage}}<div class="section-form"><input type="email" ng-model="admin.email" placeholder="email" required="" ng-model-options="{ updateOn: \'login\' }"></div><div class="section-form"><input type="password" ng-model="admin.password" placeholder="password" required="" ng-model-options="{ updateOn: \'login\' }"></div><div class="section-form"><button class="btn-primary">Login</button></div></form></section></div></section>'),e.put("app/main/main.html",'<nav class="wrap nav" ng-include="\'components/navbar/navbar.html\'"></nav><section class="wrap--banner"><div class="content-inner"><div class="msg"><h1><span class="small">Coming soon</span> Imba Gamer Gold Card <span class="small">The only card for gamers</span></h1><h2>10% Cashback &amp; exclusive<br>in-game items</h2><button type="button" class="btn-primary" ng-dialog="components/registerinterest/registerinterest.html" ng-dialog-controller="registerinterestCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">I\'m interested</button> <button type="button" class="btn-secondary" ng-dialog="components/feedback/feedback.html" ng-dialog-controller="feedbackCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">Not interested</button></div></div></section><section class="wrap" ng-include="\'components/works/works.html\'"></section><section class="wrap" ng-include="\'components/benefits/benefits.html\'"></section><section class="wrap" ng-include="\'components/merchants/merchants.html\'"></section><footer class="wrap" ng-include="\'components/footer/footer.html\'"></footer>'),e.put("components/benefits/benefits.html",'<section class="wrap--patternbg"><h2>IMBA CARD BENEFITS</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third"><li class="item-box"><img src="assets/images/icon_cashback.png"><h3>10% cashback</h3><p>The only card for gamers in Singapore which allows you to earn cashback</p></li><li class="item-box"><img src="assets/images/icon-game.png"><h3>In-game items</h3><p>Redeem exclusive in-game items (selected games only) with your IMBA$</p></li><li class="item-box"><img src="assets/images/icon-events.png"><h3>Special game events</h3><p>Get exclusive events for MatchMove Wallet users (selected games only)</p></li><li class="item-box"><img src="assets/images/icon-sneakpeek.png"><h3>Exclusive game sneak peaks</h3><p>Get exclusive beta invite for upcoming games</p></li><li class="item-box"><img src="assets/images/icon-annual.png"><h3>Annual fee</h3><p>$0 annual fee</p></li></ul></div></section>'),e.put("components/contact/contact.html",'<div class="ngdialog-header" ng-hide="registerSuccess"><h3>Contact us</h3></div><div class="ngdialog-message" ng-hide="requestSuccess"><form ng-submit="addRequest()" name="request"><div class="section-form"><input type="text" ng-model="request.name" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Name" autofocus=""><div class="formMsg-error" ng-show="register.name.$dirty && register.name.$invalid">Invalid: <span ng-show="register.name.$error.required">Kindly enter a Name.</span></div></div><div class="section-form"><input type="email" ng-model="request.email" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Email"><div class="formMsg-error" ng-show="register.email.$dirty && register.email.$invalid">Invalid: <span ng-show="register.email.$error.required">Kindly enter an email address.</span></div></div><div class="section-form"><textarea ng-model="request.message" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Enter Message">\n                <div class="formMsg-error" ng-show="request.message.$dirty && request.message.$invalid">Invalid:\n                  <span ng-show="request.message.$error.required">Kindly enter a mobile no.</span>\n                </div>\n        </textarea></div><div class="section-form"><button class="btn-primary btn-blk" type="submit">Submit</button></div></form></div><div class="ngdialog-success" ng-show="requestSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We’ll respond to your queries soon.</p></div>'),e.put("components/feedback/feedback.html",'<div class="ngdialog-header" ng-hide="feedbackSuccess"><h3><span style="display:inline-block;vertical-align:middle;">Could you please tell us why?</span><img style="display:inline-block;vertical-align:middle;margin-top:-5px;" height="30" src="assets/images/sadface.png"></h3></div><div class="ngdialog-message" ng-hide="feedbackSuccess"><form name="feedback" ng-submit="addUser()"><div class="section-form"><label for="not_interested" class="radio-holder"><input id="not_interested" type="radio" name="reason" value="Not Interseted at all" ng-model="user.reasons"><p>Not Interseted at all</p></label> <label for="poor_benefits" class="radio-holder"><input id="poor_benefits" type="radio" name="reason" value="The benefits don\'t attract me" ng-model="user.reasons"><p>The benefits don\'t attract me.</p></label> <label for="other" class="radio-holder"><input id="other" type="radio" name="reason" value="Others (Please specify)" ng-model="reasonother"><p>Others (Please specify)</p></label></div><div class="section-form" ng-show="reasonother ==\'Others (Please specify)\'"><textarea ng-model="user.reasons" placeholder="Please enter your message here" autofocus=""></textarea></div><div class="section-form"><button type="submit" class="btn-primary btn-blk">Submit</button></div></form></div><div class="ngdialog-success" ng-show="feedbackSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We appreciate your feedback!</p></div>'),e.put("components/footer/footer.html",'<ul class="content-inner"><li><a href="http://mmvpay.com" target="_blank">About Us</a></li></ul><p>Copyright &copy; 2014-2015 MatchMove Pte. Ltd.</p><p>By signing up you allow MatchMove Pte. Ltd. to contact you on the information provided.</p>'),e.put("components/merchants/merchants.html",'<h2>Selected Merchants</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third"><li><img src="assets/images/logo-itunes.png" height="40"></li><li><img src="assets/images/logo-google.png" height="40"></li><li><img src="assets/images/logo-xbox.png" height="40"></li><li><img src="assets/images/logo-battlenet.png" height="40"></li><li><img src="assets/images/logo-steam.png" height="40"></li><li><img src="assets/images/logo-steelseries.png" height="40"></li><li><img src="assets/images/logo-ps.png" height="40"></li></ul></div><h2><a ng-dialog="components/contact/contact.html" ng-dialog-controller="contactCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="" style="color:rgb(51, 51, 51);cursor:pointer">Ask a Question about the IMBA Card!</a></h2>'),e.put("components/navbar/navbar.html",'<ul class="content-inner"><li><a href=""><img src="assets/images/brand-logo.png"></a></li></ul>'),e.put("components/registerinterest/registerinterest.html",'<div class="ngdialog-header" ng-hide="registerSuccess"><h3>Provide the following details and we will contact you with any udpates!</h3></div><div class="ngdialog-message" ng-hide="registerSuccess"><form ng-submit="addUser()" name="register"><div class="section-form"><input type="text" ng-model="user.name" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Name" autofocus=""></div><div class="section-form"><input type="email" ng-model="user.email" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Email"></div><div class="section-form"><input type="number" ng-model="user.age" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Age"></div><div class="section-form"><input type="tel" ng-model="user.mobile" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Mobile"></div><div class="section-form"><select ng-model="user.country" required="" ng-init="user.country = \'singapore\'" ng-model-options="{ updateOn: \'addUser\' }"><option value="singapore" selected="">Singapore</option><option value="phillipines">Phillipines</option><option value="others">Others</option></select></div><div class="section-form"><button class="btn-primary btn-blk" type="submit">Submit</button></div></form></div><div class="ngdialog-success" ng-show="registerSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We’ll be in touch once we have any udpates!</p><script>(function() {\n      var _fbq = window._fbq || (window._fbq = []);\n      if (!_fbq.loaded) {\n        var fbds = document.createElement(\'script\');\n        fbds.async = true;\n        fbds.src = \'//connect.facebook.net/en_US/fbds.js\';\n        var s = document.getElementsByTagName(\'script\')[0];\n        s.parentNode.insertBefore(fbds, s);\n        _fbq.loaded = true;\n      }\n    })();\n    window._fbq = window._fbq || [];\n\n    </script><noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?ev=6021874300262&amp;cd[value]=0.01&amp;cd[currency]=USD&amp;noscript=1"></noscript></div>'),e.put("components/works/works.html",'<h2>How it works</h2><aside class="seperator"></aside><div class="content-inner--split"><div class="box"><img src="assets/images/cards.png"></div><div class="box"><div class="box--special"><div class="box-header"><h4>Collect 10X IMBA$ when you make a purchase<br>at selected merchants!</h4><p>Every $1 spent = 10 IMBA$</p></div><h4>Redeem IMBA$ for cashback worth 10%<br>of your purchase</h4><p>100 IMBA$ = $1 CASHBACK</p></div></div></div>')}]);