window.fbAsyncInit = function() {
    FB.init({
        appId      : '1436265956676047',
        channelUrl : '//http://queue-fb-hackathon.herokuapp.com',
        xfbml      : true,
        version    : 'v2.3'
    });
};

(function(d, s, id){
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        console.log('Logged in.');
        window.location.href = 'search.html';
    }
    else {
        FB.login();
    }
});