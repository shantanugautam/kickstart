angular.module("mmLandingPages",["ngAnimate","ngCookies","ngTouch","ngSanitize","firebase","ui.router","ngDialog"]).config(["$stateProvider","$urlRouterProvider",function(e,s){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),s.otherwise("/")}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("registerinterestCtrl",["$scope","$firebase","$location","$timeout","ngDialog",function(e,s,t,n,a){var r="register",i="https://resplendent-fire-5403.firebaseio.com/"+r+"/usersinterested",o=new Firebase(i);e.users=s(o).$asArray(),e.registerSuccess=!1,e.user={},e.addUser=function(){e.user.useragent=navigator.userAgent,e.user.referrer=document.referrer,e.user.domain=window.location.hostname,e.user.timestamp=Firebase.ServerValue.TIMESTAMP,e.users.$add(e.user),e.registerSuccess=!0,window.fb_param={},fb_param.pixel_id="6021874300262",fb_param.value="0.01",fb_param.currency="USD",function(){var e=document.createElement("script");e.async=!0,e.src="//connect.facebook.net/en_US/fp.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s)}(),n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("feedbackCtrl",["$scope","$firebase","$location","$timeout","ngDialog",function(e,s,t,n,a){var r="register",i="https://resplendent-fire-5403.firebaseio.com/"+r+"/usersnotinterested",o=new Firebase(i);e.users=s(o).$asArray(),e.feedbackSuccess=!1,e.user={},e.addUser=function(){e.user.useragent=navigator.userAgent,e.user.referrer=document.referrer,e.user.domain=window.location.hostname,e.user.timestamp=Firebase.ServerValue.TIMESTAMP,e.users.$add(e.user),e.feedbackSuccess=!0,n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("contactCtrl",["$scope","$firebase","$location","$timeout","ngDialog",function(e,s,t,n,a){var r="register",i="https://resplendent-fire-5403.firebaseio.com/"+r+"/correspondence",o=new Firebase(i);e.requests=s(o).$asArray(),e.requestSuccess=!1,e.request={},e.addRequest=function(){e.request.useragent=navigator.userAgent,e.request.referrer=document.referrer,e.request.domain=window.location.hostname,e.request.timestamp=Firebase.ServerValue.TIMESTAMP,e.requests.$add(e.request),e.requestSuccess=!0,n(function(){a.close()},3e3)}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("MainCtrl",["$scope","$firebase",function(e,s){var t=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.users=s(t).$asArray(),e.user={},e.addUser=function(){e.users.$add(e.user)}}]),angular.module("mmLandingPages").controller("LoginCtrl",["$scope","$rootScope","$location","$firebase",function(e,s,t){var n=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.admin={},e.login=function(){n.authWithPassword({email:e.admin.email,password:e.admin.password},function(e){e?alert(e):(console.log(!0),t.path("/admin"))},{remember:"sessionOnly"})}}]),angular.module("mmLandingPages").controller("AdminCtrl",["$scope","$firebase",function(e,s){var t="interest",n="https://resplendent-fire-5403.firebaseio.com/"+t+"/usersinterested",a=new Firebase(n),r="interest",i="https://resplendent-fire-5403.firebaseio.com/"+r+"/usersinterested",o=new Firebase(i);e.usersonInterest=s(a).$asArray(),e.usersonRegister=s(o).$asArray();var l="interest",c="https://resplendent-fire-5403.firebaseio.com/"+l+"/usersnotinterested",d=new Firebase(c),u="register",m="https://resplendent-fire-5403.firebaseio.com/"+u+"/usersnotinterested",g=new Firebase(m);e.usersonInterestNot=s(d).$asArray(),e.usersonRegisterNot=s(g).$asArray(),e.UsersNetNot={},e.usersonInterestNot.$loaded().then(function(){e.UsersNetNot.interest=e.usersonInterestNot.length}),e.usersonRegisterNot.$loaded().then(function(){e.UsersNetNot.register=e.usersonRegisterNot.length});var p="interest",h="https://resplendent-fire-5403.firebaseio.com/"+p+"/correspondence",b=new Firebase(h);e.usersonInterestContact=s(b).$asArray();var f="register",v="https://resplendent-fire-5403.firebaseio.com/"+f+"/correspondence",y=new Firebase(v);e.usersonInterestContact=s(b).$asArray(),e.usersonRegisterContact=s(y).$asArray(),e.UsersNetContact={},e.usersonInterestContact.$loaded().then(function(){e.UsersNetContact.interest=e.usersonInterestContact.length}),e.usersonRegisterContact.$loaded().then(function(){e.UsersNetContact.register=e.usersonRegisterContact.length}),e.UsersNet={},e.usersonInterest.$loaded().then(function(){e.UsersNet.interest=e.usersonInterest.length}),e.usersonRegister.$loaded().then(function(){e.UsersNet.register=e.usersonRegister.length})}]),angular.module("mmLandingPages").run(["$templateCache",function(e){e.put("app/admin/admin.html",'<nav class="wrap nav" ng-include="\'components/navbar/navbar.html\'"></nav><section class="wrap--data"><div class="content-hero"><ul class="stats"><li class="top"><span class="number-large">{{UsersNetNot.interest + UsersNetNot.register}}</span><span>Not Interested</span></li><li class="button-split"><span class="number-medium">{{UsersNetNot.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNetNot.interest}}</span><span>/interest</span></li></ul><ul class="stats"><li class="top"><span class="number-large">{{UsersNet.interest + UsersNet.register}}</span><span>Registered</span></li><li class="button-split"><span class="number-medium">{{UsersNet.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNet.interest}}</span><span>/interest</span></li></ul><ul class="stats"><li class="top"><span class="number-large">{{UsersNetContact.interest + UsersNetContact.register}}</span><span>Contact Enquiries</span></li><li class="button-split"><span class="number-medium">{{UsersNetContact.register}}</span><span>/register</span></li><li class="button-split"><span class="number-medium">{{UsersNetContact.interest}}</span><span>/interest</span></li></ul></div><div class="content-inner"><section id="cd-table"><table><thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Mobile</th><th>Referrer</th><th>Domain</th><th>User Agent</th></tr></thead><tbody><tr ng-repeat="result in usersonInterest"><td>{{result.timestamp | date:\'yyyy-MM-dd HH:mm:ss\'}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.mobile}}</td><td>{{result.referrer}}</td><td>{{result.domain}}</td><td>{{result.useragent}}</td></tr></tbody></table></section></div></section><footer class="wrap" ng-include="\'components/footer/footer.html\'"></footer>'),e.put("app/login/login.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><section class="wrap--data"><div class="content-inner"><h1>Registrations</h1><section id="cd-table"><form ng-submit="login()" name="formLogin"><input type="email" ng-model="admin.email" ng-model-options="{ updateOn: \'login\' }"> <input type="password" ng-model="admin.password" ng-model-options="{ updateOn: \'login\' }"> <button>Login</button></form></section></div></section><div ng-include="\'components/footer/footer.html\'"></div>'),e.put("app/main/main.html",'<nav class="wrap nav" ng-include="\'components/navbar/navbar.html\'"></nav><section class="wrap--banner"><div class="content-inner"><h1 class="utility-image__replace">Imba Game Gold Card</h1><h3 class="">10% Cashback &amp; exclusive<br>in game items!</h3><button type="button" class="btn-primary" ng-dialog="components/registerinterest/registerinterest.html" ng-dialog-controller="registerinterestCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">I\'m interested</button> <button type="button" class="btn-secondary" ng-dialog="components/feedback/feedback.html" ng-dialog-controller="feedbackCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">Not interested</button></div></section><section class="wrap" ng-include="\'components/works/works.html\'"></section><section class="wrap--patternbg" ng-include="\'components/benefits/benefits.html\'"></section><section class="wrap" ng-include="\'components/merchants/merchants.html\'"></section><footer class="wrap" ng-include="\'components/footer/footer.html\'"></footer>'),e.put("components/benefits/benefits.html",'<section class="wrap--patternbg"><h2>IMBA Card benefits</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third"><li class="item-box"><img src="assets/images/icon_cash.png"><h3>10% cashback</h3><p>The only card for gamers in Singapore which allows you to earn cashback</p></li><li class="item-box"><img src="assets/images/icon-star.png"><h3>In-game items</h3><p>Redeem exclusive in-game items (selected games only) with your IMBA$</p></li><li class="item-box"><img src="assets/images/icon-game.png"><h3>Special game events</h3><p>Get exclusive events for MatchMove Wallet users (selected games only)</p></li><li class="item-box"><img src="assets/images/icon-exclusive.png"><h3>Exclusive game sneak peaks</h3><p>Get exclusive beta invite for upcoming games</p></li><li class="item-box"><img src="assets/images/icon-no.png"><h3>Annual fee</h3><p>$0 annual fee</p></li></ul></div></section>'),e.put("components/contact/contact.html",'<div class="ngdialog-header" ng-hide="registerSuccess"><h3>Contact us</h3></div><div class="ngdialog-message" ng-hide="requestSuccess"><form ng-submit="addRequest()" name="request"><div class="section-form"><input type="text" ng-model="request.name" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Name" autofocus=""><div class="formMsg-error" ng-show="register.name.$dirty && register.name.$invalid">Invalid: <span ng-show="register.name.$error.required">Kindly enter a Name.</span></div></div><div class="section-form"><input type="email" ng-model="request.email" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Email"><div class="formMsg-error" ng-show="register.email.$dirty && register.email.$invalid">Invalid: <span ng-show="register.email.$error.required">Kindly enter an email address.</span></div></div><div class="section-form"><textarea ng-model="request.message" required="" ng-model-options="{ updateOn: \'addRequest\' }" placeholder="Mobile">\n                <div class="formMsg-error" ng-show="request.message.$dirty && request.message.$invalid">Invalid:\n                  <span ng-show="request.message.$error.required">Kindly enter a mobile no.</span>\n                </div>\n        </textarea></div><div class="section-form"><button class="btn-primary btn-blk" type="submit">Submit</button></div></form></div><div class="ngdialog-success" ng-show="requestSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We’ll respond to your queries soon.</p></div>'),e.put("components/feedback/feedback.html",'<div class="ngdialog-header" ng-hide="feedbackSuccess"><h3><span style="display:inline-block;vertical-align:middle;">Could you please tell us why?</span><img style="display:inline-block;vertical-align:middle;margin-top:-5px;" height="30" src="assets/images/sadface.png"></h3></div><div class="ngdialog-message" ng-hide="feedbackSuccess"><form name="feedback" ng-submit="addUser()"><div class="section-form"><label for="not_interested" class="radio-holder"><input id="not_interested" type="radio" name="reason" value="Not Interseted at all" ng-model="user.reasons"><p>Not Interseted at all</p></label> <label for="poor_benefits" class="radio-holder"><input id="poor_benefits" type="radio" name="reason" value="The benefits don\'t attract me" ng-model="user.reasons"><p>The benefits don\'t attract me.</p></label> <label for="other" class="radio-holder"><input id="other" type="radio" name="reason" value="Others (Please specify)" ng-model="user.reasons"><p>Others (Please specify)</p></label></div><div class="section-form"><textarea ng-model="user.reasons.other" placeholder="Please enter your message here" autofocus=""></textarea><div class="formMsg-error" ng-show="feedback.reasons.$dirty && feedback.reasons.$invalid">Invalid: <span ng-show="feedback.reasons.$error.required">Kindly enter a reason.</span></div></div><div class="section-form"><button type="submit" class="btn-primary btn-blk">Register</button></div></form></div><div class="ngdialog-success" ng-show="feedbackSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We appreciate your feedback!</p></div>'),e.put("components/footer/footer.html",'<ul class="content-inner"><li><a href="http://mmvpay.com" target="_blank">About Us</a></li></ul><p>Copyright &copy; 2014-2015 MatchMove Pte. Ltd.</p>'),e.put("components/merchants/merchants.html",'<h2>Selected merchants</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third content-inner--background"><li><img src="assets/images/logo-itunes.png" height="40"></li><li><img src="assets/images/logo-google.png" height="40"></li><li><img src="assets/images/logo-xbox.png" height="40"></li><li><img src="assets/images/logo-battlenet.png" height="40"></li><li><img src="assets/images/logo-steam.png" height="40"></li><li><img src="assets/images/logo-steelseries.png" height="40"></li><li><img src="assets/images/logo-ps.png" height="40"></li></ul></div><h2><a ng-dialog="components/contact/contact.html" ng-dialog-controller="contactCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="" style="color:#fff;cursor:pointer">Ask a Question about the IMBA Card!</a></h2>'),e.put("components/navbar/navbar.html",'<ul class="content-inner"><li><a href=""><img src="assets/images/brand-logo.png"></a></li></ul>'),e.put("components/registerinterest/registerinterest.html",'<div class="ngdialog-header" ng-hide="registerSuccess"><h3>Please provide us with the following for updates when we launch!</h3></div><div class="ngdialog-message" ng-hide="registerSuccess"><form ng-submit="addUser()" name="register"><div class="section-form"><input type="text" ng-model="user.name" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Name" autofocus=""></div><div class="section-form"><input type="email" ng-model="user.email" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Email"></div><div class="section-form"><input type="number" ng-model="user.age" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Age"></div><div class="section-form"><input type="tel" ng-model="user.mobile" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Mobile"></div><div class="section-form"><button class="btn-primary btn-blk" type="submit">Register</button></div></form></div><div class="ngdialog-success" ng-show="registerSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We will contact you when we have more updates</p></div>'),e.put("components/works/works.html",'<h2>How it works</h2><aside class="seperator"></aside><div class="content-inner--split"><div class="box"><img src="assets/images/cards.png"></div><div class="box--content"><div class="box-header"><h4>Collect 10X IMBA$ when you make a purchase<br>at selected merchants!</h4><p>Every $1 spent = 10 IMBA$</p></div><h4>Redeem IMBA$ for cashback worth 10%<br>of your purchase</h4><p>100 IMBA$ = $1 CASHBACK</p></div></div>')}]);