function sendId (e) {
    e.preventDefault();
    let url  = e.target.url.value;
    urlArray = url.split('?v=');
    const id = urlArray[1];
    // console.log(id);
    axios.post('http://localhost:3000/getIt', {id : id}).then(res=>{
        // console.log(res.data);
        // const formats = res.data.formats;
        console.log(res)
        if(res.data.msg === 'Invalid request'){
            alert("Invalid Request");
            
        }
        else {
            document.getElementById('main').style.display = "block";
            const downloadUrlLD = res.data.link[243][0];
            const downloadUrlHD = res.data.link[247][0];
            const thumbUrl = res.data.thumb;
            const title = res.data.title;
            document.getElementById('cardi').innerHTML = ` <img class="card-img-top img-fluid" src="${thumbUrl}"> <h5 class="card-title">${title}</h5>`
            document.getElementById('card1').innerHTML =   `<a class="btn btn-info align-middle" href="${downloadUrlLD}" target="_blank"> Click Here For Low Quality</a>`
            document.getElementById('card2').innerHTML =   `<a class="btn btn-info align-middle" href="${downloadUrlHD}" target="_blank"> Click Here For High Quality</a>`
    
        }

    }).catch(err=>{
        alert(err);
    })
}

