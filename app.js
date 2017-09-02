var request=require('request');
var yargs=require('yargs');

const geocode=require('./geocode');

const  promise=require('./promiseLocationhandler');

const address="Jaypee institute of information technology"

var argv=yargs.
        options({
        a:{
         demand:false,
            string:true,
            alias:'address',
            describe:'Th address of the location you want to get the weather information about'
        }
        })
        .help()
        .argv;
/*
const url=encodeURIComponent(argv.a);

var body=geocode.locationRequest(url,(response)=>{
    console.log(response);
});
*/
if(!argv.a){
    console.log("We no address was entered so the default address is being used");
    promise.mainPromise(address);

}
else {
    promise.mainPromise(argv.a);
}

