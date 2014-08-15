Smalltalk createPackage: 'Suixomobile'!
Widget subclass: #Suixomobile
	instanceVariableNames: ''
	package: 'Suixomobile'!

!Suixomobile methodsFor: 'rendering'!

renderBodyScriptsOn: html
 "html script src: 'assets/app/js/dependencies.js'"
 "html script src: 'assets/app/js/main.min.js'."
 "jQuery getScript: 'assets/app/js/main.js'."
  
   ( '#toggle-content' asJQuery)
  	on:'click' bind:[:e | |content|
	 e preventDefault.
     content := '#content' asJQuery.
	 content toggleClass: 'content-lg'.
   ].
   
   ('#toggle-aside' asJQuery)
     on: 'click' bind:[:e| 
     e preventDefault.
	 ('#content-main' asJQuery) toggleClass: 'content-main-md'.
	 ('#content-aside' asJQuery) toggleClass: 'open'.

    ].
    self responsiveSettings. 
	self initVisibilityElms. 
	 "Bootstrap manual "
   	"('[data-toggle= _tooltip_]' asJQuery) tooltip. "
	"('[data-toggle= _popover_]' asJQuery) popover."

    "extend verge (viewport reader, docs: https://github.com/ryanve/verge) to jquery"
 	"jQuery extend: verge ."
!

renderContentHeaderAlertsOn: html
 "alerts "	 
  html div class:'btn-group'; with:[
       	html a id:'notif-alerts';
			class:'btn btn-icon hide-sm dropdown-toggle';
			role: 'button';
			datatoggle: 'dropdown';
			with:
			 [html i class: 'icon ion-alert-circled'].

  		html ul class: 'dropdown-menu dropdown-extend pull-right'; role: 'menu'; with:[
			html li class: 'dropdown-header'; with: 'Notifications'.			
			html li class: 'notif-minimal'; with: [
				html a class:'notif-item'; href:''; with: [
					html div class: 'notif-ico bg-danger'; with:[
						html i class:'icon ion-ios7-heart-outline'
						]
					]
				]
	     ] 
   ]
!

renderContentHeaderMessagesOn: html
 " messages" 
 html div class:'btn-group'; with:[
       	html a id:'notif-messages'; 
			role: 'menu';
			datatoggle: 'dropdown';
			class:'btn btn-icon hide-sm dropdown-toggle';
			with:
			 [html i class: 'icon ion-chatboxes'.
			  html span class:'badge'; with: '3'. 
	          ].

  		html ul class: 'dropdown-menu dropdown-extend pull-right'; role: 'menu'; with:[
			html li class: 'dropdown-header'; with: 'Notifications'.			
			html li class: 'notif-minimal'; with: [
				html a class:'notif-item'; href:'#'; with: [
					html div class: 'notif-ico bg-danger'; with:[
						html i class:'icon ion-ios7-heart-outline'
						]
					]
				]
	     ] 
  ]
!

renderContentHeaderOn: html
 "render the header of the content" 
  html header class: 'content-header'; 
   with:[
    html div class:'header-actions pull-right'; 
	 with:[

	 self renderContentHeaderAlertsOn: html.
	 self renderContentHeaderMessagesOn:html.
	 self renderContentHeaderUsersettingsOn: html.
	 self renderContentHeaderToggleRightOn: html.
	].
	html div class:'header-actions pull-left';
	 with:[
	  html button id: 'toggle-content'; class: 'btn btn-icon'; type: 'button'; with:[ html i class: 'icon ion-navicon-round'].
	  html button id: 'toggle-search'; class: 'btn btn-icon'; type: 'button'; with:[ html i class: 'icon ion-search'].	  
	].
	 
	html h1 class:'content-title'; with: 'Blank page'. 
  ]
!

renderContentHeaderToggleRightOn: html
 html a id: 'toggle-aside'; class:'btn btn-icon'; role: 'button'; with:[
  html i class: 'icon ion-navicon-round'.
  ]
