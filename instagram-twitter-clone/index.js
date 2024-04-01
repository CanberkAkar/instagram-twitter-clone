var likes_one=document.getElementById("likes_one");
var likes_two=document.getElementById("likes_two");
var likes_three=document.getElementById("likes_three");
var likes_four=document.getElementById("likes_four");
var likes_five=document.getElementById("likes_five");
var likes_six=document.getElementById("likes_six");
var likes_seven=document.getElementById("likes_seven");
var likes_eight=document.getElementById("likes_eight");
var likes_nine=document.getElementById("likes_nine");

var offsets1 = document.getElementById('div1').getBoundingClientRect();
var offsets2 = document.getElementById('div2').getBoundingClientRect();
var offsets3 = document.getElementById('div3').getBoundingClientRect();
var offsets4 = document.getElementById('div4').getBoundingClientRect();
function generateRandom(min = 100, max = 1000) {

    // find diff
    let difference = max - min;

    // generate random number
    let rand = Math.random();

    // multiply with difference
    rand = Math.floor( rand * difference);

    // add with min value
    rand = rand + min;

    return rand;
}

likes_one.value = generateRandom()-20;
likes_two.value = generateRandom()-30;
likes_three.value = generateRandom()+20;
likes_four.value = generateRandom()+22;
likes_five.value = generateRandom()+30;
likes_six.value = generateRandom()+8;
likes_seven.value = generateRandom()+10;
likes_eight.value = generateRandom()+5;
likes_nine.value = generateRandom()+5;

document.getElementById('likes_one').innerText = likes_one.value +" beğenme";
document.getElementById('likes_two').innerText = likes_two.value +" beğenme";
document.getElementById('likes_three').innerText = likes_three.value+" beğenme";
document.getElementById('likes_four').innerText = likes_four.value +" beğenme";
document.getElementById('likes_five').innerText = likes_five.value ;
document.getElementById('likes_six').innerText = likes_six.value ;
document.getElementById('likes_seven').innerText = likes_seven.value ;
document.getElementById('likes_eight').innerText = likes_eight.value ;
document.getElementById('likes_nine').innerText = likes_nine.value ;



$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    if(offsets1.top<scrollPos){
        $('.instagram-heart1').css("animation-duration" , "1000ms");
        $('.instagram-heart1').css("animation-name" , "like-heart-animation");
        $('.instagram-heart1').css("animation-timing-function" , "ease-in-out");
        $('.instagram-heart1').css("animation-play-state" , "running");
        $('.heartIcon1').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon1').css("background-position" , "right");
        $('.heartIcon5').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon5').css("background-position" , "right");
        document.getElementById('likes_one').innerText = likes_one.value+1 +" beğenme";

    }
     if(offsets2.top<scrollPos){
        $('.instagram-heart2').css("animation-duration" , "1000ms");
        $('.instagram-heart2').css("animation-name" , "like-heart-animation");
        $('.instagram-heart2').css("animation-timing-function" , "ease-in-out");
        $('.instagram-heart2').css("animation-play-state" , "running");
        $('.heartIcon2').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon2').css("background-position" , "right");
        $('.heartIcon6').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon6').css("background-position" , "right");
         $('.heartIcon7').css("animation" , "heart-burst .8s steps(28) 1");
         $('.heartIcon7').css("background-position" , "right");
         document.getElementById('likes_two').innerText = likes_two.value+1 +" beğenme";


     }
     if(offsets3.top<scrollPos){
        $('.instagram-heart3').css("animation-duration" , "1000ms");
        $('.instagram-heart3').css("animation-name" , "like-heart-animation");
        $('.instagram-heart3').css("animation-timing-function" , "ease-in-out");
        $('.instagram-heart3').css("animation-play-state" , "running");
        $('.heartIcon3').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon3').css("background-position" , "right");
        $('.heartIcon8').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon8').css("background-position" , "right");
         document.getElementById('likes_three').innerText = likes_three.value+1 +" beğenme";

     }
     if(offsets4.top<scrollPos+200){
        $('.instagram-heart4').css("animation-duration" , "1000ms");
        $('.instagram-heart4').css("animation-name" , "like-heart-animation");
        $('.instagram-heart4').css("animation-timing-function" , "ease-in-out");
        $('.instagram-heart4').css("animation-play-state" , "running");
        $('.heartIcon4').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon4').css("background-position" , "right");

        $('.heartIcon9').css("animation" , "heart-burst .8s steps(28) 1");
        $('.heartIcon9').css("background-position" , "right");
         document.getElementById('likes_four').innerText = likes_four.value+1 +" beğenme";

     }

});


console.log(offsets1.top);


