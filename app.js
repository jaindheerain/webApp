var request=require('request');
var yargs=require('yargs');

const geocode=require('./geocode');

const  promise=require('./promiseLocationhandler');

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
/*
const url=encodeURIComponent(argv.a);

var body=geocode.locationRequest(url,(response)=>{
    console.log(response);
});
*/

promise.mainPromise(argv.a);

