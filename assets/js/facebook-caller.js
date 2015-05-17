window.fbAsyncInit = function () {
    for (var i = 0; window.facebookAsyncCalls.length; i++)
        window.facebookAsyncCalls[i]();
};
