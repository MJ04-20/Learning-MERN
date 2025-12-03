console.time("responseTime");

// alert("click the ok button");//this is sync
setTimeout(()=> console.log ("hello"),3000);//this is async


console.timeEnd("responseTime")