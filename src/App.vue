<template>
  <div id="app">
  	    <nav class="navbar navbar-inverse">
      <div class="container" style="position:relative;">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-3">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="">B</a><i class="fa fa-caret-right fa-6" aria-hidden="true"></i>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <span class="nav-title">Prix de I'imaginaire Booktubers App</span>
        <div class="collapse navbar-collapse" id="navbar-collapse-3">
          <ul class="nav navbar-nav navbar-right">

            <li>
            	<router-link to="/Home" class="btn btn-default btn-outline btn-circle collapsed nav-btn">Home</router-link>
            	<router-link to="/About" class="btn btn-default btn-outline btn-circle collapsed nav-btn">About</router-link>
            	<router-link to="/jury" class="btn btn-default btn-outline btn-circle collapsed nav-btn">Jury</router-link>
            	<router-link to="/Login" class="btn btn-default btn-outline btn-circle collapsed nav-btn">Login</router-link>

            </li>
          </ul>
          <div class="collapse nav navbar-nav nav-collapse slide-down" id="nav-collapse3">
            <form class="navbar-form navbar-right" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
              <button type="submit" class="btn btn-danger"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></button>
            </form>
          </div>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav><!-- /.navbar -->
   <router-view></router-view>
    <footer class="container">
      <div class="row">
          <div class="col-sm-4 text-left">
              <p class="right-text">All right reserved by booktubers</p>
          </div>
          <div class="col-sm-4 socail-media" style="margin: 17px auto;">
               <a href=""><i class="fa fa-facebook-f fa-1x social"></i></a>
              <a href=""><i class="fa fa-twitter fa-1x social"></i></a>
              <a href=""><i class="fa fa-google fa-1x social"></i></a>
              <a href=""><i class="fa fa-envelope fa-1x social"></i></a>
          </div>
          <div class="col-sm-4 text-right">
              <p class="right-text">Terms and Conditions</p>
          </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/*
Code snippet by maridlcrmn for Bootsnipp.com
Follow me on Twitter @maridlcrmn
*/

.navbar-brand { position: relative; z-index: 2; }

.navbar-nav.navbar-right .btn { position: relative; z-index: 2; padding: 4px 20px; margin: 10px auto; transition: transform 0.3s; }

.navbar .navbar-collapse { position: relative; overflow: hidden !important; }
.navbar .navbar-collapse .navbar-right > li:last-child { padding-left: 22px; }

.navbar .nav-collapse { position: absolute; z-index: 1; top: 0; left: 0; right: 0; bottom: 0; margin: 0; padding-right: 120px; padding-left: 80px; width: 100%; }
.navbar.navbar-default .nav-collapse { background-color: #f8f8f8; }
.navbar.navbar-inverse .nav-collapse { background-color: #222; }
.navbar .nav-collapse .navbar-form { border-width: 0; box-shadow: none; }
.nav-collapse>li { float: right; }

.btn.btn-circle { border-radius: 50px; }
.btn.btn-outline { background-color: transparent; }

.navbar-nav.navbar-right .btn:not(.collapsed) {
    background-color: rgb(111, 84, 153);
    border-color: rgb(111, 84, 153);
    color: rgb(255, 255, 255);
}

.navbar.navbar-default .nav-collapse,
.navbar.navbar-inverse .nav-collapse {
    height: auto !important;
    transition: transform 0.3s;
    transform: translate(0px,-50px);
}
.navbar.navbar-default .nav-collapse.in,
.navbar.navbar-inverse .nav-collapse.in {
    transform: translate(0px,0px);}
    @media screen and (max-width: 767px) {.navbar .navbar-collapse .navbar-right > li:last-child {padding-left: 15px;padding-right: 15px; }.navbar .nav-collapse { margin: 7.5px auto; padding: 0; }
    .navbar .nav-collapse .navbar-form { margin: 0; }
    .nav-collapse>li {      float: none; }
    .navbar.navbar-default .nav-collapse,
    .navbar.navbar-inverse .nav-collapse {
        transform: translate(-100%,0px);
    }
    .navbar.navbar-default .nav-collapse.in,
    .navbar.navbar-inverse .nav-collapse.in {
        transform: translate(0px,0px);
    }
    .navbar.navbar-default .nav-collapse.slide-down,
    .navbar.navbar-inverse .nav-collapse.slide-down {
        transform: translate(0px,-100%);
    }
    .navbar.navbar-default .nav-collapse.in.slide-down,
    .navbar.navbar-inverse .nav-collapse.in.slide-down {
        transform: translate(0px,0px);
    }
}
span.nav-title {
    font-size: 1.5em;
    color: #a6725e;
    padding: 4px 20px;
    margin: 10px auto;
    font-weight: 600;
    display: block;
}   .navbar.navbar-inverse {
    background: #fff ;
    border-color: #fff;
    margin: 0;
}
.navbar.navbar-inverse .nav-btn {
     background: linear-gradient(to right, #542c71 , #e5a84b);
     color: #fff;
     background: linear-gradient(to right, #542c71 , #e5a84b);
    color: #fff;
    font-size: 1em;
    padding: 8px 20px;
    font-weight: 600;
    margin: 0;
    display: inline-block;
}

.page-head{
     background: linear-gradient(to right, #542c71 , #e5a84b);
     color: #fff;
     background: linear-gradient(to right, #542c71 , #e5a84b);
    color: #fff;
}

.page-head h3 {
    padding: 20px 0;
    margin: 0;
    display: inline-block;
}

.page-head img {
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}
.navbar-brand {
    color: #2d3e50;
    font-size: 2.8em;
    font-weight: 600;
    padding-right: 5px;
}

.fa-caret-right {
    font-size: 3.8em;
    color: #9331ff;
}

.booktubers:nth-Child(1){
    margin: 60px auto 0 ;
}

.booktubers {
    margin: 0px auto ;
    background: white;
    width: 50%;
    box-shadow: 1px 1px 5px 0px #9e9e9e;
    padding: 15px;
}

.booktubers .image {
    width: 60px;
    border-radius: 50%;
    border: 1px solid #d4d4d4;
}

.booktubers .title{
    font-size: 1.4em;
    font-weight: 600;
    margin: 0;
    color: #9370ad;
}
.booktubers .sub-title{
    font-size: 1.1em;
    color: #b1b1b1;
}.booktubers .place{
    font-size: 1.2em;
    font-weight: 600;
}

.navbar .navbar-collapse{
    display: inline-block !important;
    float: right;
    position: absolute;
    right: 0;
    top: 11px;
}

footer {
    padding: 20px 0 0 0;
}

footer .right-text {
    margin: 22px auto;
    font-size: 1em;
    color: #936fad;
}

footer .socail-media i {
    font-size: 1.5em;
    color: #542e6f;
    padding: 0px 5px;
}

</style>
