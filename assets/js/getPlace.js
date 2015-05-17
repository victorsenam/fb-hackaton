var getPlace = function () {
    Parse.initialize("ZRAqxFUzv8ys8oD1CRDRarS2FLJgbk6b0DqDuoXI", "RxSwMyupUerhlYoCGqoXsS4Iq7UfWRDqV52DzUAl");
    var Fila = Parse.Object.extend("Fila");
    var fila = new Fila();  
    var All = new Parse.Query(Fila);
    var Request = Parse.Object.extend("Request");
    var req = new Request();
     
    var idpage = parseInt(window.location.href.split("place_id=")[1].split("&")[0]);
    var retorno;

    All.equalTo("id_page", idpage).find({
      success: function(results) {
        if (results.length == 0) {
          fila.save({id_page: idpage, crowd_size: 0, good: 0, medium: 0, bad: 0}, {
            success: function(obj) {
              $(".success").show();
            },
            error: function(model, error) {
              $(".error").show();
            }
          });  
          
          retorno = {
              cs: 0,
              good: 0,
              med: 0,
              bad: 0
          }
        } else {
          var cs, good, med, bad, url;
          retorno = {
            cs: results[0].get("crowd_size"),
            good: results[0].get("good"),
            med: results[0].get("medium"),
            bad: results[0].get("bad")
          };
        }

        // colocar as bagacinha no html
        if (retorno.good > retorno.med && retorno.good > retorno.bad) {
            document.getElementById("progress").attributes['style'].value = 'width: ' + (retorno.good/retorno.cs)*100 + '%';
            document.getElementById("progress").attributes['class'].value += ' progress-bar-success'; // pode ser warning error ou success
        } else if (retorno.med > retorno.good && retorno.med > retorno.bad) {
            document.getElementById("progress").attributes['style'].value = 'width: ' + (retorno.med/retorno.cs)*100 + '%';
            document.getElementById("progress").attributes['class'].value += ' progress-bar-warning'; // pode ser warning error ou success      
        } else {
            document.getElementById("progress").attributes['style'].value = 'width: ' + (retorno.bad/retorno.cs)*100 + '%';
            document.getElementById("progress").attributes['class'].value += ' progress-bar-danger';
        }
        document.getElementById("usr_count").innerHTML = retorno.cs;

      },
      error: function(model, error) {
        $(".error").show();
      }
    });

 //   json = All.equalTo("id_page", idpage).toJSON();  


    // Agora a mesma coisa só q com o grafo do face
    var requestFB = idpage+"?fields=name,picture{url}";
    FB.api(
        requestFB,
        {access_token: FB.getAccessToken()},
        function(response) {
            ourdata = response;
            if (response && !response.error) {
                document.getElementById("place-name").innerHTML = ourdata.name;
                document.getElementById("imagem").src = ourdata.picture.url;
            } else {
                document.getElementById("place-name").innerHTML = "Error! :( Please try again";
            }
        }
    );
};
