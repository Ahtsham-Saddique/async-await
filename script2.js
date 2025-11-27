function getdata(data)

{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            console.log("data ",data);
            resolve("suceed");

        },2000)
    })
}

async function fcall()
{
    await getdata(1);
    await getdata(2);
    await getdata(3);
}
fcall();
