(function($) {

    function DogePlugin(options) {
        this.options = $.extend({}, $.fn.doge.defaults, options);

        // Default wordlist 
        this.list = ["wow", "so doge", "such page", "very cool", "wow"];
        this.list = this.list.concat( this.options.wordList );
        
        this.init();
    }

    DogePlugin.prototype = {
        init: function() {
            // Draw Doge in the bottom of the page
            if ( this.options.showDoge ) {
                this._suchDoge();    
            }
            var t = this;
            soTiming = setInterval(function(){t._manyWords();}, this.options.textRespawn);
            
        },

        destroy: function() {
            // Remove any attached data from your plugin
            this.$el.removeData();
        },

        _suchDoge: function() {
            // Append image to the body tag
            $('body').append('<img id="dogeImg" src="'+ this.options.dogeImage +'">');
              
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
            $("#dogeWord"+id).fadeIn("slow").delay( this.options.textDuration ).fadeOut(300, function(){
				$(this).remove();
			});
            return true; 
        },

        _randomColor: function() {
            var colours = this.options.colours;
            return colours[Math.floor(Math.random() * colours.length)];
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
                "font-size":  this.options.fontSize, 
                "fon-weight": "bold",
                "font-family": "Comic Sans MS",
                "z-index": "10001",
                "text-transform": "lowercase",
                "text-shadow": "none",
            }

            if (this.options.fontBorder ) {
                style["text-shadow"] = "-1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000";
            }

            return style;
        },
    };

    // Start the plugin
    $.fn.doge = function( options ) {
        doge = new DogePlugin(options);
    }

    // Parametrization
    $.fn.doge.defaults = {
        wordList : [],
        showDoge : true,
        fontSize : "2em",
        fontBorder: true,
        dogeImage : "doge.png",
        colours : ["red", "green", "orange", "violet", "aqua", "yellow", "slateblue", "purple", "pink", "lime", "fuchsia", "gold", "indigo"],
        textDuration: 1200,
        textRespawn: 1000,
    };   

}(jQuery));
