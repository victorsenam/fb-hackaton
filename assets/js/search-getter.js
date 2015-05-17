var searchGetter = function() {
    var query = window.location.href.split('query=')[1].split("&")[0];
    requestFB = "search?fields=id,name,picture{url},location{street,city}&q=" + query +"&type=place";
    console.log(FB.getAuthResponse());
    console.log(FB.getAuthResponse().accessToken);
    FB.api(
        requestFB,
        {access_token: FB.getAuthResponse().accessToken},
        function (response){
            teste = response;
            if (response && !response.error) {
                var ourdata = response.data;
                output = document.getElementById("tester");
                for (var i = 0; i < ourdata.length; i++) {
                    output.innerHTML += ourdata[i].name + "<br>";
                }
            }
        }
    );
};
