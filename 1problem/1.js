function happy_number(num) 
{
    var m, n ;
    var arr = [] ;
     while(num != 1 && arr[num] !== true) 
    {
        arr[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}
 var cnt = 5;
var num = 2;
var first5 = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
    first5 = first5+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+first5);
document.write("First 5 happy numbers are:"+first5);