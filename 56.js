/*

56) Write a program that prints all interleavings of the given two strings,given two strings str1 and str2 .
 You may assume that all characters in both strings are different
 Input: str1 = "AB", str2 = "CD"
 Output:
 ABCD
 ACBD
 ACDB
 CABD
 CADB
 CDAB


*/

function interleavings(s1,i, s2,j, asf){
        if (i == s1.length && j == s2.length) {
            console.log(asf)
        }
        if (i < s1.length)
            interleavings(s1, i + 1, s2, j, asf + s1.charAt(i));
        if (j < s2.length)
            interleavings(s1, i, s2, j + 1, asf + s2.charAt(j));
}

interleavings("AB",0,"CD",0,"");
