---
title: pyplot绘图2
date: 2020-11-22 21:13:50
categories: Python
tags: pyplot绘制曲线-2
declare: true
---

## ***Python读取文本文件(以“.CSV”文件为例)***
&emsp;使用Python读写文件是非常方便的，掌握Python读写文件的方法之后，对办公效率将有非常大的提升，尤其是面对庞大的数据处理工作时，使用Python更加显得便捷。本文是基于上一文pyplot绘制曲线-1进行的，新的内容增加了对常见文本文件的读取功能，以及多曲线绘制的一些内容。
<!-- more --> 

----


## ***什么是CSV文件？***
&emsp;在进行文件读取之前我们首先要知道什么是“*.CSV”文件，这样的文件从何而来？CSV（Comma Separated Values file）文件，即逗号分隔文件，是一种纯文本文件，它使用特定的结构来排列表格数据。因为是纯文本文件，所以CSV只包含实际的文本数据——也就是说CSV可以包含可打印的ASCII或者Unicode字符。

CSV文件的结构由其名称给出。通常CSV文件使用逗号分隔每个特定的数据值，下面是该结构的样子：
column_1_name,    colum_2 name,     colum_3 name
first_row_data_1, first_row_data_2, first_row_data_3  
second_row_data_1, second_row_data_2, second_row_data_3  



注意每个数据使用逗号分隔。通常，第一行标识每一条数据——也就是各列数据的名称。之后的每一行数据都是实际的数据，并且仅受文件大小的限制。

逗号并不是唯一的分隔符。其他流行的分隔符包括制表符（\t）、冒号（:）和分号（；）。正确解析CSV文件需要我们知道正在使用的分隔符。

----

## ***CSV文件从哪里来？***
&emsp;CSV文件通常由处理大量数据的文件创建。CSV是从电子表格和数据库导出数据以及在其他程序中导入或使用数据的便捷方式。例如，可以将数据挖掘程序的结果导出到CSV文件，然后将其导入电子表格以分析数据，生成演示文稿或者准备报告以供发布。

CSV文件非常易于编程方式工作，任何支持文本文件输入和字符串操作的语言（如Python）都可以直接使用CSV文件。

```
import csv

with open('employee_birthday.txt') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        else:
            print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            line_count += 1
    print(f'Processed {line_count} lines.')
```

>reader 对象的可选的参数
reader对象可以通过指定附加参数，处理不同风格的 CSV 文件，其中一些如下所示：
>>delimiter指定用于分隔每个字段的字符，默认值为逗号（,）。
quotechar指定用于包围包含分隔符字符的字段的字符，默认值为双引号（"）。
escapechar指定用于转义分隔符的字符，以防引号未使用。默认值为无转义字符。

----

## ***文件读取实例演示***
&emsp;下面我们通过一个具体的例子对该类型文件信息的读取进行演示。文件数据如下：

![](/pyplot绘图2/test_data.jpg)

----

## ***文件操作过程***
&emsp;接下来我们以上述文件的读取，数据后处理为例进行说明。

>1.导入“*.CSV”文件数据并转换为列表输出信息
```
# 导入csv文件库
import csv
# 读取文件信息至read对象中,"gbk"为文件编码方式
read = csv.reader(open('results0.csv', 'r', encoding='gbk'))
 
print(type(read), '读取的信息:', read)
 
print('\n对读取的信息进行输出：')
'''
将其转换为列表之后进行整体信息输出，如果使用read形式对读取的信息进行输出，
则会导致后续的操作无法回到文件开头，类似指针指向了文件末尾，如何指向开头
有待学习。
for row in read:
  print(row)
'''
# 将读取的数据转换为列表方便后续对行、列进行保存、操作、绘图
test = list(read)
print('保存为列表之后的输出')
for row in test:
   print(row)
```
>>输出结果如下：
![](/pyplot绘图2/output.jpg)

>2.数据转换为列表之后，数据（除了第一列数据的名称）可以简单的分为行、列，我们可以根据需要对行、列数据进行利用（这里仅进行了输出显示）。
```
print('\n测试某一行')
print(type(test[0]), test[0])

print('\n某一列')
print('第一列\t第二列')
for i in test:
    print(i[0]+'\t'+i[1])
    print(type(test[0][0]))
```
>>行、列测试结果如下：
![](/pyplot绘图2/column_and_row.jpg)

>3.使用Python读取文件信息后数据均保存为字符串类型，如果要使用其进行绘图，就需要将其转换为数字，根据需要本例中转换为小数。
```
print('\n\n数据类型转换')
'''
将除了标题之外的所有数字转为float类型，则有x= data[0]，phi=data[1]
rho=data[2]，ef=data[3]
'''
data = [[float(c) for c in r] for r in test[1:]]
print('x轴\t\tphi\t\trho\t\tef')
for m in data:
     print(m[0], '\t', m[1], '\t', m[2], '\t', m[3])
```
>>数据类型转换后如下：
![](/pyplot绘图2/type_change.jpg)