!

renderContentHeaderUsersettingsOn: html
 "messages"  
 html div class:'btn-group'; with:[
       	html a id:'user-setting'; 
			role: 'menu'; 
			class:'btn btn-icon hide-sm dropdown-toggle';
			with:
			 [html i class: 'icon ion-gear-b'].
	
  		
  ]
!

renderContentMainOn: html
 "the main content"
 html section id: 'content-main'; class:'content-main'; with:[
   "here the main content of the app"
   html div class: 'content-app fixed-header'; with:[
	 html div class: 'app-header'; with: [
		 html h3 class: 'app-title'; with:'SuixoMobile mockup']
	 ].
  
   html div class: 'app-body'; with: [
	 html h2 with: 'Hello world from suixo mockup'.
	].	 
 ]
!

renderContentSectionOn: html
 "this will render the content of the app"
  self renderContentHeaderOn: html.
  html div id: 'content-spliter'; with:[
	  self renderContentMainOn: html.
	
	]
!

renderOn: html
 html section id: 'wrapper'; class:'container'; with:[
  self renderSideLeftOn:html.
  html section id: 'content'; class:'content'; with:[
	  self renderContentSectionOn: html].
  ].
  self renderBodyScriptsOn: html.
!

renderSideLeftOn: html
 "side"
 html aside class: 'side-left'; with: [
 	html div class: 'side-header'; with:[
	 html h1 id:'brand'; class:'brand'; with: [
		 html a href: '#'; with:[
			html img src: 'assets/app/img/brand.png'; alt:''.
			html with: 'SuixoMobile'.
			]
		 ] "end brand"
	]"end header".
	 
    html div class: 'side-body'; with:[
	 "here we can put search results if wanted  "
	 html nav class: 'side-nav'; with: [ 
	  "open nav ul "
	  html ul with:[
		html li class: 'side-nav-item active'; with:[
			html a href: '#'; with: [
				html i class: 'nav-item-icon icon ion-social-rss-outline'.
				html with: 'Home'.
				]
			].
		
	   	html li class: 'side-nav-item'; with:[ 
			html a href: '#'; with: [
				html i class: 'nav-item-icon icon ion-social-rss-outline'.
				html with: 'Clienten'. 
				]
			]
	  ]
     ]
   ]
  ]
! !

!Suixomobile methodsFor: 'utils'!

initVisibilityElms
  window asJQuery on:'resize' do:[|viewport|
   self responsiveSettings.
    ]
!

replaceWithJQuery: aJQuery
  aJQuery empty.
  self appendToJQuery: aJQuery.
!

responsiveSettings
|viewport|
   viewport := window verge viewportW.

   "large desktop"
   (viewport >= 1680)
   	 ifTrue: [
		 (('.content-aside' asJQuery) length > 0)
		 	ifTrue:[
		     '.content-main' asJQuery addClass:'content-main-md'.
		 	].
		  '.content-aside' asJQuery addClass: 'open'.	
		 ]
	 ifFalse:[
		'.content-main' asJQuery removeClass:'content-main-md'.
		'.content-aside' asJQuery removeClass:'open'.
	   ].
     ( viewport <= 768) ifTrue:[
	    '.content' asJQuery addClass: 'content-lg'.
		'.toggle-search' asJQuery addClass:'hide'.
	  ]
! !

!Suixomobile class methodsFor: 'as yet unclassified'!

clearBody
	('body' asJQuery) empty
!

start
	self new replaceWithJQuery: ('body' asJQuery)
!

tryMe
	self start
! !

!HTMLCanvas methodsFor: '*Suixomobile'!

i
	^ self tag: 'i'
! !

!TagBrush methodsFor: '*Suixomobile'!

dataToggle: aString
 self at: 'datatoggle' put: aString
!

datatoggle: aString
 self at: 'data-toggle' put: aString
!

role: aString
	self at: 'role' put: aString
! !

