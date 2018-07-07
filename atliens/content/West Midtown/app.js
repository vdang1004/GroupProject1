
 $(document).ready(function() {
     function getData() {
        
        


  L.mapbox.accessToken = 'pk.eyJ1IjoidHlsZXJlbGxpc29uMTYiLCJhIjoiY2ppd2VxaHJpMGl1ajNxb3MwZ2tqaW9zayJ9.4LlysHw-w53UP_DYsDvRzw';
    // Replace 'mapbox.streets' with your map id.
    var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
        attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    var map = L.map('map')
        .addLayer(mapboxTiles)
        .setView([33.783289, -84.409247], 15);

  
    var queryURL = "https://arcgis.atlantaregional.com/arcgis/rest/services/OpenData/FeatureServer/196/query?where=1%3D1&outFields=*&outSR=4326&f=json";

    
    $.ajax({
      url: queryURL,
      method: 'GET'

    })

      .then(function(response) {
          var result = response.features[12];
        console.log(response);

        var population = (result.attributes.pop);
        var white = (result.attributes.white);
        var black = (result.attributes.black);
        var asian = (result.attributes.asian);
        var other = (result.attributes.other);
        var hispanic = (result.attributes.hispanic);
        
        console.log(population);
        $("#mainTable").append("<tr><td>" + population + "</td><td>"
        + white + "</td><td>"
        + black + "</td><td>"
        + asian + "</td><td>" 
        + hispanic + "</td><td>" 
        + other + "</td></tr>");
         
      });
    $(function(){


        $("#submit").on("click", function(){
            
            var t = document.getElementById("comment").value;
            
            
            console.log(t);

              
            }); 
            
            
        });


        
    };
    getData();
    
    

 });
