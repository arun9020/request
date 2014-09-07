var request = require('request');
console.log("Running");
var i =9620846900;
while(  i < 9620846999){
request({uri:"https://phpwriter-1sphirelabs.rhcloud.com/callerindex.php?number="+i,
        method: "GET"},
        function(err,resp,body){
         console.log(body);
        });
++i;
}
