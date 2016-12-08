$(document).ready(function(){

    //hidden on load

    $('.comment-add-text').hide();
    $('.send-button').hide();

    //click listeners

    $('.readmore').on('click', function(){
        $(this).css('display',"none");
        $('.paragraph').css('overflow-y',"auto");
    });

    $('.comment-button').on('click', function(){
        $('#comment-textarea').val('');
        $('.comment-add-text').toggle('fast', function(){
            $('.send-button').toggle('fast');
        });
    });

    $('.send-button').on('click', function(){
       $('.comment-container').append('<p>'+ $('#comment-textarea').val() +'</p>');
       $('.comment-add-text').toggle('fast', function(){
            $('.send-button').toggle('fast');
        });

        //little something something
        commentCounter();
    });

    function commentCounter(){
        if($('.comment-container').length > 0 && $('.comment-container p:last').text().length > 0){
            var currCommentvalue = $('.comment span').text();
            currCommentvalue = ++currCommentvalue;
            $('.comment span').text(currCommentvalue);
        }
    }
});






