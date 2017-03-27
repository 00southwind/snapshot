jQuery(document).ready(function($) {
            $('a[data-rel^=lightcase]').lightcase();
            
            $('a[data-rel="lightcase:pic_group:slideshow"]').lightcase({showSequenceInfo : false, transition : 'scrollHorizontal'});
            
            $('a[data-rel="lightcase:pic_group"]').lightcase({showSequenceInfo:false});
            
            $('#pic1').lightcase({transition : 'fade'});
            
            $('#pic2').lightcase({transition : 'fade'});
            
            $('#pic3').lightcase({transition : 'elastic'});
            
            $('#pic4').lightcase({transition : 'scrollTop'});

            $('#pic5').lightcase({transition : 'elastic'});
            
            $('#pic6').lightcase({transition : 'fade'});
            
            $('#pic7').lightcase({transition : 'elastic'});
            
            $('#pic8').lightcase({transition : 'scrollTop'});
            
            //video as html5 with fallback
            $('#various5').lightcase({
                showSequenceInfo:false,
                onStart:function() {
                    html5media();
                }
            });
            
            // video as iframe
            $('#various6').lightcase({
                iframe : {
                    width : 516,
                    height : 315,
                    frameborder : 0
                }
            });
            
            // video as flash
            $('#various7').lightcase({
                type : 'flash',
                flash : {
                    width : 516,
                    height : 315
                }
            });
        });