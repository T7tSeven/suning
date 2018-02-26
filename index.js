$(function(){
	$('#big').fullpage({
		verticalCentered:false,
		sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
		navigation:true,
		afterLoad:function(link,index){
			$(".section").eq(index-1).addClass('now');
		}, 
		onLeave:function(index,nextindex,direction){
			if(index==2&&nextindex==3){
				$(".section").eq(index-1).addClass('leave');
			}else if(index==3&&nextindex==4){
				$(".section").eq(index-1).addClass('leave');
			}else if(index==5&&nextindex==6){
				$(".section").eq(index-1).addClass('leave');
				$(".box").addClass('show');
			}else if(index==6&&nextindex==7){
				$(".star").addClass('show');
				$(".good").addClass('show');
				$(".star img").each(function(i,index){
					$(this).css('transition-delay',i*0.5+'s');
				});
			}
		},
		afterRender:function(){
			$('.more').on('click',function(){
				$.fn.fullpage.moveSectionDown();
			});
			$('.screenfour .cart').on('transitionend',function () {
                $('.screenfour .address').show().find('img:last').fadeIn(1000);
                $('.screenfour .text').addClass('show');
            });
			$('.screeneight').on('mousemove',function (e) {
                $(this).find('.hand').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });
		},
		
		scrollingSpeed:1000
	});	
})