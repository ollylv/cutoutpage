$(document).ready(function(){

    //cashing DOM selectors

    var $commentButton = $('.comment-button');
    var $commentTextareawrapper = $('.comment-add-text');
    var $commentTextarea = $('#comment-textarea');
    var $sendButton = $('.send-button');
    var $commentCounterspan = $('.comment span');
    var $commentContainer = $('.comment-container');
    var $alertFirst = $('.alert-first');
    var $alertSecond = $('.alert-second');


    //hidden on load

    $commentTextareawrapper.hide();
    $sendButton.hide();
    $alertFirst.hide();
    $alertSecond.hide();

    //click listeners

    $('.readmore').on('click', function(){
        $(this).css('display',"none");
        $('.paragraph').css('height',"auto");
        $('.paragraph p span').css('display',"initial");
    });

    $commentButton.on('click', function(){
        clearAll();
        $commentTextareawrapper.toggle('fast', function(){
            $sendButton.toggle('fast');
        });
    });

    $sendButton.on('click', function(){

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

            } else {
                $alertSecond.fadeIn('fast');
            }
        } else {
            $alertFirst.fadeIn('fast');
        }

    });

    // clear function

    $commentTextarea.on('click', function(){
        clearAll();
    });

    function clearAll(){
        $commentTextarea.val('');
        $alertFirst.hide();
        $alertSecond.hide();
        $
    }



    //comment deletion

    $(document).on('click','.delete-button', function(){
        $(this).parent().remove();
    });

});






