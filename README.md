# magic_cube
web版魔方  
红-上-U  
黄-左-L  
蓝-前-F  
黑-右-R  
绿-后-B  
橙-下-D  
reversal('UL') 可以执行对应的旋转,默认3秒执行  
reversal('UL', 0.1) 可以执行对应的旋转,直接执行没有延时,1秒后自动旋转回去,可以去除  
reset_color('LUBDUUFFR,FLURRRRRR,LLUBFFDFF,LDDUDDBDD,BLURLLDBF,RFUBBUBBL')  可以直接渲染对应的模块颜色,请确保传入的颜色模块为正确的  
reversal('UULFFBBdRRdRBBLLUFFUBBDDRRBBLL', 1) 可以执行对应的旋转,还原回去  
