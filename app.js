var request=require('request');
var yargs=require('yargs');

var argv=yargs.
        options({
        a:{
         demand:true,
            string:true,
            alias:'address',
            describe:'Th address of the location you want to get the weather information about'
        }
        })
        .help()
        .argv;


const url=encodeURIComponent(argv.a);

console.log(url);

request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${url}`,
    json:true
    },(err,request,body)=>{
    if(err){
        console.log("Unable to connecto the Google Servers.")
    }else if(body.status==='ZERO_RESULTS'){
        console.log("Unable to get the Adress asked for. Address Doenat Exists ")
    }else if(body.status==='OK'){

        var address=body.results[0].formatted_address;
        var lat=body.results[0].geometry.location.lat;
        var lan=body.results[0].geometry.location.lng;
        console.log(address);
        console.log(`Latitiue : ${lat}`);
        console.log(`Latitiue : ${lan}`);
    }


});

