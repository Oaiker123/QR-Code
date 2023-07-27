let Box = document.querySelector(".Box");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        Box.classList.add("display-Image");
    }else{
        qrImage.src = "404_notFound.png";
        qrText.classList.add("show-error");
        setTimeout(()=>{
            qrText.classList.remove("show-error");
        },1000);
    }
}