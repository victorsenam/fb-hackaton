window.facebookAsyncCalls.push(function() {
    FB.init({
        appId      : '1436265956676047',
        channelUrl : 'http://queue-fb-hackathon.herokuapp.com',
        xfbml      : true,
        version    : 'v2.3'
    });

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            console.log('Logged in.');
        } else {
            window.location.href = 'login.html';
        }
    });
});
