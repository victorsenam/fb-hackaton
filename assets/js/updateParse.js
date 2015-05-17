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
