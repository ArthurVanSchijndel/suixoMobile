define("amber-suixomobile/Suixomobile", ["amber/boot", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Suixomobile');
smalltalk.packages["Suixomobile"].transport = {"type":"amd","amdNamespace":"amber-suixomobile"};

smalltalk.addClass('Suixomobile', globals.Widget, [], 'Suixomobile');
smalltalk.addMethod(
smalltalk.method({
selector: "initVisibilityElms",
protocol: 'utils',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._asJQuery())._on_do_("resize",(function(){
var viewport;
return smalltalk.withContext(function($ctx2) {
return self._responsiveSettings();
}, function($ctx2) {$ctx2.fillBlock({viewport:viewport},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initVisibilityElms",{},globals.Suixomobile)})},
args: [],
source: "initVisibilityElms\x0a  window asJQuery on:'resize' do:[|viewport|\x0a   self responsiveSettings.\x0a    ]",
messageSends: ["on:do:", "asJQuery", "responsiveSettings"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBodyScriptsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1="#toggle-content"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._on_bind_("click",(function(e){
var content;
return smalltalk.withContext(function($ctx2) {
_st(e)._preventDefault();
$ctx2.sendIdx["preventDefault"]=1;
content="#content"._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
content;
return _st(content)._toggleClass_("content-lg");
$ctx2.sendIdx["toggleClass:"]=1;
}, function($ctx2) {$ctx2.fillBlock({e:e,content:content},$ctx1,1)})}));
$ctx1.sendIdx["on:bind:"]=1;
$2="#toggle-aside"._asJQuery();
$ctx1.sendIdx["asJQuery"]=3;
_st($2)._on_bind_("click",(function(e){
return smalltalk.withContext(function($ctx2) {
_st(e)._preventDefault();
$3="#content-main"._asJQuery();
$ctx2.sendIdx["asJQuery"]=4;
_st($3)._toggleClass_("content-main-md");
$ctx2.sendIdx["toggleClass:"]=2;
return _st("#content-aside"._asJQuery())._toggleClass_("open");
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)})}));
self._responsiveSettings();
self._initVisibilityElms();
return self}, function($ctx1) {$ctx1.fill(self,"renderBodyScriptsOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderBodyScriptsOn: html\x0a \x22html script src: 'assets/app/js/dependencies.js'\x22\x0a \x22html script src: 'assets/app/js/main.min.js'.\x22\x0a \x22jQuery getScript: 'assets/app/js/main.js'.\x22\x0a  \x0a   ( '#toggle-content' asJQuery)\x0a  \x09on:'click' bind:[:e | |content|\x0a\x09 e preventDefault.\x0a     content := '#content' asJQuery.\x0a\x09 content toggleClass: 'content-lg'.\x0a   ].\x0a   \x0a   ('#toggle-aside' asJQuery)\x0a     on: 'click' bind:[:e| \x0a     e preventDefault.\x0a\x09 ('#content-main' asJQuery) toggleClass: 'content-main-md'.\x0a\x09 ('#content-aside' asJQuery) toggleClass: 'open'.\x0a\x0a    ].\x0a    self responsiveSettings. \x0a\x09self initVisibilityElms. \x0a\x09 \x22Bootstrap manual \x22\x0a   \x09\x22('[data-toggle= _tooltip_]' asJQuery) tooltip. \x22\x0a\x09\x22('[data-toggle= _popover_]' asJQuery) popover.\x22\x0a\x0a    \x22extend verge (viewport reader, docs: https://github.com/ryanve/verge) to jquery\x22\x0a \x09\x22jQuery extend: verge .\x22\x0a \x09\x0a   \x0a  ",
messageSends: ["on:bind:", "asJQuery", "preventDefault", "toggleClass:", "responsiveSettings", "initVisibilityElms"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentHeaderAlertsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$6,$8,$9,$10,$12,$14,$15,$13,$11,$7,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("btn-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($3)._id_("notif-alerts");
_st($3)._class_("btn btn-icon hide-sm dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
_st($3)._role_("button");
$ctx2.sendIdx["role:"]=1;
_st($3)._datatoggle_("dropdown");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._i();
$ctx3.sendIdx["i"]=1;
return _st($5)._class_("icon ion-alert-circled");
$ctx3.sendIdx["class:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$6=_st(html)._ul();
_st($6)._class_("dropdown-menu dropdown-extend pull-right");
$ctx2.sendIdx["class:"]=4;
_st($6)._role_("menu");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$8=_st(html)._li();
$ctx3.sendIdx["li"]=1;
_st($8)._class_("dropdown-header");
$ctx3.sendIdx["class:"]=5;
$9=_st($8)._with_("Notifications");
$ctx3.sendIdx["with:"]=4;
$9;
$10=_st(html)._li();
_st($10)._class_("notif-minimal");
$ctx3.sendIdx["class:"]=6;
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$12=_st(html)._a();
_st($12)._class_("notif-item");
$ctx4.sendIdx["class:"]=7;
_st($12)._href_("");
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$14=_st(html)._div();
_st($14)._class_("notif-ico bg-danger");
$ctx5.sendIdx["class:"]=8;
$15=_st($14)._with_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(_st(html)._i())._class_("icon ion-ios7-heart-outline");
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,6)})}));
return $15;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=6;
return $13;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=5;
return $11;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=3;
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentHeaderAlertsOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentHeaderAlertsOn: html\x0a \x22alerts \x22\x09 \x0a  html div class:'btn-group'; with:[\x0a       \x09html a id:'notif-alerts';\x0a\x09\x09\x09class:'btn btn-icon hide-sm dropdown-toggle';\x0a\x09\x09\x09role: 'button';\x0a\x09\x09\x09datatoggle: 'dropdown';\x0a\x09\x09\x09with:\x0a\x09\x09\x09 [html i class: 'icon ion-alert-circled'].\x0a\x0a  \x09\x09html ul class: 'dropdown-menu dropdown-extend pull-right'; role: 'menu'; with:[\x0a\x09\x09\x09html li class: 'dropdown-header'; with: 'Notifications'.\x09\x09\x09\x0a\x09\x09\x09html li class: 'notif-minimal'; with: [\x0a\x09\x09\x09\x09html a class:'notif-item'; href:''; with: [\x0a\x09\x09\x09\x09\x09html div class: 'notif-ico bg-danger'; with:[\x0a\x09\x09\x09\x09\x09\x09html i class:'icon ion-ios7-heart-outline'\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09]\x0a\x09     ] \x0a   ]\x0a\x0a   ",
messageSends: ["class:", "div", "with:", "id:", "a", "role:", "datatoggle:", "i", "ul", "li", "href:"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentHeaderMessagesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$4,$8,$10,$11,$12,$14,$16,$17,$15,$13,$9,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("btn-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
$ctx2.sendIdx["a"]=1;
_st($3)._id_("notif-messages");
_st($3)._role_("menu");
$ctx2.sendIdx["role:"]=1;
_st($3)._datatoggle_("dropdown");
_st($3)._class_("btn btn-icon hide-sm dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._i();
$ctx3.sendIdx["i"]=1;
_st($5)._class_("icon ion-chatboxes");
$ctx3.sendIdx["class:"]=3;
$6=_st(html)._span();
_st($6)._class_("badge");
$ctx3.sendIdx["class:"]=4;
$7=_st($6)._with_("3");
$ctx3.sendIdx["with:"]=3;
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$8=_st(html)._ul();
_st($8)._class_("dropdown-menu dropdown-extend pull-right");
$ctx2.sendIdx["class:"]=5;
_st($8)._role_("menu");
$9=_st($8)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$10=_st(html)._li();
$ctx3.sendIdx["li"]=1;
_st($10)._class_("dropdown-header");
$ctx3.sendIdx["class:"]=6;
$11=_st($10)._with_("Notifications");
$ctx3.sendIdx["with:"]=5;
$11;
$12=_st(html)._li();
_st($12)._class_("notif-minimal");
$ctx3.sendIdx["class:"]=7;
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$14=_st(html)._a();
_st($14)._class_("notif-item");
$ctx4.sendIdx["class:"]=8;
_st($14)._href_("#");
$15=_st($14)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$16=_st(html)._div();
_st($16)._class_("notif-ico bg-danger");
$ctx5.sendIdx["class:"]=9;
$17=_st($16)._with_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(_st(html)._i())._class_("icon ion-ios7-heart-outline");
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,6)})}));
return $17;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=7;
return $15;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=6;
return $13;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
return $9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentHeaderMessagesOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentHeaderMessagesOn: html\x0a \x22 messages\x22 \x0a html div class:'btn-group'; with:[\x0a       \x09html a id:'notif-messages'; \x0a\x09\x09\x09role: 'menu';\x0a\x09\x09\x09datatoggle: 'dropdown';\x0a\x09\x09\x09class:'btn btn-icon hide-sm dropdown-toggle';\x0a\x09\x09\x09with:\x0a\x09\x09\x09 [html i class: 'icon ion-chatboxes'.\x0a\x09\x09\x09  html span class:'badge'; with: '3'. \x0a\x09          ].\x0a\x0a  \x09\x09html ul class: 'dropdown-menu dropdown-extend pull-right'; role: 'menu'; with:[\x0a\x09\x09\x09html li class: 'dropdown-header'; with: 'Notifications'.\x09\x09\x09\x0a\x09\x09\x09html li class: 'notif-minimal'; with: [\x0a\x09\x09\x09\x09html a class:'notif-item'; href:'#'; with: [\x0a\x09\x09\x09\x09\x09html div class: 'notif-ico bg-danger'; with:[\x0a\x09\x09\x09\x09\x09\x09html i class:'icon ion-ios7-heart-outline'\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09]\x0a\x09     ] \x0a  ]\x0a\x0a   ",
messageSends: ["class:", "div", "with:", "id:", "a", "role:", "datatoggle:", "i", "span", "ul", "li", "href:"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentHeaderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$9,$8,$10,$11,$6,$12,$13,$2;
$1=_st(html)._header();
_st($1)._class_("content-header");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($3)._class_("header-actions pull-right");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderContentHeaderAlertsOn_(html);
self._renderContentHeaderMessagesOn_(html);
self._renderContentHeaderUsersettingsOn_(html);
return self._renderContentHeaderToggleRightOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
_st($5)._class_("header-actions pull-left");
$ctx2.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($7)._id_("toggle-content");
$ctx3.sendIdx["id:"]=1;
_st($7)._class_("btn btn-icon");
$ctx3.sendIdx["class:"]=4;
_st($7)._type_("button");
$ctx3.sendIdx["type:"]=1;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$9=_st(html)._i();
$ctx4.sendIdx["i"]=1;
return _st($9)._class_("icon ion-navicon-round");
$ctx4.sendIdx["class:"]=5;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=4;
$8;
$10=_st(html)._button();
_st($10)._id_("toggle-search");
_st($10)._class_("btn btn-icon");
$ctx3.sendIdx["class:"]=6;
_st($10)._type_("button");
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._i())._class_("icon ion-search");
$ctx4.sendIdx["class:"]=7;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$ctx3.sendIdx["with:"]=5;
return $11;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=3;
$6;
$12=_st(html)._h1();
_st($12)._class_("content-title");
$13=_st($12)._with_("Blank page");
return $13;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentHeaderOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentHeaderOn: html\x0a \x22render the header of the content\x22 \x0a  html header class: 'content-header'; \x0a   with:[\x0a    html div class:'header-actions pull-right'; \x0a\x09 with:[\x0a\x0a\x09 self renderContentHeaderAlertsOn: html.\x0a\x09 self renderContentHeaderMessagesOn:html.\x0a\x09 self renderContentHeaderUsersettingsOn: html.\x0a\x09 self renderContentHeaderToggleRightOn: html.\x0a\x09].\x0a\x09html div class:'header-actions pull-left';\x0a\x09 with:[\x0a\x09  html button id: 'toggle-content'; class: 'btn btn-icon'; type: 'button'; with:[ html i class: 'icon ion-navicon-round'].\x0a\x09  html button id: 'toggle-search'; class: 'btn btn-icon'; type: 'button'; with:[ html i class: 'icon ion-search'].\x09  \x0a\x09].\x0a\x09 \x0a\x09html h1 class:'content-title'; with: 'Blank page'. \x0a  ]\x0a  \x0a   ",
messageSends: ["class:", "header", "with:", "div", "renderContentHeaderAlertsOn:", "renderContentHeaderMessagesOn:", "renderContentHeaderUsersettingsOn:", "renderContentHeaderToggleRightOn:", "id:", "button", "type:", "i", "h1"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentHeaderToggleRightOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._id_("toggle-aside");
_st($1)._class_("btn btn-icon");
$ctx1.sendIdx["class:"]=1;
_st($1)._role_("button");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._i())._class_("icon ion-navicon-round");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentHeaderToggleRightOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentHeaderToggleRightOn: html\x0a html a id: 'toggle-aside'; class:'btn btn-icon'; role: 'button'; with:[\x0a  html i class: 'icon ion-navicon-round'.\x0a  ]",
messageSends: ["id:", "a", "class:", "role:", "with:", "i"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentHeaderUsersettingsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("btn-group");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._id_("user-setting");
_st($3)._role_("menu");
_st($3)._class_("btn btn-icon hide-sm dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._i())._class_("icon ion-gear-b");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentHeaderUsersettingsOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentHeaderUsersettingsOn: html\x0a \x22messages\x22  \x0a html div class:'btn-group'; with:[\x0a       \x09html a id:'user-setting'; \x0a\x09\x09\x09role: 'menu'; \x0a\x09\x09\x09class:'btn btn-icon hide-sm dropdown-toggle';\x0a\x09\x09\x09with:\x0a\x09\x09\x09 [html i class: 'icon ion-gear-b'].\x0a\x09\x0a  \x09\x09\x0a  ]\x0a\x0a   ",
messageSends: ["class:", "div", "with:", "id:", "a", "role:", "i"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentMainOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$8,$6,$4,$9,$10,$2;
$1=_st(html)._section();
_st($1)._id_("content-main");
_st($1)._class_("content-main");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($3)._class_("content-app fixed-header");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=2;
_st($5)._class_("app-header");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._h3();
_st($7)._class_("app-title");
$ctx4.sendIdx["class:"]=4;
$8=_st($7)._with_("SuixoMobile mockup");
$ctx4.sendIdx["with:"]=4;
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$9=_st(html)._div();
_st($9)._class_("app-body");
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._h2())._with_("Hello world from suixo mockup");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=5;
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderContentMainOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentMainOn: html\x0a \x22the main content\x22\x0a html section id: 'content-main'; class:'content-main'; with:[\x0a   \x22here the main content of the app\x22\x0a   html div class: 'content-app fixed-header'; with:[\x0a\x09 html div class: 'app-header'; with: [\x0a\x09\x09 html h3 class: 'app-title'; with:'SuixoMobile mockup']\x0a\x09 ].\x0a  \x0a   html div class: 'app-body'; with: [\x0a\x09 html h2 with: 'Hello world from suixo mockup'.\x0a\x09].\x09 \x0a ]\x0a  \x09",
messageSends: ["id:", "section", "class:", "with:", "div", "h3", "h2"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentSectionOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._renderContentHeaderOn_(html);
$1=_st(html)._div();
_st($1)._id_("content-spliter");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentMainOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentSectionOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderContentSectionOn: html\x0a \x22this will render the content of the app\x22\x0a  self renderContentHeaderOn: html.\x0a  html div id: 'content-spliter'; with:[\x0a\x09  self renderContentMainOn: html.\x0a\x09\x0a\x09]",
messageSends: ["renderContentHeaderOn:", "id:", "div", "with:", "renderContentMainOn:"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._section();
$ctx1.sendIdx["section"]=1;
_st($1)._id_("wrapper");
$ctx1.sendIdx["id:"]=1;
_st($1)._class_("container");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderSideLeftOn_(html);
$3=_st(html)._section();
_st($3)._id_("content");
_st($3)._class_("content");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderContentSectionOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._renderBodyScriptsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderOn: html\x0a html section id: 'wrapper'; class:'container'; with:[\x0a  self renderSideLeftOn:html.\x0a  html section id: 'content'; class:'content'; with:[\x0a\x09  self renderContentSectionOn: html].\x0a  ].\x0a  self renderBodyScriptsOn: html.\x0a  \x0a  ",
messageSends: ["id:", "section", "class:", "with:", "renderSideLeftOn:", "renderContentSectionOn:", "renderBodyScriptsOn:"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSideLeftOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$7,$9,$10,$8,$6,$4,$11,$13,$15,$17,$19,$18,$16,$20,$22,$23,$21,$14,$12,$2;
$1=_st(html)._aside();
_st($1)._class_("side-left");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($3)._class_("side-header");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._h1();
_st($5)._id_("brand");
_st($5)._class_("brand");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._a();
$ctx4.sendIdx["a"]=1;
_st($7)._href_("#");
$ctx4.sendIdx["href:"]=1;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$9=_st(html)._img();
_st($9)._src_("assets/app/img/brand.png");
$10=_st($9)._alt_("");
$10;
return _st(html)._with_("SuixoMobile");
$ctx5.sendIdx["with:"]=5;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return $6;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$11=_st(html)._div();
_st($11)._class_("side-body");
$ctx2.sendIdx["class:"]=4;
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$13=_st(html)._nav();
_st($13)._class_("side-nav");
$ctx3.sendIdx["class:"]=5;
$14=_st($13)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$15=_st(html)._li();
$ctx5.sendIdx["li"]=1;
_st($15)._class_("side-nav-item active");
$ctx5.sendIdx["class:"]=6;
$16=_st($15)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$17=_st(html)._a();
$ctx6.sendIdx["a"]=2;
_st($17)._href_("#");
$ctx6.sendIdx["href:"]=2;
$18=_st($17)._with_((function(){
return smalltalk.withContext(function($ctx7) {
$19=_st(html)._i();
$ctx7.sendIdx["i"]=1;
_st($19)._class_("nav-item-icon icon ion-social-rss-outline");
$ctx7.sendIdx["class:"]=7;
return _st(html)._with_("Home");
$ctx7.sendIdx["with:"]=11;
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,9)})}));
$ctx6.sendIdx["with:"]=10;
return $18;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}));
$ctx5.sendIdx["with:"]=9;
$16;
$20=_st(html)._li();
_st($20)._class_("side-nav-item");
$ctx5.sendIdx["class:"]=8;
$21=_st($20)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$22=_st(html)._a();
_st($22)._href_("#");
$23=_st($22)._with_((function(){
return smalltalk.withContext(function($ctx7) {
_st(_st(html)._i())._class_("nav-item-icon icon ion-social-rss-outline");
return _st(html)._with_("Clienten");
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,11)})}));
$ctx6.sendIdx["with:"]=13;
return $23;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,10)})}));
$ctx5.sendIdx["with:"]=12;
return $21;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}));
$ctx4.sendIdx["with:"]=8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
$ctx3.sendIdx["with:"]=7;
return $14;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["with:"]=6;
return $12;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderSideLeftOn:",{html:html},globals.Suixomobile)})},
args: ["html"],
source: "renderSideLeftOn: html\x0a \x22side\x22\x0a html aside class: 'side-left'; with: [\x0a \x09html div class: 'side-header'; with:[\x0a\x09 html h1 id:'brand'; class:'brand'; with: [\x0a\x09\x09 html a href: '#'; with:[\x0a\x09\x09\x09html img src: 'assets/app/img/brand.png'; alt:''.\x0a\x09\x09\x09html with: 'SuixoMobile'.\x0a\x09\x09\x09]\x0a\x09\x09 ] \x22end brand\x22\x0a\x09]\x22end header\x22.\x0a\x09 \x0a    html div class: 'side-body'; with:[\x0a\x09 \x22here we can put search results if wanted  \x22\x0a\x09 html nav class: 'side-nav'; with: [ \x0a\x09  \x22open nav ul \x22\x0a\x09  html ul with:[\x0a\x09\x09html li class: 'side-nav-item active'; with:[\x0a\x09\x09\x09html a href: '#'; with: [\x0a\x09\x09\x09\x09html i class: 'nav-item-icon icon ion-social-rss-outline'.\x0a\x09\x09\x09\x09html with: 'Home'.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x09\x09\x0a\x09   \x09html li class: 'side-nav-item'; with:[ \x0a\x09\x09\x09html a href: '#'; with: [\x0a\x09\x09\x09\x09html i class: 'nav-item-icon icon ion-social-rss-outline'.\x0a\x09\x09\x09\x09html with: 'Clienten'. \x0a\x09\x09\x09\x09]\x0a\x09\x09\x09]\x0a\x09  ]\x0a     ]\x0a   ]\x0a  ]\x0a   ",
messageSends: ["class:", "aside", "with:", "div", "id:", "h1", "href:", "a", "src:", "img", "alt:", "nav", "ul", "li", "i"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceWithJQuery:",
protocol: 'utils',
fn: function (aJQuery){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aJQuery)._empty();
self._appendToJQuery_(aJQuery);
return self}, function($ctx1) {$ctx1.fill(self,"replaceWithJQuery:",{aJQuery:aJQuery},globals.Suixomobile)})},
args: ["aJQuery"],
source: "replaceWithJQuery: aJQuery\x0a  aJQuery empty.\x0a  self appendToJQuery: aJQuery.\x0a ",
messageSends: ["empty", "appendToJQuery:"],
referencedClasses: []
}),
globals.Suixomobile);

