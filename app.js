var objc = require('NodObjC');
var $ = require('NodObjC');
$.import('Foundation');
$.import('MessagesKit');

var messageHelper = $.SOMessageHelper('alloc')('init');
var buddyHelper = $.SOBuddyHelper('alloc')('init');
var chatHelper = $.SOChatHelper('alloc')('init');
var helper = $.SOHelper('alloc')('init');

var pool = $.NSAutoreleasePool('alloc')('init');

//var cDUnknownBlockType = $.CDUnknownBlockType('alloc')('init')
console.log(messageHelper);
console.log(messageHelper.methods());
console.log(messageHelper.ancestors());

console.log(buddyHelper);
console.log(buddyHelper.methods());
console.log(buddyHelper.ancestors());

console.log(chatHelper);
console.log(chatHelper.methods());
console.log(chatHelper.ancestors());

console.log(helper);
console.log(helper.methods());
console.log(helper.ancestors());

// - (void)startNewConverstaionInMessages; // just lol at the typo in Apple's headers
// messageHelper("startNewConverstaionInMessages"); // works but is empty?
console.log(messageHelper("openShareKit")); // null

console.log(messageHelper("newMessageString")); // literally returns the string "New Message..."

console.log(buddyHelper("buddyLists")); // null, even with buddy list up
console.log($('Cam downvotes with normal use'));
//
var chatTitle = $.NSString('stringWithString', $('Cam downvotes with normal use'));
console.log(buddyHelper("openConversationWithBuddyID", chatTitle, "serviceName", $("iMessage"))); // sorta works but mangles spaces, works GREAT for phone numbers and emails
// console.log(buddyHelper("openConversationWithBuddyDetails", null)); sorta works but only for null, not sure how to insert actual buddy details

console.log(chatHelper("chatListBlocking")); // results in a timeout

console.log(buddyHelper("name")); // results in a timeout

// + (id)iMessageURLForAddress:(id)arg1;

// - (void)sendMessageText:(id)arg1 toRecipients:(id)arg2 onService:(id)arg3 withCompletionBlock:(CDUnknownBlockType)arg4;
console.log(messageHelper("sendMessageText", $("test message1"), "toRecipient", $("cam.henlin@gmail.com"), "withCompletionBlock", null)); // null with no apparent effect

var array = $.NSMutableArray('alloc')('init');
array('addObject', $('cam.henlin@gmail.com'));
console.log(messageHelper("sendMessageText", $("test message2"), "toRecipients", array, "onService", $("iMessage"), "withCompletionBlock", null)); // null with no apparent effect

