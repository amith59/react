<!DOCTYPE html>
<html>

<body>

<h1>Function</h1>

<p>This demonstrates a regular function, NOT an arrow function.</p>

<p id="demo"></p>
  
<script>
hello = function() {
  return "Hello World!";
}

document.getElementById("demo").innerHTML = hello();
</script>

</body>
</html>
