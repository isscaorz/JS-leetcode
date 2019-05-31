/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

https://leetcode-cn.com/problems/largest-rectangle-in-histogram/

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
求在该柱状图中，能够勾勒出来的矩形的最大面积。                         
                      _6_
                 _5_ |   |
                |   ||   |
                |   ||   |      _3_
       _2_      |   ||   | _2_ |   | 
      |   | _1_ |   ||   ||   ||   |  
    __|   ||   ||   ||   ||   ||   |___
以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。                       
                      _6_
                 _5_ |   |
                |@@@||@@@|
                |@@@||@@@|      _3_
       _2_      |@@@||@@@| _2_ |   | 
      |   | _1_ |@@@||@@@||   ||   |  
    __|   ||   ||@@@||@@@||   ||   |___
图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。
示例:
输入: [2,1,5,6,2,3]
输出: 10

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
};