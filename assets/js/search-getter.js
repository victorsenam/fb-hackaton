var searchGetter = function() {
    var query = window.location.href.split('query=')[1].split("&")[0];
    var requestFB = "search?fields=id,name,picture{url}&q=" + decodeURIComponent(query) +"&type=place";
    FB.api(
        requestFB,
        {access_token: FB.getAccessToken()},
        function (response) {
            if (response && !response.error) {
                ourdata = response.data;
                var wrap = document.getElementById("outwrap");
                var temp = document.getElementById("template");

                for (var i = 0; i < ourdata.length; i++) {
                    copied = temp.cloneNode(true);
                    copied.childNodes[1].innerHTML = ourdata[i].name;
                    if (ourdata.picture) {
                        copied.childNodes[0].childNodes[0].src = ourdata[i].picture.data.url;
                    } else {
                        copied.childNodes[0].remove();
                    }
                    wrap.appendChild(copied);
                }
            }
        }
    );
};
