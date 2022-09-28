const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');


downloadBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});



const fetchFile = (url)=>{
    fetch(url)
    .then((response) => {
        return response.blob()
    })
    .then( data => {
        let temUrl = URL.createObjectURL(data);
        let aTag = document.createElement('a');
        aTag.href = temUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        // aTag.download = 'download';
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(temUrl);
        downloadBtn.innerText = "Download File";
    })
    .catch(()=> {
        downloadBtn.innerText = "Download File";
        alert("Faild to download file!");
    });
}