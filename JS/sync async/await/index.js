// await it makes async fxn wait for promise

async function loadfile() {
        let fileLoaded=false;
    if(fileLoaded){
        return("file loaded");
    }
    else{//else is optional
        throw("file not loaded");
    }

}

async function startProcess() {
 
    try{
            // we can have multiple await in one try
    let message=await loadfile();
    console.log(message);

    }
    catch(error){
        console.log(error);
    }
}
startProcess();