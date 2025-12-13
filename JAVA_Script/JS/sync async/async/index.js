
// const promise=new Promise((resolve,reject)=>{



// });

async function loadfile() {
        let fileLoaded=true;
    if(fileLoaded){
        return("file loaded");
    }
    else{//else is optional
        throw("file not loaded");
    }

}

loadfile().then(value=>console.log(value)).catch(error=>console.log(error));


// promise.then(value=>console.log(value)).catch(error=>console.log(error));



// const promise2=new Promise((resolve)=>{
// setTimeout(resolve,5000);
// });

// promise2.then(()=>console.log("thanks for waiting"));