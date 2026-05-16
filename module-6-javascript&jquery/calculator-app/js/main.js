// create a function for clear values
function clrValue()
{
document.getElementById("result").value="";    
}
// slice a values of input create a function 
function slcData()
{
  var slc=document.getElementById("result").value;
  var res=slc.slice(0,-1);
  document.getElementById("result").value=res;  
}
// create a function a for input a button values 
function inpData(val)
{
 document.getElementById("result").value+=val;     
}
