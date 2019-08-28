var home = `    <nav class="navbar navbar-inverse">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="#" >CatVideos</a>
  </div>
  <ul class="nav navbar-nav">
    <li class="active" onclick="homesite()"><a href="#">Home</a></li>
    <li><a onclick="vidsite()" href="#">Make ur vid</a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
</div>
</nav>

<div class="container">
<h1 style="color: black;">CatMemes for everybody!</h3>
<p>Unfinished website!</p>
</div>`;
var vid = `    <nav class="navbar navbar-inverse">
<div class="container-fluid">
  <div class="navbar-header">
    <a class="navbar-brand" href="#" >CatVideos</a>
  </div>
  <ul class="nav navbar-nav">
    <li onclick="homesite()"><a href="#">Home</a></li>
    <li onclick="vidsite()" class="active"><a href="#">Make ur vid</a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
</div>
</nav>

<div class="container">
<form ref='uploadForm' 
  id='uploadForm' 
  action='/upload' 
  method='post' 
  encType="multipart/form-data">
    <input type="file" name="sampleFile" />
<div class="g-recaptcha" data-sitekey="6LdpY7UUAAAAAEcYYhx830cbHysb52iErB7t0Mja"></div>
<input type='submit' value='Upload!' />
<script type="text/javascript">
  var onloadCallback = function() {
    alert("grecaptcha is ready!");
  };
</script>

</form>     
Please upload .mp4 files because i havent made a filter YET.
</div>`;

function vidsite() {
    document.getElementById('eweq').innerHTML = vid;
}
function homesite() {
    document.getElementById('eweq').innerHTML = home;
}
