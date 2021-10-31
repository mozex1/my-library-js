import './lib/lib';

$('button').on('click', function(){
    $('div').eq(2).toggleClass('active');
});

console.log($('div').eq(3).find('.some'));





