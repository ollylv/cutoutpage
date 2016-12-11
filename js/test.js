$(document).ready(function(){

    //cashing DOM selectors

    var $commentButton = $('.comment-button');
    var $commentTextareawrapper = $('.comment-add-text');
    var $commentTextarea = $('#comment-textarea');
    var $sendButton = $('.send-button');
    var $commentCounterspan = $('.comment span');


    //hidden on load

    $commentTextareawrapper.hide();
    $sendButton.hide();

    //click listeners

    $('.readmore').on('click', function(){
        $(this).css('display',"none");
        $('.paragraph').css('overflow-y',"auto");
    });

    $commentButton.on('click', function(){
        $commentTextarea.val('');
        $commentTextareawrapper.toggle('fast', function(){
            $sendButton.toggle('fast');
        });
    });

    $sendButton.on('click', function(){

        //input validation if input has a value and also doesn't contain spaces

         if($commentTextarea.val() && !(/^\s+$/.test($commentTextarea.val()))){

            //comment counter

            var currCommentvalue = $commentCounterspan.text();

            currCommentvalue = ++currCommentvalue;
            $commentCounterspan.text(currCommentvalue);

            //adding comment

            $('.comment-container').append('<div class="comment-holder"><p>' + $commentTextarea.val() + '</p>' + '<span class="delete-button">' + 'X' + '</span></div>');
            $commentTextareawrapper.toggle('fast', function(){
                $sendButton.toggle('fast');
            });

        } else {
            alert('Please add a comment with text');
        }

    });

    //comment deletion

    $(document).on('click','.delete-button', function(){
        $(this).parent().remove();
    });

});






