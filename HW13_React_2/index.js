


var MyData = new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric' , minute: 'numeric' };
const datemap = MyData.toLocaleString ('en-GB', options);

console.log("This time to Italy : " + datemap );
console.log("This time to Germany : " + datemap);