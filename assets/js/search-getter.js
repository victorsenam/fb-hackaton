var query = window.location.href.split('query=')[1].split("&")[0];

window.facebookAsyncCalls.push(function() {
    FB.api(
        "/search? fields=id,name,picture{url},location{street,city}& q =" + query +"&type = place& type=page",
        function (response){
            if (response && !response.error) {
                var ourdata = response.data;
                var output = document.getElementById("tester");
                for (var i = 0; i < ourdata.length; i++) {
                    output.innerHTML += ourdata[i].name + "<br>";
                }
            }
        }
    );
});