smalltalk.addMethod(
smalltalk.method({
selector: "responsiveSettings",
protocol: 'utils',
fn: function (){
var self=this;
var viewport;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5,$6,$7,$8,$9,$10;
viewport=_st(_st(window)._verge())._viewportW();
$1=_st(viewport).__gt_eq((1680));
if(smalltalk.assert($1)){
$4=".content-aside"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._length();
$2=_st($3).__gt((0));
if(smalltalk.assert($2)){
$5=".content-main"._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($5)._addClass_("content-main-md");
$ctx1.sendIdx["addClass:"]=1;
};
$6=".content-aside"._asJQuery();
$ctx1.sendIdx["asJQuery"]=3;
_st($6)._addClass_("open");
$ctx1.sendIdx["addClass:"]=2;
} else {
$7=".content-main"._asJQuery();
$ctx1.sendIdx["asJQuery"]=4;
_st($7)._removeClass_("content-main-md");
$ctx1.sendIdx["removeClass:"]=1;
$8=".content-aside"._asJQuery();
$ctx1.sendIdx["asJQuery"]=5;
_st($8)._removeClass_("open");
};
$9=_st(viewport).__lt_eq((768));
if(smalltalk.assert($9)){
$10=".content"._asJQuery();
$ctx1.sendIdx["asJQuery"]=6;
_st($10)._addClass_("content-lg");
$ctx1.sendIdx["addClass:"]=3;
_st(".toggle-search"._asJQuery())._addClass_("hide");
};
return self}, function($ctx1) {$ctx1.fill(self,"responsiveSettings",{viewport:viewport},globals.Suixomobile)})},
args: [],
source: "responsiveSettings\x0a|viewport|\x0a   viewport := window verge viewportW.\x0a\x0a   \x22large desktop\x22\x0a   (viewport >= 1680)\x0a   \x09 ifTrue: [\x0a\x09\x09 (('.content-aside' asJQuery) length > 0)\x0a\x09\x09 \x09ifTrue:[\x0a\x09\x09     '.content-main' asJQuery addClass:'content-main-md'.\x0a\x09\x09 \x09].\x0a\x09\x09  '.content-aside' asJQuery addClass: 'open'.\x09\x0a\x09\x09 ]\x0a\x09 ifFalse:[\x0a\x09\x09'.content-main' asJQuery removeClass:'content-main-md'.\x0a\x09\x09'.content-aside' asJQuery removeClass:'open'.\x0a\x09   ].\x0a     ( viewport <= 768) ifTrue:[\x0a\x09    '.content' asJQuery addClass: 'content-lg'.\x0a\x09\x09'.toggle-search' asJQuery addClass:'hide'.\x0a\x09  ]\x0a    ",
messageSends: ["viewportW", "verge", "ifTrue:ifFalse:", ">=", "ifTrue:", ">", "length", "asJQuery", "addClass:", "removeClass:", "<="],
referencedClasses: []
}),
globals.Suixomobile);


