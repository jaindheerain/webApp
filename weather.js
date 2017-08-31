var request=require('request')


var getWeather=(lat,lng,callback)=>{

    request({
        url:`https://api.darksky.net/forecast/caa27a495a023d2104783f8dc585c3fb/${lat},${lng}`,
        json:true
    },(error,response,body)=>{

        if(!error){
            var weather={
                temp:body.currently.temperature,
                apparentTemp:body.currently.apparentTemperature
            }
            callback(weather);
        }
        else {
            console.log(error);
            callback("Some error Occured");
        }
    });
}

module.exports={
    getWeather
}