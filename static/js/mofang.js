translate1 = 100;
translate2 = 150;
locked = false
function Lock(){
    locked = true
}
function UnLock(){
    locked = false
}
function IsLock(){
    return locked
}
function U(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = -9 / run_time;
    }else{
        var angle_s = 9 /run_time;
    }
    var tran_mian = 'top___';
    var tran_bian = [1, 2, 3];
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['front_', 'left__', 'back__', 'right_'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + tran_bian[0]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[0] + tran_bian[1]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX(0px)');
        $('.' + bians[0] + tran_bian[2]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[1] + tran_bian[0]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[1] + tran_bian[1]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX(0px)');
        $('.' + bians[1] + tran_bian[2]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[2] + tran_bian[0]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[2] + tran_bian[1]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX(0px)');
        $('.' + bians[2] + tran_bian[2]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY(-'+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[3] + tran_bian[0]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[3] + tran_bian[1]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX(0px)');
        $('.' + bians[3] + tran_bian[2]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY(-'+translate1+'px) translateX('+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        if (i == 3 || i == len_m){
                            $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                        }
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[i] + nv).addClass('tmp___d').removeClass(bians[i] + nv)
                        }else{
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                            if (i == len_b){
                                $('.tmp___d').addClass(bians[i] + nv).removeClass("tmp___d")
                            }
                        }
                    })
                })
                $('.front_1').addClass('tmp___d') .removeClass("front_1")
                $('.front_3').addClass('front_1') .removeClass("front_3")
                $('.tmp___d').addClass('front_3') .removeClass("tmp___d")
                $('.back__1').addClass('tmp___d') .removeClass("back__1")
                $('.back__3').addClass('back__1') .removeClass("back__3")
                $('.tmp___d').addClass('back__3') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        if (i == 3 || i == len_m){
                            $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                        }
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[len_b - i] + nv).addClass('tmp___d').removeClass(bians[len_b - i] + nv)
                        }else{
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                            if (i == len_b){
                                $('.tmp___d').addClass(bians[len_b - i] + nv).removeClass("tmp___d")
                            }
                        }
                    })
                })
                $('.right_1').addClass('tmp___d') .removeClass("right_1")
                $('.right_3').addClass('right_1') .removeClass("right_3")
                $('.tmp___d').addClass('right_3') .removeClass("tmp___d")
                $('.left__1').addClass('tmp___d') .removeClass("left__1")
                $('.left__3').addClass('left__1') .removeClass("left__3")
                $('.tmp___d').addClass('left__3') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function D(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = 9 / run_time;
    }else{
        var angle_s = -9 / run_time;
    }
    var tran_mian = 'bottom';
    var tran_bian = [7, 8, 9];
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['left__', 'back__', 'right_', 'front_'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(90deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + tran_bian[0]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[0] + tran_bian[1]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(0px)');
        $('.' + bians[0] + tran_bian[2]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[1] + tran_bian[0]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[1] + tran_bian[1]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(0px)');
        $('.' + bians[1] + tran_bian[2]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[2] + tran_bian[0]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[2] + tran_bian[1]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX(0px)');
        $('.' + bians[2] + tran_bian[2]).css('transform', 'rotateY('+ (90 - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX('+translate1+'px)');
        $('.' + bians[3] + tran_bian[0]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[3] + tran_bian[1]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX(0px)');
        $('.' + bians[3] + tran_bian[2]).css('transform', 'rotateY('+ (0  - angle_) % 360 +'deg)  translateZ('+translate2+'px) translateY('+translate1+'px) translateX('+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[len_b - i] + nv).addClass('tmp___d').removeClass(bians[len_b - i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                            $('.tmp___d').addClass(bians[len_b - i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                        }
                    })
                })
                $('.right_7').addClass('tmp___d') .removeClass("right_7")
                $('.right_9').addClass('right_7') .removeClass("right_9")
                $('.tmp___d').addClass('right_9') .removeClass("tmp___d")
                $('.left__7').addClass('tmp___d') .removeClass("left__7")
                $('.left__9').addClass('left__7') .removeClass("left__9")
                $('.tmp___d').addClass('left__9') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[i] + nv).addClass('tmp___d').removeClass(bians[i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                            $('.tmp___d').addClass(bians[i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                        }
                    })
                })
                $('.front_7').addClass('tmp___d') .removeClass("front_7")
                $('.front_9').addClass('front_7') .removeClass("front_9")
                $('.tmp___d').addClass('front_9') .removeClass("tmp___d")
                $('.back__7').addClass('tmp___d') .removeClass("back__7")
                $('.back__9').addClass('back__7') .removeClass("back__9")
                $('.tmp___d').addClass('back__9') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function R(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = -9 / run_time;
    }else{
        var angle_s = 9 / run_time;
    }
    var tran_mian = 'right_';
    var tran_bian = [3, 6, 9];
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['front_', 'top___', 'back__', 'bottom'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + tran_bian[0]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[0] + tran_bian[1]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[0] + tran_bian[2]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[1] + tran_bian[0]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[1] + tran_bian[1]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[1] + tran_bian[2]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[2] + tran_bian[0]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[2] + tran_bian[1]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[2] + tran_bian[2]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[3] + tran_bian[0]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[3] + tran_bian[1]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[3] + tran_bian[2]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[i] + nv).addClass('tmp___d').removeClass(bians[i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                            $('.tmp___d').addClass(bians[i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                        }
                    })
                })
                $('.top___3').addClass('tmp___d') .removeClass("top___3")
                $('.top___9').addClass('top___3') .removeClass("top___9")
                $('.tmp___d').addClass('top___9') .removeClass("tmp___d")
                $('.bottom3').addClass('tmp___d') .removeClass("bottom3")
                $('.bottom9').addClass('bottom3') .removeClass("bottom9")
                $('.tmp___d').addClass('bottom9') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[len_b - i] + nv).addClass('tmp___d').removeClass(bians[len_b - i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                            $('.tmp___d').addClass(bians[len_b - i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                        }
                    })
                })
                $('.front_3').addClass('tmp___d') .removeClass("front_3")
                $('.front_9').addClass('front_3') .removeClass("front_9")
                $('.tmp___d').addClass('front_9') .removeClass("tmp___d")
                $('.back__3').addClass('tmp___d') .removeClass("back__3")
                $('.back__9').addClass('back__3') .removeClass("back__9")
                $('.tmp___d').addClass('back__9') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function L(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = 9 / run_time;
    }else{
        var angle_s = -9 / run_time;
    }
    var tran_mian = 'left__';
    var tran_bian = [1, 4, 7];
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['front_', 'top___', 'back__', 'bottom'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(0deg) rotateY(90deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + tran_bian[0]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[0] + tran_bian[1]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[0] + tran_bian[2]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[1] + tran_bian[0]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[1] + tran_bian[1]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[1] + tran_bian[2]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg)  translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[2] + tran_bian[0]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[2] + tran_bian[1]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[2] + tran_bian[2]).css('transform', 'rotateX('+ (0  + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[3] + tran_bian[0]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[3] + tran_bian[1]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[3] + tran_bian[2]).css('transform', 'rotateX('+ (90 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[len_b - i] + nv).addClass('tmp___d').removeClass(bians[len_b - i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                            $('.tmp___d').addClass(bians[len_b - i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[len_b - i] + nv).addClass(bians[len_b - (i - 1)] + nv).removeClass(bians[len_b - i] + nv)
                        }
                    })
                })
                $('.front_1').addClass('tmp___d') .removeClass("front_1")
                $('.front_7').addClass('front_1') .removeClass("front_7")
                $('.tmp___d').addClass('front_7') .removeClass("tmp___d")
                $('.back__1').addClass('tmp___d') .removeClass("back__1")
                $('.back__7').addClass('back__1') .removeClass("back__7")
                $('.tmp___d').addClass('back__7') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                    }
                })
                $.each(tran_bian, function(ni, nv){
                    $.each(bians, function(i, v){
                        if(i == 0){
                            $('.' + bians[i] + nv).addClass('tmp___d').removeClass(bians[i] + nv)
                        }else if (i == len_b){
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                            $('.tmp___d').addClass(bians[i] + nv).removeClass("tmp___d")
                        }else{
                            $('.' + bians[i] + nv).addClass(bians[i - 1] + nv).removeClass(bians[i] + nv)
                        }
                    })
                })
                $('.top___1').addClass('tmp___d') .removeClass("top___1")
                $('.top___7').addClass('top___1') .removeClass("top___7")
                $('.tmp___d').addClass('top___7') .removeClass("tmp___d")
                $('.bottom1').addClass('tmp___d') .removeClass("bottom1")
                $('.bottom7').addClass('bottom1') .removeClass("bottom7")
                $('.tmp___d').addClass('bottom7') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function F(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = -9 / run_time;
    }else{
        var angle_s = 9 / run_time;
    }
    var tran_mian = 'front_';
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['left__', 'top___', 'right_', 'bottom'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ('+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + 1).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[0] + 4).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[0] + 7).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[1] + 7).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px)   translateY('+translate1+'px)  translateX(-'+translate1+'px)');
        $('.' + bians[1] + 8).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px)   translateY('+translate1+'px)  translateX(0px)');
        $('.' + bians[1] + 9).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px)   translateY('+translate1+'px)  translateX('+translate1+'px)');
        $('.' + bians[2] + 1).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[2] + 4).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX(-'+translate1+'px) translateY(0px)');
        $('.' + bians[2] + 7).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[3] + 7).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(-'+translate1+'px)');
        $('.' + bians[3] + 8).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX(0px)');
        $('.' + bians[3] + 9).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateY('+translate1+'px) translateX('+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                    }
                })
                $('.left__1').addClass('tmp___d') .removeClass("left__1")
                $('.top___9').addClass('left__1') .removeClass("top___9")
                $('.right_7').addClass('top___9') .removeClass("right_7")
                $('.bottom7').addClass('right_7') .removeClass("bottom7")
                $('.tmp___d').addClass('bottom7') .removeClass("tmp___d")
                $('.left__4').addClass('tmp___d') .removeClass("left__4")
                $('.top___8').addClass('left__4') .removeClass("top___8")
                $('.right_4').addClass('top___8') .removeClass("right_4")
                $('.bottom8').addClass('right_4') .removeClass("bottom8")
                $('.tmp___d').addClass('bottom8') .removeClass("tmp___d")
                $('.left__7').addClass('tmp___d') .removeClass("left__7")
                $('.top___7').addClass('left__7') .removeClass("top___7")
                $('.right_1').addClass('top___7') .removeClass("right_1")
                $('.bottom9').addClass('right_1') .removeClass("bottom9")
                $('.tmp___d').addClass('bottom9') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                    }
                })
                $('.left__1').addClass('tmp___d') .removeClass("left__1")
                $('.bottom7').addClass('left__1') .removeClass("bottom7")
                $('.right_7').addClass('bottom7') .removeClass("right_7")
                $('.top___9').addClass('right_7') .removeClass("top___9")
                $('.tmp___d').addClass('top___9') .removeClass("tmp___d")
                $('.left__4').addClass('tmp___d') .removeClass("left__4")
                $('.bottom8').addClass('left__4') .removeClass("bottom8")
                $('.right_4').addClass('bottom8') .removeClass("right_4")
                $('.top___8').addClass('right_4') .removeClass("top___8")
                $('.tmp___d').addClass('top___8') .removeClass("tmp___d")
                $('.left__7').addClass('tmp___d') .removeClass("left__7")
                $('.bottom9').addClass('left__7') .removeClass("bottom9")
                $('.right_1').addClass('bottom9') .removeClass("right_1")
                $('.top___7').addClass('right_1') .removeClass("top___7")
                $('.tmp___d').addClass('top___7') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function B(reversal, run_time=3){
    if (IsLock()){
        return
    }
    Lock()
    var angle_ = 0;
    if (reversal){
        var angle_s = 9 / run_time;
    }else{
        var angle_s = -9 / run_time;
    }
    var tran_mian = 'back__';
    var mians = [1, 3, 9, 7, 2, 6, 8, 4];
    var bians = ['left__', 'top___', 'right_', 'bottom'];
    function trans(){
        angle_ = angle_ + angle_s;
        $('.'+tran_mian+'1').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'2').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'3').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.'+tran_mian+'4').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'5').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY(0px)');
        $('.'+tran_mian+'6').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.'+tran_mian+'7').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(-'+translate1+'px) translateY('+translate1+'px)');
        $('.'+tran_mian+'8').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX(0px) translateY('+translate1+'px)');
        $('.'+tran_mian+'9').css('transform', 'rotateX(0deg) rotateY(0deg) rotateZ('+ (angle_ % 360)+'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[0] + 3).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[0] + 6).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[0] + 9).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ(-'+translate2+'px) translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[1] + 1).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px) translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[1] + 2).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px) translateX(0px)    translateY(-'+translate1+'px)');
        $('.' + bians[1] + 3).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ('+translate2+'px) translateX('+translate1+'px)  translateY(-'+translate1+'px)');
        $('.' + bians[2] + 3).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX('+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[2] + 6).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX('+translate1+'px) translateY(0px)');
        $('.' + bians[2] + 9).css('transform', 'rotateY(90deg) rotateX('+ (0 - angle_) % 360 +'deg) translateZ('+translate2+'px)  translateX('+translate1+'px) translateY('+translate1+'px)');
        $('.' + bians[3] + 1).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px)  translateX(-'+translate1+'px) translateY(-'+translate1+'px)');
        $('.' + bians[3] + 2).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px)  translateX(0px)    translateY(-'+translate1+'px)');
        $('.' + bians[3] + 3).css('transform', 'rotateX(90deg) rotateY('+ (0 + angle_) % 360 +'deg) translateZ(-'+translate2+'px)  translateX('+translate1+'px)  translateY(-'+translate1+'px)');
        if (Math.abs(angle_) == 90){
            var len_m = mians.length - 1;
            var len_b = bians.length - 1;
            if (reversal){
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[len_m - i]).addClass('tmp___d').removeClass(tran_mian + mians[len_m - i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                        $('.tmp___d').addClass(tran_mian + mians[len_m - i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[len_m - i]).addClass(tran_mian + mians[len_m - (i - 1)]).removeClass(tran_mian + mians[len_m - i])
                    }
                })
                $('.left__9').addClass('tmp___d') .removeClass("left__9")
                $('.bottom3').addClass('left__9') .removeClass("bottom3")
                $('.right_3').addClass('bottom3') .removeClass("right_3")
                $('.top___1').addClass('right_3') .removeClass("top___1")
                $('.tmp___d').addClass('top___1') .removeClass("tmp___d")
                $('.left__6').addClass('tmp___d') .removeClass("left__6")
                $('.bottom2').addClass('left__6') .removeClass("bottom2")
                $('.right_6').addClass('bottom2') .removeClass("right_6")
                $('.top___2').addClass('right_6') .removeClass("top___2")
                $('.tmp___d').addClass('top___2') .removeClass("tmp___d")
                $('.left__3').addClass('tmp___d') .removeClass("left__3")
                $('.bottom1').addClass('left__3') .removeClass("bottom1")
                $('.right_9').addClass('bottom1') .removeClass("right_9")
                $('.top___3').addClass('right_9') .removeClass("top___3")
                $('.tmp___d').addClass('top___3') .removeClass("tmp___d")
            }else{
                $.each(mians, function(i, v){
                    if(i == 0 || i == 4){
                        $('.' + tran_mian + mians[i]).addClass('tmp___d').removeClass(tran_mian + mians[i])
                    }else if (i == 3 || i == len_m){
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                        $('.tmp___d').addClass(tran_mian + mians[i]).removeClass("tmp___d")
                    }else{
                        $('.' + tran_mian + mians[i]).addClass(tran_mian + mians[i - 1]).removeClass(tran_mian + mians[i])
                    }
                })
                $('.right_3').addClass('tmp___d') .removeClass("right_3")
                $('.bottom3').addClass('right_3') .removeClass("bottom3")
                $('.left__9').addClass('bottom3') .removeClass("left__9")
                $('.top___1').addClass('left__9') .removeClass("top___1")
                $('.tmp___d').addClass('top___1') .removeClass("tmp___d")
                $('.right_6').addClass('tmp___d') .removeClass("right_6")
                $('.bottom2').addClass('right_6') .removeClass("bottom2")
                $('.left__6').addClass('bottom2') .removeClass("left__6")
                $('.top___2').addClass('left__6') .removeClass("top___2")
                $('.tmp___d').addClass('top___2') .removeClass("tmp___d")
                $('.right_9').addClass('tmp___d') .removeClass("right_9")
                $('.bottom1').addClass('right_9') .removeClass("bottom1")
                $('.left__3').addClass('bottom1') .removeClass("left__3")
                $('.top___3').addClass('left__3') .removeClass("top___3")
                $('.tmp___d').addClass('top___3') .removeClass("tmp___d")
            }
            UnLock();
        }
        else{
            setTimeout(trans,100)
        }
    }
    trans();
}