smalltalk.addMethod(
smalltalk.method({
selector: "clearBody",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("body"._asJQuery())._empty();
return self}, function($ctx1) {$ctx1.fill(self,"clearBody",{},globals.Suixomobile.klass)})},
args: [],
source: "clearBody\x0a\x09('body' asJQuery) empty",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
globals.Suixomobile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._new())._replaceWithJQuery_("body"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.Suixomobile.klass)})},
args: [],
source: "start\x0a\x09self new replaceWithJQuery: ('body' asJQuery)",
messageSends: ["replaceWithJQuery:", "new", "asJQuery"],
referencedClasses: []
}),
globals.Suixomobile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "tryMe",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._start();
return self}, function($ctx1) {$ctx1.fill(self,"tryMe",{},globals.Suixomobile.klass)})},
args: [],
source: "tryMe\x0a\x09self start",
messageSends: ["start"],
referencedClasses: []
}),
globals.Suixomobile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "i",
protocol: '*Suixomobile',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._tag_("i");
return $1;
}, function($ctx1) {$ctx1.fill(self,"i",{},globals.HTMLCanvas)})},
args: [],
source: "i\x0a\x09^ self tag: 'i'",
messageSends: ["tag:"],
referencedClasses: []
}),
globals.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "dataToggle:",
protocol: '*Suixomobile',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("datatoggle",aString);
return self}, function($ctx1) {$ctx1.fill(self,"dataToggle:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "dataToggle: aString\x0a self at: 'datatoggle' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "datatoggle:",
protocol: '*Suixomobile',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("data-toggle",aString);
return self}, function($ctx1) {$ctx1.fill(self,"datatoggle:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "datatoggle: aString\x0a self at: 'data-toggle' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "role:",
protocol: '*Suixomobile',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._at_put_("role",aString);
return self}, function($ctx1) {$ctx1.fill(self,"role:",{aString:aString},globals.TagBrush)})},
args: ["aString"],
source: "role: aString\x0a\x09self at: 'role' put: aString",
messageSends: ["at:put:"],
referencedClasses: []
}),
globals.TagBrush);

});
