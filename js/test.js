$(document).ready(function(){

    //cashing DOM selectors

    var $commentButton = $('.comment-button');
    var $commentTextareawrapper = $('.comment-add-text');
    var $commentTextarea = $('#comment-textarea');
    var $sendButton = $('.send-button');
    var $commentCounterspan = $('.comment span');
    var $commentContainer = $('.comment-container');
    var $alert = $('.alerts');
    var $fill = $('.fill');
    var $nospace = $('.nospace');
    var $paragraph = $('.paragraph');
    var $paragraphText = $('.paragraph p');
    var $readLess = $('.readless');
    var wordplacement = 57;
    var textlength;
    var readMore = 'Read&nbspMore';


    putReadmore($paragraphText,wordplacement,readMore);

    //hidden on load

    $commentTextareawrapper.hide();
    $sendButton.hide();
    $alert.hide();
    $readLess.hide();

    //click listeners

    $paragraphText.find('.readmore').on('click', function(){
        var $this = $(this);
        $this.hide('fast', function(){
            //css ;/ .hide() .show() turn display into inline-block, solution is to add a function, but it's still not the optimal way..
            $paragraph.find('p span').css('display', 'inline').show(function(){
                $readLess.show();
            });
        });
    });

    $readLess.on('click', function(){
        var $this = $(this);
        $this.hide('fast', function(){
            $paragraph.find('p span').hide('fast', function(){
                $paragraphText.find('.readmore').show();
            });
        });
    });


    $commentButton.on('click', function(){
        clearAll();
        $commentTextareawrapper.toggle('fast', function(){
            $sendButton.toggle('fast');
        });
    });

    $sendButton.on('click', function(){
        clearAll();
        var notatrimmedValue = $commentTextarea.val();
        var trimmedValue = $commentTextarea.val().trim();

        if(notatrimmedValue){
            if(notatrimmedValue === trimmedValue){
                // comment counter
                var currCommentvalue = $commentCounterspan.text();
                currCommentvalue = ++currCommentvalue;
                $commentCounterspan.text(currCommentvalue);
                //adding a comment
                $commentContainer.append('<div class="comment-holder"><p>' + $commentTextarea.val() + '</p>' + '<span class="delete-button">' + 'X' + '</span></div>');
                $commentTextareawrapper.toggle('fast', function(){
                    $sendButton.fadeToggle('fast');
                });

                clearAll();
            } else {
                $nospace.fadeIn('fast');
            }
        } else {
            $fill.fadeIn('fast');
        }
    });

    //focus

    $commentTextarea.on('focus', function(){
      clearAll();
    });

    //functions

    function clearAll(){
        $alert.hide();
    }


    function putReadmore(textcontainer,wordplacement,readMore){

        var wordplace = wordplacement;
        var words = $.trim(textcontainer.html()).split(" ");
        textlength = words.length;

        if(textlength < wordplacement){wordplace = textlength}

        words.splice(wordplace,0,'<a class="readmore">'+ readMore + '</a>');
        words.splice(++wordplace,0,'<span>');
        var wordsTostring = words.toString();
        var text = (wordsTostring.replace(/,,/g,'&#44')).replace(/,/g,' ');
        textcontainer.html(text);
    }


    //comment deletion

    $(document).on('click','.delete-button', function(){
        $(this).parent().remove();
    });

});






