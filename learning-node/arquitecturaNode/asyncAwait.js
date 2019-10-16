const promiseFunction = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random() < 0.5){
                resolve('hello word');
            }else{
                reject(new Error('hello error'));
            }
        },2000);
    })
}

async function asyncAwait(){
    try{
        const msg = await promiseFunction();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}

asyncAwait();