$(document).ready(function () {

    /* 탑버튼 */
    $(".to_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1200,"swing");
    });
    /*탑버튼(스크롤탑=0일시 안보이게)*/
    $(window).scroll(function(){
        var nowScroll = $(this).scrollTop();
        console.log(nowScroll);
        if(nowScroll<100){
            $(".to_top").addClass("on");
            
        }else{
            $(".to_top").removeClass("on");

        }
    });


    /* 배너 */
    var $bnnNum=0;
    var $lastNum=$(".slide_wrap>div").size()-1
    function autoBanner(){
        if($bnnNum>=$lastNum){$bnnNum=-1;}//현재 배너가 마지막 배너 번호 보다 크면 다시 -1로 되돌아 가야 함
        $bnnNum++; //0

        //모든 active 클래스 삭제
        $(".slide_wrap>div").removeClass("active")
        $(".slide_ctrl li a").removeClass("active")

        //active 클래스가 div에 추가되게
        $(".slide_wrap>div").eq($bnnNum).addClass("active")
        $(".slide_ctrl li a").eq($bnnNum).addClass("active")

    }
    var $bnnNum = setInterval(autoBanner,2000);

    //배너 재생 멈춤
    var flag = true;
    $(".pause").click(function(){
        if(flag==1){
            //멈춰라
            clearInterval($autoBanner);
            //이미지바꾸기
            flag=false;
        } else {
            //다시시작해라
            var $bnnNum = setInterval(autoBanner,2000);
            //이미지바꾸기
            flag=true;
        }
    });

    //슬라이드 액티브시 동그라미 불들어오기
    


//주메뉴슬라이딩
        //<![CDATA[
        $("nav>ul>li>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "380px"
            }, 200);

            $("nav>ul>li>ul").css("display", "none");
            $(this).next().css("display", "block");

            $("nav>ul>li").removeClass("on");
            $(this).parent().addClass("on");

        });

        $("nav").bind("mouseleave blur", function () {
            $(".header_wrap").stop().animate({
                "height": "70px"
            }, 300, "linear");
            $("nav>ul>li>ul").css("display", "none");

            $("nav>ul>li").removeClass("on");

        });
        //]]>

    

}); // 독레디닫기