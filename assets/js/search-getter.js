var searchGetter = function() {
    var query = window.location.href.split('query=')[1].split("&")[0];
    var requestFB = "search?fields=id,name,picture{url}&q=" + query +"&type=place";
    FB.api(
        requestFB,
        {access_token: FB.getAccessToken()},
        function (response) {
            if (response && !response.error) {
                var ourdata = response.data;
                var wrap = document.getElementById("outwrap");
                var temp = document.getElementById("template");

                for (var i = 0; i < ourdata.length; i++) {
                    copied = temp.cloneNode(true);
                    copied.getElementById("image").src = ourdata.picture.data.url;                    
                    copied.getElementById("name").innerHTML = ourdata.name;
                    wrap.appendChild(copied);
                }
            }
        }
    );
};
