var max = 0;
for(i = 999; i; i--)
  for(j = 999; j && i * j > max; j--)
    if(palindrome(i*j)){
       if( max < i * j ){
         max = i * j;
         console.log( i + " * " + j + " = " + ( i * j ) );
       }
       break;
    }