function reversal(str, run_time = 3){
    var str_list = str.split('')
    var str_list2 = []
    var reversal_num = 0;
    tmp_n = 0;
    function _reversal(){
        if (str_list[tmp_n] == 'R'){
            R(0, run_time)
            str_list2.push('r')
        }else if(str_list[tmp_n] == 'r'){
            R(1, run_time)
            str_list2.push('R')
        }else if(str_list[tmp_n] == 'L'){
            L(0, run_time)
            str_list2.push('l')
        }else if(str_list[tmp_n] == 'l'){
            L(1, run_time)
            str_list2.push('L')
        }else if(str_list[tmp_n] == 'U'){
            U(0, run_time)
            str_list2.push('u')
        }else if(str_list[tmp_n] == 'u'){
            U(1, run_time)
            str_list2.push('U')
        }else if(str_list[tmp_n] == 'D'){
            D(0, run_time)
            str_list2.push('d')
        }else if(str_list[tmp_n] == 'd'){
            D(1, run_time)
            str_list2.push('D')
        }else if(str_list[tmp_n] == 'F'){
            F(0, run_time)
            str_list2.push('f')
        }else if(str_list[tmp_n] == 'f'){
            F(1, run_time)
            str_list2.push('F')
        }else if(str_list[tmp_n] == 'B'){
            B(0, run_time)
            str_list2.push('b')
        }else if(str_list[tmp_n] == 'b'){
            B(1, run_time)
            str_list2.push('B')
        }

        if (tmp_n != (str_list.length - 1)){
            tmp_n += 1;
            if(run_time==0.1){_reversal()}else{setTimeout(_reversal, run_time*1000+500)}
        }else{
            if(reversal_num == 0 && run_time == 0.1){
                tmp_n = 0
                str_list2.reverse()
                str_list = str_list2.splice(0)
                reversal_num = 1
                run_time = 1
                setTimeout(_reversal, 1000)
            }
        }
    }
    _reversal();
}
