angular.module("mmLandingPages",["ngAnimate","ngCookies","ngTouch","ngSanitize","firebase","ui.router","ngDialog"]).config(["$stateProvider","$urlRouterProvider",function(e,s){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}).state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminCtrl"}),s.otherwise("/")}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("registerinterestCtrl",["$scope","$firebase",function(e,s){var n=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.users=s(n).$asArray(),console.log(e.users),console.log(e.user.datecreated),e.registerSuccess=!1,e.user={},console.log(e.user),e.addUser=function(){console.log(e.user),e.users.$add(e.user),e.registerSuccess=!0}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("feedbackCtrl",["$scope","$firebase",function(e,s){var n=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.users=s(n).$asArray(),console.log(e.users),e.feedbackSuccess=!1,e.user={},console.log(e.user),e.addUser=function(){console.log(e.user),e.users.$add(e.user),e.feedbackSuccess=!0}}]),angular.module("mmLandingPages").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),angular.module("mmLandingPages").controller("MainCtrl",["$scope","$firebase",function(e,s){var n=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.users=s(n).$asArray(),console.log(e.users),e.user={},console.log(e.user),e.addUser=function(){console.log(e.user),e.users.$add(e.user)}}]),angular.module("mmLandingPages").controller("AdminCtrl",["$scope","$firebase",function(e,s){var n=new Firebase("https://resplendent-fire-5403.firebaseio.com/");e.results=s(n).$asArray(),console.log(e.results)}]),angular.module("mmLandingPages").run(["$templateCache",function(e){e.put("app/main/main.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><section class="wrap--banner"><div class="content-inner"><div class="msg"><h1><span class="small">Coming soon</span> Imba Gamer Gold Card <span class="small">The only card for gamers</span></h1><h2>10% Cashback</h2><button type="button" class="btn-primary" ng-dialog="/components/registerinterest/registerinterest.html" ng-dialog-controller="registerinterestCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">Yes, I\'m interested</button> <button type="button" class="btn-primary" ng-dialog="/components/feedback/feedback.html" ng-dialog-controller="feedbackCtrl" ng-dialog-class="ngdialog-theme-default" ng-dialog-show-close="false" ng-dialog-close-previous="">Not interested</button></div></div></section><div ng-include="\'components/works/works.html\'"></div><div ng-include="\'components/benefits/benefits.html\'"></div><div ng-include="\'components/merchants/merchants.html\'"></div><div ng-include="\'components/footer/footer.html\'"></div>'),e.put("app/admin/admin.html",'<div ng-include="\'components/navbar/navbar.html\'"></div><section class="wrap--data"><div class="content-inner"><h1>Registrations</h1><section id="cd-table"><table><thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Mobile</th><th>Interest</th><th>Comments</th></tr></thead><tbody><tr ng-repeat="result in results"><td>{{result.date}}</td><td>{{result.name}}</td><td>{{result.email}}</td><td>{{result.mobile}}</td><td>{{result.interest}}</td><td>{{result.reason}}</td></tr></tbody></table></section></div></section><div ng-include="\'components/footer/footer.html\'"></div>'),e.put("components/feedback/feedback.html",'<div class="ngdialog-header" ng-hide="feedbackSuccess"><h3>Could you please tell us why?</h3></div><div class="ngdialog-message" ng-hide="feedbackSuccess"><form name="feedback" ng-submit="addUser()"><input type="hidden" ng-model="user.date" ng-model-options="{ updateOn: \'addUser\' }" ng-init="\'new Date()\'"> <input type="hidden" ng-model="user.name" ng-model-options="{ updateOn: \'addUser\' }" ng-init="user.name=\'NA\'"> <input type="hidden" ng-model="user.email" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Email"> <input type="hidden" ng-model="user.mobile" ng-model-options="{ updateOn: \'addUser\' }" ng-init="user.mobile=\'NA\'"> <input type="hidden" ng-model="user.interest" ng-model-options="{ updateOn: \'addUser\' }" ng-init="user.interest=\'NO\'"><div class="section-form"><textarea ng-model="user.reasons" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Please enter your message here" autofocus=""></textarea><div class="formMsg-error" ng-show="feedback.reasons.$dirty && feedback.reasons.$invalid">Invalid: <span ng-show="feedback.reasons.$error.required">Kindly enter a reason.</span></div></div><div class="section-form"><button type="submit" class="btn-primary btn-blk">Register</button></div></form></div><div class="ngdialog-success" ng-show="feedbackSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We appreciate your feedback!</p></div>'),e.put("components/navbar/navbar.html",'<nav class="wrap nav"><ul class="content-inner"><li><a href=""><img src="assets/images/brand-logo.png"></a></li></ul></nav>'),e.put("components/registerinterest/registerinterest.html",'<div class="ngdialog-header" ng-hide="registerSuccess"><h3>Provide the following details and we will contact you with any udpates!</h3></div><div class="ngdialog-message" ng-hide="registerSuccess"><form ng-submit="addUser()" name="register"><input type="hidden" ng-model="user.datecreated" ng-model-options="{ updateOn: \'addUser\' }" ng-init="\'new Date()\'"><div class="section-form"><input type="text" ng-model="user.name" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Name" autofocus=""><div class="formMsg-error" ng-show="register.name.$dirty && register.name.$invalid">Invalid: <span ng-show="register.name.$error.required">Kindly enter a Name.</span></div></div><div class="section-form"><input type="email" ng-model="user.email" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Email"><div class="formMsg-error" ng-show="register.email.$dirty && register.email.$invalid">Invalid: <span ng-show="register.email.$error.required">Kindly enter an email address.</span></div></div><div class="section-form"><input type="tel" ng-model="user.mobile" required="" ng-model-options="{ updateOn: \'addUser\' }" placeholder="Mobile"><div class="formMsg-error" ng-show="register.mobile.$dirty && register.mobile.$invalid">Invalid: <span ng-show="register.mobile.$error.required">Kindly enter a mobile no.</span></div></div><input type="hidden" ng-model="user.interest" ng-model-options="{ updateOn: \'addUser\' }" ng-init="user.interest=\'YES\'"> <input type="hidden" ng-model="user.reasons" ng-model-options="{ updateOn: \'addUser\' }" ng-init="user.reasons=\'NA\'"><div class="section-form"><button class="btn-primary btn-blk" type="submit">Register</button></div></form></div><div class="ngdialog-success" ng-show="registerSuccess"><img src="assets/images/success.png"><h3>Thank you!</h3><p>We’ll be in touch once we have any udpates!</p></div>'),e.put("components/benefits/benefits.html",'<section class="wrap--patternbg"><h2>Reward program benefits</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third"><li class="item-box"><img src="assets/images/icon_cashback.png"><h3>10% cashback</h3><p>The only card for gamers in Singapore which allows you to earn cashback</p></li><li class="item-box"><img src="assets/images/icon-game.png"><h3>In-game items</h3><p>Redeem exclusive in-game items (selected games only) with your IMBA$</p></li><li class="item-box"><img src="assets/images/icon-events.png"><h3>Special game events</h3><p>Get exclusive events for MatchMove Wallet users (selected games only)</p></li><li class="item-box"><img src="assets/images/icon-sneakpeek.png"><h3>Exclusive game sneak peaks</h3><p>Get exclusive beta invite for upcoming games</p></li><li class="item-box"><img src="assets/images/icon-annual.png"><h3>Annual fee</h3><p>$0 annual fee</p></li></ul></div></section>'),e.put("components/footer/footer.html",'<footer class="wrap"><ul class="content-inner"><li><a href="">About Us</a></li></ul><p>Copyright &copy; 2014-2015 MatchMove Pte. Ltd.</p></footer>'),e.put("components/works/works.html",'<section class="wrap"><h2>How it works</h2><aside class="seperator"></aside><div class="content-inner--split"><div class="box"><img src="assets/images/cards.png"></div><div class="box--special"><div class="box-header"><h4>Collect 10X IMBA$ when you make a purchase<br>at selected merchants!</h4><p>Every $1 spent = 10IMBA$</p></div><h4>Redeem IMBA$ for cashback worth 10%<br>of your purchase</h4><p>100 IMBA$ = $1 CASHBACK</p></div></div></section>'),e.put("components/merchants/merchants.html",'<section class="wrap"><h2>Reward program benefits</h2><aside class="seperator"></aside><div class="content-inner"><ul class="list-content--third"><li><img src="assets/images/logo-itunes.png" height="40"></li><li><img src="assets/images/logo-google.png" height="40"></li><li><img src="assets/images/logo-xbox.png" height="40"></li><li><img src="assets/images/logo-battlenet.png" height="40"></li><li><img src="assets/images/logo-steam.png" height="40"></li><li><img src="assets/images/logo-steelseries.png" height="40"></li><li><img src="assets/images/logo-ps.png" height="40"></li></ul></div></section>')}]);