var request=require('request');

request({
    url:"http://maps.googleapis.com/maps/api/geocode/json?address=Jaypee%20insitute%20of%20information%20technology",
    json:true
},(err,request,body)=>{
    var address=body.results[0].formatted_address;
    var lat=body.results[0].geometry.location.lat;
    var lan=body.results[0].geometry.location.lng;
    console.log(address);
    console.log(`Latitiue : ${lat}`);
    console.log(`Latitiue : ${lan}`);

})

