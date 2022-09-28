const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');


downloadBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    fetchFile(fileInput.value);
});



const fetchFile = (url)=>{
    fetch(url)
    .then((response) => {
        return response.blob()
    })
    .then( data => {
        let temUrl = URL.createObjectURL(data);
        let aTag = createElement('a');
        aTag.href = temUrl;
        aTag.downloa = "filename";
        documents.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    });
}