/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <jesus.roldan@gmail.com> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Jesús Roldán
 * ----------------------------------------------------------------------------
 */

(function($) {

    function DogePlugin(wordlist, options) {
        // Default wordlist 
        this.list = ["wow", "so doge", "such page", "very cool", "wow"];
        this.list = this.list.concat(wordlist);
        
        this.options = $.extend({}, $.fn.doge.defaults, options);
        this.init();
    }

    DogePlugin.prototype = {
        init: function() {
            // Draw Doge in the bottom of the page
            if ( this.options.showDoge ) {
                this._suchDoge();    
            }
            var t = this;
            soTiming = setInterval(function(){t._manyWords();}, 1000);
            
        },

        destroy: function() {
            // Remove any attached data from your plugin
            this.$el.removeData();
        },

        _suchDoge: function() {
            // Append image to the body tag
            $('body').append('<img id="dogeImg" src="doge.png">');
            
            // Set correct position
            $("#dogeImg").css({
                "position": "fixed", 
                "bottom": "0px",
                "right": "10%",
                "z-index": "10000",
                "margin": "0px",
                "padding": "0px",
            });
        },

        _manyWords: function() {
            var id = Date.now();
            var word = '<div id="dogeWord'+id+'"><p>' + this._randomWord() + '</p></div>'; 
            var style = this._getStyle();
            
            $("body").append(word);
            $("#dogeWord"+id).css(style);
            $("#dogeWord"+id).fadeIn("slow").delay( 1200 ).fadeOut("slow");     

            return true; 
        },

        _randomColor: function() {
            var colors = ["red", "green", "orange", "violet", "aqua", "yellow", "slateblue", "purple", "pink", "lime", "fuchsia", "gold", "indigo"];
            return colors[Math.floor(Math.random() * colors.length)];
        },

        _randomWord: function() {
            return this.list[Math.floor(Math.random() * this.list.length)];
        },

        _getStyle: function() {
            // Get random positions
            do { var h = Math.floor( Math.random() * $(window.top).height() - 100 ); } while (h < 100);
            do { var w = Math.floor( Math.random() * $(window.top).width() - 250 ); } while (w < 250);

            // Generate Style
            var style = { 
                "display": "none",
                "position": "fixed", 
                "color": this._randomColor(), 
                "top":  h,
                "right": w, 
                "font-size": "2em",
                "fon-weight": "bold",
                "font-family": "Comic Sans MS",
                "z-index": "10001",
                "text-shadow": "-1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000",
            }
            return style;
        },
    };

    // Start the plugin
    $.fn.doge = function(wordlist, options ) {
        this.w = wordlist;
        doge = new DogePlugin(wordlist, options);
    }

    // Future parametrization
    $.fn.doge.defaults = {
        showDoge : true,
        //font-size
        //doge-image
        //doge-size
        //colors
        //font-css
        //delay-each-text
        //
    };   

}(jQuery));