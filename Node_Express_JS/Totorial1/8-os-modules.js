const os=require('os');
  
//info about current user
const user=os.userInfo();


console.log(user);

//method returns the system uptime in seconds]
console.log(`the system uptime is ${os.uptime()/60/60} hours`);


const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:`${os.totalmem()/1024/1024/1024} GB`,
    freeMem:`${os.freemem()/1024/1024/1024} GB`,
}

console.log(currentOs);