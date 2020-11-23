---
title: pyplot绘图
date: 2020-11-18 15:41:32
categories: Python
tags: pyplot绘制曲线-1
declare: true
---

# ***matplotlib.pyplot简介***
&emsp;matplotlib的pyplot子库提供了和matlab类似的绘图API，方便我们进行快速绘制2D图表。matplotlib.pyplot是命令行式函数的集合，每一个函数都对图像作了修改，比如创建图形，在图像上创建画图区域，在画图区域上画线，在线上标注等等。使用该工具还可以对文件中数据进行方便地绘制，提高工作效率。本系列博客主要针对常用的线图、点图、云图等一些常用的操作进行较为详细地介绍与讲解。
<!-- more --> 

---

## ***必要准备***
&emsp;在进行绘图之前需要安装所需环境，本系列绘图时基于Python并且使用到matplotlib工具包，在进行绘图之前需要配置Python，并且添加工具包。Python安装包可以在[官网下载](https://www.python.org/getit/)，安装可以参考[Python安装教程](https://blog.csdn.net/weixin_40844416/article/details/80889165)，matplotlib工具包的添加可以参考[Python安装matplotlib等模块](https://zhuanlan.zhihu.com/p/33180988)。配置好环境后我们就可以进行相关绘图的操作了。

---

## ***pyplot的一般绘图流程***
&emsp;使用pyplot进行绘图时，通常的绘图步骤——在使用代码进行操作时的编码顺序与绘图时常用的一些操作、修改命令如下(仅作为参考)：

---

>1.导入工具包：使用Python进行绘图首先需要导入工具包“pyplot”，它是“matplotlib”的子包，导入写法有两种：
```
#方法1：
import matplotlib.pyplot as pl——后续使用pl类对象进行绘图
#方法2：
import pyplot as pl
```

>2.引入字体管理模块：pyplot本身不支持中文，为支持中文显示，需要导入字体管理模块，导入方法主要有两种，导入后定义需要的字体格式“my_font”方便后续使用：

```
#方法1:
import matplotlib 
my_font=matplotlib.font_manager.FontProperties(fname=r'C:/Windows/Fonts/simhei.ttf')
#方法2：
from matplotlib import font_manager导入字体管理模块
my_font = font_manager.FontProperties(fname="C:/WINDOWS/Fonts/simhei.ttf")
```

>定义好字体之后可以在标题、坐标轴、坐标刻度、图例中进行使用。示例：
```
pl.title('this is 标题',fontproperties=my_font,fontsize=20,color='red')
```

>3.设置绘图大小：如果需要设置绘制图形的大小可以通过“figure”进行设置，主要有大小、像素两种设置方法。
```
pl.figure(figsize=(10,8)) #(长，宽)
pl.figure(dpi=300) #像素
```

>4.坐标轴数据：绘图中需要根据横、纵坐标产生绘图。

>5.设置坐标轴刻度方向：坐标刻度有3种类型：in、out、inout默认为out
```
pl.rcParams['xtick.direction']='in'——x轴刻度
pl.rcParams['ytick.direction']='in'——y轴刻度
```

>6.绘制曲线：在做好绘图相关设置之后可以通过plot命令进行绘图，绘图时可以设置颜色、记号、线型、线宽、记号大小、图例名称等信息。

>7.添加标题：设置字型、大小、颜色

>8.添加坐标轴：字型、大小、颜色，如果需要修改位置，使用text方法

>9.添加坐标轴刻度：设置步长、字型、大小、颜色

>10.添加坐标轴范围：设置上、下限

>11.添加网格：网格线型、颜色、线宽、透明度等

>12.添加图例：设置图例位置、字体、

>13.保存图片。

>14.设置好上述信息后进行曲线显示。

---
## ***单曲线绘制实例***
```
# 1.导入pyplot并定义为pl对象
import matplotlib.pyplot as pl
# 2.导入字体管理模块
from matplotlib import font_manager
# 3. 定义所使用的字体
my_font = font_manager.FontProperties(fname="C:/WINDOWS/Fonts/simhei.ttf")
# 4.设定绘图区大小，图示为大小设置，还可以设置像素
pl.figure(figsize=(10,8))

# 5.产生数据信息
x=range(10)        # 横轴的数据
y=[i*i for i in x] # 纵轴的数据


# 6.设置坐标刻度，有3种类型：in、out、inout默认为out
pl.rcParams['xtick.direction']='in'
pl.rcParams['ytick.direction']='in'

# 7.绘制曲线
pl.plot(x,y,'g<:',label='line1',lw=2,ms=12) # 绘制曲线
'''
等价于：
pl.plot(x,y,color='green',marker='<',line=':',label='line1',linewidth=2,markersize=12)
还可以添加markerfacecolot=mfc
        
'''
# 8.添加标题
pl.title('this is 标题',fontproperties=my_font,fontsize=20,color='red')

# 9.添加坐标轴
pl.xlabel('x轴',fontproperties=my_font,fontsize=20,c='b')
pl.ylabel('y轴',fontproperties=my_font,fontsize=20)

# 10.添加坐标轴刻度、步长、字体颜色、大小等
pl.xticks(x[0:10:1],fontproperties=my_font,fontsize=20,color='r')
pl.yticks(fontproperties=my_font,fontsize=20,color='g')

# 11.设置坐标轴极限范围
pl.xlim((0,11))
pl.ylim((0,100))

# 12.添加栅格信息：线型、颜色、线宽、透明度
pl.grid(linestyle='--',color='red',linewidth=0.5, alpha=0.4)

# 13.设置图例位置、字体大小
#pl.legend(loc='lower center',fontsize=30)
pl.legend(loc="center",bbox_to_anchor=(0.2,0.3),fontsize=30)
#精确位置控制：pl.legend(loc=2，bbox_to_anchor=(num1,num2),fontsize=30)
#如果第一个参数满足要求，,第二个参数可以不写，第二个参数bbox_to_anchor
#被赋予的二元组中，num1用于控制legend的左右移动，值越大越向右边移动，num2用
#于控制legend的上下移动，值越大，越向上移动。用于微调图例的位置。

# 14.保存图片，高的dpi图片质量好
pl.savefig('filename.png',dpi=600)

# 15.显示设置
pl.show()   
```
结果如下：

{% asset_img filename.jpg %}