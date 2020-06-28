function myfunction(){
    var titik = document.getElementById("titik");
    var moreT = document.getElementById("more");
    var btnmore = document.getElementById("btn-more");

    if(titik.style.display === "none"){
        titik.style.display = "inline";
        btnmore.innerHTML = "read more"
        moreT.style.display = "none";
    }else {
        titik.style.display = "none";
        btnmore.innerHTML= "read less";
        moreT.style.display = "inline";
    }
}