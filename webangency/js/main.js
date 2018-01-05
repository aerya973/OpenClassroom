function resizeIframe() {
	$('iframe').attr("width", $(window).width());
}
$(function() {
	//initial load
	resizeIframe();
});
//on every window resize
$(window).resize(resizeIframe);