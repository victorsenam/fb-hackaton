document.getElementById('search-form').addEventListener('submit', function () {
    var query = document.getElementById('inputStablishment').value;
    
    window.location.href = 'list.html?query=' + encodeURIComponent(query);
    return false;
});
