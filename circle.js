function peremeter(){
    //alert("Button test");
    let r=parseFloat(document.getElementById("radius").value);
    const pi=22/7;
    document.getElementById("perimeter").value=2*pi*r;
  
}
function area(){
    //alert("Button test");
    let r=parseFloat(document.getElementById("radius").value);
    const pi=22/7;
    document.getElementById("area").value=pi*r*r;
    
}