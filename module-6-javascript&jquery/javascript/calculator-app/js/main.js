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
// create a function for final Results in calculator 
function finalResult()
{ 
  var x=document.getElementById("result").value;
  var y=eval(x);
  document.getElementById("result").value=y;
}

// calculate a square 
function Square()
{
var sq=document.getElementById("result").value;
var res=Math.pow(sq,2);
document.getElementById("result").value=res;
}

// calculate a squareRoot 
function SquareRoot()
{
var sq=document.getElementById("result").value;
var res=Math.sqrt(sq);
document.getElementById("result").value=res;

}


// right click disables 

const protectedImage = document.getElementById('my-protected-img');

protectedImage.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

