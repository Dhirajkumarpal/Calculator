function change_after_api(){
/*
let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) { /* code if successful */ /*},
  function(error) { /* code if some error *//* }
);
*/
//Producing Code" (May take some time)
  fetch("https://myjson.dit.upm.es/api/bins/hmc").then((res)=>{
    console.log("inside res");
  }).then((error)=>{
  
  console.log("catch inside");

var b={"data":[{"title":"Mul","operation":"*"},{"title":"Div","operation":"/"},{"title":"Add","operation":"+"},{"title":"Sub","operation":"-"},{"title":"Res","operation":"="}]}

  /* for(var j=0;j<b.data.length;j++){ 

   var All = document.getElementsByTagName("div");
  for (var i = 0; i < All.length; i++)       {
    if (All[i].getAttribute('data-op') == b.data[j].operation) { 
      All[i].innerHTML=b.data[j].title;
      
      break;
     }
  }
   }*/
    for(var j=0;j<b.data.length;j++){ 
   if(b.data[j].operation!=='='){
   var sel=document.getElementById('operator');
  sel.innerHTML+='<div class="col-6 bg-primary border rounded text-center" id="c" onclick="operator_clicked(this)" data-op='+b.data[j].operation+' >'+b.data[j].title+'</div>';
   }
   else{
     var sel=document.getElementById('operator');
  sel.innerHTML+='<div class="col-12 bg-primary border rounded text-center" id="c" onclick="result()" data-op='+b.data[j].operation+' >'+b.data[j].title+'</div>';
   
   }

    
     }
  });
  
 


}
change_after_api();


function operand_clicked(object){
  var datavalue=object.getAttribute('data-value')
  console.log(datavalue);
  
  
  var str=document.getElementById("text").value;
  str=str+datavalue;
  document.getElementById("text").value=str;
}


function operator_clicked(object){
  var datavalue=object.getAttribute('data-op')
  console.log(datavalue);
  
  
  var str=document.getElementById("text").value;
  str=str+datavalue;
  document.getElementById("text").value=str;
}


function result(){
  console.log("inside result")
  var str=document.getElementById("text").value;
    console.log(str)

  var arr=["",""];
  var j=0;
  var op;
  for (var i = 0; i < str.length; i++) {
  
    if(str.charAt(i)==='+' || str.charAt(i)==='-' || str.charAt(i)==='*' || str.charAt(i)==='/'){
     console.log(arr[0]+"printingarr[0]")
  op=str.charAt(i);
  j=j+1;
      
    }else{
      
   arr[j]=arr[j]+str.charAt(i);
    }
}
   


  arr[0]=Number(arr[0]);
  arr[1]=Number(arr[1]);
  if(op=='+'){
    document.getElementById("text").value=arr[0]+arr[1];
  }
  else if(op=='-'){
    document.getElementById("text").value=arr[0]-arr[1];
  }
  else if(op=='*'){
    document.getElementById("text").value=arr[0]*arr[1];
  }
  else if(op=='/'){
    document.getElementById("text").value=arr[0]/arr[1];
  }



}


function clear(){
  console.log("clear callled");
  document.getElementById("text").value='';
 
}