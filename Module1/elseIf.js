/* 
90 to 100 - A
70 to 89 - B
50 to 69 - C
lower than 50 - F
*/

var studentScore = 95
if(studentScore>90)
{
    console.log('Student has scored grade A')
}
else if(studentScore>=70 && studentScore<=89)
{
    console.log('Student has scored grade B')
}
else if(studentScore>=50 && studentScore<=69)
{
    console.log('Student has scored grade C')
}
else
{
    console.log('Student has scored less than 50. Grade is F')
}
