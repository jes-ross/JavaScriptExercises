# Instructions
If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:<br>

Each resistor has a resistance value.<br>
Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.<br>
To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.<br>

The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.<br>

In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.<br>

These colors are encoded as follows:<br>

black: 0<br>
brown: 1<br>
red: 2<br>
orange: 3<br>
yellow: 4<br>
green: 5<br>
blue: 6<br>
violet: 7<br>
grey: 8<br>
white: 9<br>
The goal of this exercise is to create a way:<br>

to look up the numerical value associated with a particular color band<br>
to list the different band colors<br>
Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.
<br>
More information on the color encoding of resistors can be found in the Electronic color code Wikipedia article.<br>

Although the color names are capitalised in the description, the function colorCode will always be called with the lowercase equivalent, e.g brown instead of Brown<br>