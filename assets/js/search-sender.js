document.getElementById('submitter').addEventListener('click', function () {
    var query = document.getElementById('inputStablishment').value;
    
    window.location.href = 'list.html?query=' + encodeURIComponent(query);
    return false;
});
