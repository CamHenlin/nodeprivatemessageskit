var objc = require('NodObjC');
var $ = require('NodObjC');
$.import('Foundation');
$.import('/System/Library/PrivateFrameworks/MessagesKit.framework');
var pool = $.NSAutoreleasePool('alloc')('init');
var array = $.NSMutableArray('alloc')('init');
//var cDUnknownBlockType = $.CDUnknownBlockType('alloc')('init')
var messageKit = $.SOMessageHelper('alloc')('init');
console.log(messageKit);
console.log(messageKit.methods());
array('addObject', $('+15415809414'));
console.log(array);

// set up the app delegate
var CompletionObj = $.NSObject.extend('MessagesKit');
CompletionObj.addMethod('completionBlock:', 'v@:@', function (self, _cmd, notif, etc) {

	// var systemStatusBar = $.NSStatusBar('systemStatusBar');
	// statusMenu = systemStatusBar('statusItemWithLength', $.NSVariableStatusItemLength);
	// statusMenu('retain');
	// var title = $.NSString('stringWithUTF8String', "Hello World");
	// statusMenu('setTitle', title);
});
CompletionObj.register();
// - (void)startNewConverstaionInMessages; // just lol at the typo in Apple's headers
messageKit("startNewConverstaionInMessages");

console.log('start new conversation successful i guess?');

console.log(messageKit("iMessageURLForAddress", $('cam.henlin@gmail.com')));

// + (id)iMessageURLForAddress:(id)arg1;

// - (void)sendMessageText:(NSString *)arg1 toRecipients:(NSArray *)arg2 onService:(NSString *)arg3;
messageKit("sendMessageText", $("test"), "toRecipients", $("+15415809414"), "onService", $("iMessage"));

console.log('loaded framework');
