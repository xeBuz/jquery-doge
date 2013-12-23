jQuery Doge
===========
![alt text][wow]

Such jQuery Plugin
------
[![alt text][download]](https://github.com/xeBuz/jquery-doge/archive/master.zip)


Basic usage
------
 ```html
<script>
$(document).ready( function() {
    // Create an array with some words
   $('body').doge({ 
       wordList : ["such page", "lorem impsum", "so cool", "much jquery", "kitten", "such demo", "Kitten Ipsum"]
   });
});
</script>
 ```
 
Parameters
------
 ```html
<script>
// Default values
$(document).ready( function() {
   $('body').doge({ 
       wordList : ["such page", "lorem impsum", "so cool", "much jquery", "text", "such demo", "Kitten Ipsum"],
       showDoge : true,
       fontSize : "2em",
       fontBorder: true,
       dogeImage : "doge.png",
       colours : ["red", "green", "orange", "violet", "aqua", "yellow", "slateblue", "purple", "pink", "lime", "fuchsia", "gold", "indigo"],
       textDuration: 1200,
       textRespawn: 1000,       
   });
});
</script>
 ```
 
 
Demo
-----
[Example page](http://jesusroldan.com/doge/demo.html)


[wow]: http://i.imgur.com/d9YuYwo.png "wow"
[download]: http://i673.photobucket.com/albums/vv93/sudheer_2510/bth_Download-button.gif "Download package"
