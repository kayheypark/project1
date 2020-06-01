$(document).ready(function () {

    /* 탑버튼 */
    $(".to_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},2000,"swing");
    });

    /* 주메뉴 */
    var $bnnNum=0;
    var $lastNum=$(".slide_wrap>div").size()-1
    function autoBanner(){
        if($bnnNum>=$lastNum){$bnnNum=-1;}//현재 배너가 마지막 배너 번호 보다 크면 다시 -1로 되돌아 가야 함
        $bnnNum++; //0

        //모든 active 클래스 삭제
        $(".slide_wrap>div").removeClass("active")

        //active 클래스가 div에 추가되게
        $(".slide_wrap>div").eq($bnnNum).addClass("active")

    }
    var $bnnNum = setInterval(autoBanner,2000);

    //배너 재생 멈춤
    var flag = true;
    $(".btn_play").click(function(){
        if(flag){
            //멈춰라
            clearInterval($autoBnn);
            //이미지바꾸기
            flag=false;
        } else {
            //다시시작해라
            var $bnnNum = setInterval(autoBanner,2000);
            //이미지바꾸기
            flag=true;
        }
    });



//주메뉴슬라이딩
        //<![CDATA[
        $("nav>ul>li>a").bind("mouseover focus", function () {
            $(".header_wrap").animate({
                "height": "500px"
            }, 300, "linear");

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