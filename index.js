let layScreen =  document.querySelector("#layout");
let completeScreen =  document.querySelector("#completeScreen");

function resetForm() {
    document.querySelector("form").reset();
}

function showLoading() {
    layScreen.style.display = "block";
}
function showComplete() {
    completeScreen.style.display = "block";
}
function hideLoading() {
    layScreen.style.display = "none";
}
function hideComplete() {
    completeScreen.style.display = "none";
}
function handleSubmit(event) {
    event.preventDefault();
    showLoading()
    let codigo =  document.querySelector("input[name=Codigo]").value;
    let ponto =  document.querySelector("input[name=Ponto]").value;
    let problema =  document.querySelector("textarea[name=Problema]").value;
    fetch('https://api.sheetmonkey.io/form/txfGUUxBzxfnCNxUEumv2M', {
        method: 'post',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({codigo, ponto , problema})
        
    }).then(response => response.text())
    .then(text => console.log(text)).then(()=>{
        setTimeout(hideLoading,1500);
        showComplete();
        setTimeout(hideComplete,1500);
        resetForm();
    })
    
}

document.querySelector("form").addEventListener("submit",handleSubmit);

