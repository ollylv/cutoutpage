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

    //variables

    var wordplacement = 57;
    var readMore = 'Read&nbspMore';
    var readLess = 'Read&nbspLess';
    
    putReadmore($paragraphText,wordplacement,readMore,readLess);

    //hidden on load

    $commentTextareawrapper.hide();
    $sendButton.hide();
    $alert.hide();

    //click listeners

    $paragraphText.find('.readmore').on('click', function(){
        var $this = $(this);
        $this.hide('fast', function(){
            //css ;/ .hide() .show() turns display into inline-block, solution is to add a function, but it's still not the optimal way..
            $paragraph.find('p span').css('display', 'inline').show(function(){
                $paragraphText.find('.readless').show();
            });
        });
    });

    $paragraphText.find('.readless').on('click', function(){
        var $this = $(this);
        $this.hide('slow', function(){
            $paragraph.find('p span').hide('fast', function(){
                $paragraphText.find('.readmore').show();
            });
        });
    });


    $commentButton.on('click', function(){
        clearAll();
        $commentTextarea.val('');
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
                $commentTextarea.val('');
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


    function putReadmore(textcontainer,wordplacement,readMore,readLess){

        var wordplace = wordplacement;
        var words = $.trim(textcontainer.html()).split(" ");
        var textlength = words.length;

        if(textlength < wordplacement){wordplace = textlength}

        words.splice(wordplace,0,'<a class="readmore">'+ readMore + '</a>');
        words.splice(++wordplace,0,'<span>');

        var newtextlenght = words.length;

        words.splice(newtextlenght,0,'<a class="readless">' + readLess +'</a>');

        var wordsTostring = words.toString();
        var text = (wordsTostring.replace(/,,/g,'&#44')).replace(/,/g,' ');

        textcontainer.html(text);
    }


    //comment deletion + counter

    $(document).on('click','.delete-button', function(){
        var currCommentvalue = $commentCounterspan.text();
        currCommentvalue = --currCommentvalue;
        $commentCounterspan.text(currCommentvalue);
        $(this).parent().remove();
    });
});






