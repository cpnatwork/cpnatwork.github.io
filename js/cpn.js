var _CPN_mailAddrP1 = "cpnatwork";
var _CPN_mailAddrP2 = "googlemail.com";
var _CPN_mailSubject = "Feedback";

function viewTheUnspoken(linkText) {
	viewTheUnspokenCPN(linkText);
}
function viewTheUnspokenCPN(linkText) {
	viewTheUnspokenCPN_subj(linkText,_CPN_mailSubject);
}
function viewTheUnspokenCPN_subj(linkText, subject) {
	document.write('<a class="eMail" href=\"mailto:' + _CPN_mailAddrP1 + '@' + _CPN_mailAddrP2 + '?subject=' + subject + '\"' + ' >' + linkText + '</a>');
}
