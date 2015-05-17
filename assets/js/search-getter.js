var searchGetter = function() {
    query = window.location.href.split('query=')[1].split("&")[0];
    var requestFB = "search?fields=id,name,picture{url}&q=" + query.replace("+"," ") +"&type=place";
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
                    
                    copied.childNodes[0].childNodes[0].innerHTML = '<div class="col-md-4 col-xs-6"><img id="image" src="ourdata[i].picture.data.url"></div>'
                    
                    wrap.appendChild(copied);
                }
            }
        }
    );
};
