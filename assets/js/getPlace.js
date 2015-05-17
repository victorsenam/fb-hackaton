Parse.initialize("ZRAqxFUzv8ys8oD1CRDRarS2FLJgbk6b0DqDuoXI", "RxSwMyupUerhlYoCGqoXsS4Iq7UfWRDqV52DzUAl");
var Fila = Parse.Object.extend("Fila");
var fila = new Fila();  
var All = new Parse.Query(Fila);
var Request = Parse.Object.extend("Request");
var req = new Request();
 
var idpage = 1234;
var obj;

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
    }
    else {
      var cs, good, med, bad, url;
      obj = results[0];
      cs = results[0].get("crowd_size");
      good = results[0].get("good");
      med = results[0].get("medium");
      bad = results[0].get("bad");
    };
  },
  error: function(model, error) {
    $(".error").show();
  }
});

json = All.equalTo("id_page", idpage).toJSON();  

var npeople = 6, voto = "GOOD";
All.equalTo("id_page", idpage).find({
  success: function(results) {  
    var cs, good, med, bad, url;
    obj = results[0];
    cs = results[0].get("crowd_size");
    good = results[0].get("good");
    med = results[0].get("medium");
    bad = results[0].get("bad");
    obj.destroy({
          success: function(obj) {
            $(".success").show();
          },
          error: function(obj, error) {
            $(".error").show();
          }
    });
    if (voto == "BAD")
      bad = bad+1;
    else if (voto == "MEDIUM")
      med = med+1;
    else
      good = good+1;
    cs = cs+npeople;
    fila.save({id_page: idpage, crowd_size: cs, good: good, medium: med, bad: bad}, {
      success: function(obj) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
    });  
  },
  error: function(model, error) {
    $(".error").show();
  }
});
