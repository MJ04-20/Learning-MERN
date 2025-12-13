
const promise=new Promise((resolve,reject)=>{

    let fileLoaded=false;
    if(fileLoaded){
        resolve("file loaded");
    }
    else{//else is optional
        reject("file not loaded");
    }


});


promise.then(value=>console.log(value)).catch(error=>console.log(error));



const promise2=new Promise((resolve)=>{
setTimeout(resolve,5000);
});

promise2.then(()=>console.log("thanks for waiting"));