const request=require('request')

const weather=require('./weather')


var locationRequest=(url,callback)=>{
    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${url}`,
        json:true
    },(err,request,body)=>{
        if(err){
            callback("Unable to connecto the Google Servers.")
        }else if(body.status==='ZERO_RESULTS'){
            callback.log("Unable to get the Adress asked for. Address Doenat Exists ")
        }else if(body.status==='OK'){

            var address=body.results[0].formatted_address;
            var lat=body.results[0].geometry.location.lat;
            var lan=body.results[0].geometry.location.lng;
            console.log(address);
            console.log(`Latitiue : ${lat}`);
            console.log(`Latitiue : ${lan}`);
            weather.getWeather(lat,lan,callback);
        }


    });
}


module.exports={
    locationRequest
}