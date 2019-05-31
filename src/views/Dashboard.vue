<template>
  <div class="container">
    <div class="sub-container">

        <section class="nav-sec">
                  <p>load bar</p>
                  <div class="complete">
                         <div class="current"></div>
                  </div>
        </section>

        <section class="side-nav">
        </section>

        <section class="cards-sec">
             <div class="card-container">
             </div>       
        </section>

    </div>
  </div>
</template>

<script>
import { setTimeout, setInterval, clearInterval } from 'timers';
import $ from "jquery";
export default {
name:'dashboard',
methods:{
}
}

$("document").ready(function(){
   
   // creating cards
   var parent=document.getElementsByClassName("card-container");
 
    for(var i=0;i<5;i++){
      
      var child =document.createElement("div");
          child.setAttribute('class','card');
          child.setAttribute('id','c'+i);
          child.style.backgroundColor="white";
          child.style.height="300px";
          child.style.width="400px";
          child.style.display="inline-block";
          child.style.float="left";
          child.style.margin="20px";
          child.style.position="relative";

      var el=document.createElement("p");
      el.setAttribute('id','card-p'+i);
      var node = document.createTextNode("card data");
      
      el.appendChild(node);
        
      child.appendChild(el);
      parent[0].appendChild(child);
    }
 
 //loading json data into cards and showing loading bar while doing so
 function getdata()
 {
    
//    $.getJSON("https://httpbin.org/get", 
//     function(data) {
//        convert(data);
        
//     }
// );

   var data = {"name":"divij", "age":20, "city":"new delhi", "phone":9971, "rank":"420"};
   convert(data);
 }

 function convert(data)
 { 
  
    var keysbyindex = Object.keys(data);
    for (var i=0; i<keysbyindex.length; i++)
     {
         document.getElementById("c"+i).style.opacity=0;
         document.getElementById("card-p"+i).innerHTML=data[keysbyindex[i]];
     }
        
 }

 
getdata();

showloading();

})
   
 function showloading()
 {
      var load=document.getElementsByClassName("current");
      var interval,w=0, i = 0;
     
      function dostuff() {

       document.getElementById("c"+i).style.opacity=1;
       w=w+20;
       load[0].style.width=w+"%";
       

        if(i < 4) i++;
        else clearInterval(interval);

      }

       interval = setInterval(dostuff, 1000);
   
 }       
    



</script>

<style scoped type="scss">
     .card-container{
      width:100%;
      height:100%;
      /* display: flexbox;
      display: flex;
      flex-wrap: wrap; */
       
     }
     .cards-sec,.side-nav{
       display: inline-block;
       position: relative;
       float:left;
     }
     .cards-sec{
       background-color: #f7f7f7;
       width:80%;
       height:100%;
       /* remove scroll */
       overflow: scroll;
       

     }
     .side-nav{
       background-color: #2a3f54;
       width:20%;
       height:100%;

     }
     .container{
       width:100%;
       height:100%;
       /* absolute */
       position: fixed;
       background-color: black;
       top:0;
       left:0;
       
       
     }
     .sub-container{
       position: relative;
       width:100%;
       height:100%;
       
     }
     .nav-sec{
       background-color: #ededed;
       width:100%;
       height:110px;
       position: relative;
       padding:10px;
       
       
     }
     
     .complete{
       
       display: inline-block;
       width:70%;
       height:30px;
       position: relative;
       background-color:lightgreen;
       
     }
     .current{
       
       position: absolute;
       height:30px;
       width:0%;
       background-color: green;
       top:0;
       left:0;
       transition: 0.5s all ease;
     }
</style>
