$(document).ready(function () {
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

}); // 독레디닫기