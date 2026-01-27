# what is css ? 
 1. css stands for cascading stylesheet
 2. css used to provides stylesheet on webpage
 3. css step by step provides stylesheet on webpage
 4. css file extension .css
 5. css are provides  three types ...
    a. inline css
    b. internal css
    c. external css

## what is css selector 
   css selector is used to access html elements and provides different-different style on html elements or tags.
 
## types of css selector 

   1. simple selector 
      a. element selector  (tag)
      b. id selector  (#)
      c. class selector  (.)
      d. universal selector  (*)
      
    2. grouping selector
    3. pseudo class selector 
    4. pseudo element selector 
    5. combinator selector 
       a.Descendant combinator selector (space)
       b.Child combinator selector (>)
       c.Next sibling combinator selector (+)
       d. Subsequent-sibling combinator selector (~)

    6. attributes selector          


## all selector examples 
1. universal selector 
  ```
  <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <style type="text/css">
      * 
      {
        margin: 0;
        padding: 0;
        background-color: lightgray;
        font-family: cursive;
      }  
      div 
      {
        width: 50%;
        height: auto;
        margin: auto;
        padding: 25px;
        background-color: white;
      }

    </style>
</head>
<body>
    

    <div>
        <h1>Get in touch with us</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro inventore vitae esse omnis, facere commodi iusto incidunt suscipit cum maxime soluta eum consequatur quisquam praesentium quod, possimus rem molestias fugit.</p>
    </div>
</body>
</html>
  ``` 

2. element selector 

```
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Page Title</title>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' media='screen' href='main.css'>
<script src='main.js'></script>
<style>
body 
{
margin: 0;
padding: 0;
background-color: lightgray;
}
div 
{
width: 30%;
height: auto;
margin: auto;
background-color: white;
padding: 15px;
margin-top: 3%;
border-radius: 35px;
}
</style>
</head>
<body>

<div>
<h1>Contact with us!</h1>
<p><b>👤 Name :</b> Brijesh kumar pandey</p>
<p><b>📞 Mobile :</b> (+91)-9998003879</p>
</div>



<div>
<h1>Contact with us!</h1>
<p><b>👤 Name :</b> Brijesh kumar pandey</p>
<p><b>📞 Mobile :</b> (+91)-9998003879</p>
</div>




<div>
<h1>Contact with us!</h1>
<p><b>👤 Name :</b> Brijesh kumar pandey</p>
<p><b>📞 Mobile :</b> (+91)-9998003879</p>
</div>



<div>
<h1>Contact with us!</h1>
<p><b>👤 Name :</b> Brijesh kumar pandey</p>
<p><b>📞 Mobile :</b> (+91)-9998003879</p>
</div>

</body>
</html>
```



