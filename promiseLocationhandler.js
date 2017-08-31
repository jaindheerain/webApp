
const request=require('request');

var geoCodeLocation=(location)=>{

    //console.log(url);
    return new Promise((resolve,reject)=>{

        var url=encodeURIComponent(location);
        console.log(url);
        request({
            url:`http://maps.googleapis.com/maps/api/geocode/json?address=${url}`,
            json:true
        },(error,request,body)=>{
            if(error){
                console.log(error);
                reject("Unable to connecto the Google Servers.")
            }else if(body.status==='ZERO_RESULTS'){
                reject("Unable to get the Adress asked for. Address Doenat Exists ")
            }else if(body.status==='OK'){
                var addressObj=
                    {
                        address:body.results[0].formatted_address,
                        lat:body.results[0].geometry.location.lat,
                        lan:body.results[0].geometry.location.lng
                    }

                    console.log(addressObj);

               resolve(addressObj);
            }
    });
    })
}
var mainPromise=(address)=>
{


    geoCodeLocation(address)
        .then((result) => {
            return new Promise((resolve, reject) => {
                request({
                    url: `https://api.darksky.net/forecast/caa27a495a023d2104783f8dc585c3fb/${result.lat},${result.lan}`,
                    json: true
                }, (error, response, body) => {

                    if (!error) {
                        var weather = {
                            temp: body.currently.temperature,
                            apparentTemp: body.currently.apparentTemperature
                        }
                        resolve(weather);
                    }
                    else {
                        console.log(error);
                        reject("Some error Occured");
                    }
                });
            })
        }).then((weather) => {
        console.log(weather);
    }).catch((errorMessage) => {
        console.log(errorMessage);
    });
}
module.exports={
    mainPromise
}