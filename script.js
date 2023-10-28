function shortcut(s1, s2) {
  // your code here
	for( i=0; i<s1.length; i++)
		{
			let currChar1 = s1.[i];
			if(currChar1 !== " ")
			{
				return currChar1;
			}
			else
			{
				return " ";
			}
			
		
	for(i=0; i<s2.length; i++)
		{
			let currChar2 = s2.[i];
			if( currChar2 !== " ")
			{
				return currChar2;
			}
			else
			{
				return " ";
			}
		}
		}
	if(s1 !== " " || s2 === " "  && s1 === " " || s2 !== " " )
	{
		return " ";
	}
}
shortcut(); 

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));   
 