>4.利用所读取的数据进行绘图，为了方便利用表中数据，这里使用了一个数据处理库“nump”，该库可以很方便地将数据进行类似矩阵的转换，这样我们在使用数据进行绘图时可以方便的将列转换为行进行绘图，随后的绘图与pyplot绘图-1类似。
```
import matplotlib.pyplot as pl
# 导入数据处理库，目前用到的仅是将其进行矩阵类似的转置
import numpy as np
# 导入字体管理文件
from matplotlib import font_manager
my_font = font_manager.FontProperties(fname = "C:/WINDOWS/Fonts/simhei.ttf")
import warnings
import matplotlib.cbook
warnings.filterwarnings("ignore", category=matplotlib.cbook.mplDeprecation)

print('未转换——x轴：\n', data[0])
# 将上述获得的数据进行转置获得列上的数据
data = np.transpose(np.array(data))
print('转换之后——x轴：\n', data[0])
   
# 绘制子图
fig, ax1 = pl.subplots(figsize=(10, 7))

# 两个子图共享一个画布，和横轴
ax2 = ax1.twinx()

   
#改变tick方向大小颜色等等
ax1.tick_params("y", which='major', length=15, width=2.0, colors='r', direction='in') #"y", 'x', 'both'
ax2.tick_params('both', which ='major', length=5, width=1.0, labelsize=10, labelcolor='0.6', direction='in')
ax1.tick_params('x', which ='major', direction='in')

# 绘图
ax1.plot(data[0], data[1], 'o-b', label='phi', lw=2, ms=10)
ax2.plot(data[0], data[3], '<--g', label='ef', lw=3, ms=12)
 
# 添加标题
ax1.set_title('Potential', fontsize=20)
ax1.set_xlabel('x 轴(m)', fontproperties=my_font, fontsize=20)
ax1.set_ylabel('电势/phi (V)', fontproperties=my_font, fontsize=20)
ax2.set_ylabel('rho (C/m^3)', color='red', fontsize=20)

# 显示图例
ax1.legend('0')
ax2.legend('0')
pl.savefig('test.png', dpi=600)
#ax3.plot(data[0], data[2])
pl.show()
```
>>绘图结果如下：
![](/pyplot绘图2/result.jpg)

----

## ***上述实例中完整代码如下***
```
# 导入csv文件库
import csv
# 读取文件信息至read对象中
read = csv.reader(open('results0.csv', 'r', encoding='gbk'))
 
print(type(read), '读取的信息:', read)
 
print('\n对读取的信息进行输出：')
'''
将其转换为列表之后进行整体信息输出，如果使用read形式对读取的信息进行输出，
则会导致后续的操作无法回到文件开头，类似指针指向了文件末尾，如何指向开头
有待学习。
for row in read:
  print(row)
'''
# 将读取的数据转换为列表方便后续对行、列进行保存、操作、绘图
test = list(read)
print('保存为列表之后的输出')
for row in test:
   print(row)

print('\n测试某一行')
print(type(test[0]), test[0])

print('\n某一列')
print('第一列\t第二列')
for i in test:
    print(i[0]+'\t'+i[1])
    print(type(test[0][0]))
 
print('\n\n数据类型转换')
'''
将除了标题之外的所有数字转为float类型，则有x= data[0]，phi=data[1]
rho=data[2]，ef=data[3]
'''
data = [[float(c) for c in r] for r in test[1:]]
print('x轴\t\tphi\t\trho\t\tef')
for m in data:
     print(m[0], '\t', m[1], '\t', m[2], '\t', m[3])
 
import matplotlib.pyplot as pl
# 导入数据处理库，目前用到的仅是将其进行矩阵类似的转置
import numpy as np
# 导入字体管理文件
from matplotlib import font_manager
my_font = font_manager.FontProperties(fname = "C:/WINDOWS/Fonts/simhei.ttf")
import warnings
import matplotlib.cbook
warnings.filterwarnings("ignore", category=matplotlib.cbook.mplDeprecation)

print('未转换——x轴：\n', data[0])
# 将上述获得的数据进行转置获得列上的数据
data = np.transpose(np.array(data))
print('转换之后——x轴：\n', data[0])
   
# 绘制子图
fig, ax1 = pl.subplots(figsize=(10, 7))

# 两个子图共享一个画布，和横轴
ax2 = ax1.twinx()

   
#改变tick方向大小颜色等等
ax1.tick_params("y", which='major', length=15, width=2.0, colors='r', direction='in') #"y", 'x', 'both'
ax2.tick_params('both', which ='major', length=5, width=1.0, labelsize=10, labelcolor='0.6', direction='in')
ax1.tick_params('x', which ='major', direction='in')

# 绘图
ax1.plot(data[0], data[1], 'o-b', label='phi', lw=2, ms=10)
ax2.plot(data[0], data[3], '<--g', label='ef', lw=3, ms=12)
 
# 添加标题
ax1.set_title('Potential', fontsize=20)
ax1.set_xlabel('x 轴(m)', fontproperties=my_font, fontsize=20)
ax1.set_ylabel('电势/phi (V)', fontproperties=my_font, fontsize=20)
ax2.set_ylabel('rho (C/m^3)', color='red', fontsize=20)

# 显示图例
ax1.legend('0')
ax2.legend('0')
pl.savefig('test.png', dpi=600)
#ax3.plot(data[0], data[2])
pl.show()
```