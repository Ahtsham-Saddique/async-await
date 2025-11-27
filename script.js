function api()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
{
    console.log("Weather!!..");
    resolve("Suceed");
},2000);
}
    );
}

async function apicall()

{
    await api();
    await api();
}
apicall();