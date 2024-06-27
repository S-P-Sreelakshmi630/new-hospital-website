var c = function(pos){
    var lat = pos.coords.latitude,
    long = pos.coords.longitude,
    coords = lat + ', ' + long;
    document.getElementById('google_maps').setAttribute('src','https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15231.496598268172!2d78.48655964999999!3d17.3697878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1665055004989!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade');
}
document.getElementById('get_loc').onclick=function(){
    navigator.geolocation.getCurrentPosition(c);
    return false;
}