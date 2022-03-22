function bisextile(annee) {
    return (((annee & 3) == 0) && ((annee % 100 != 0) || (annee % 400 == 0)));
   }
    
   for(I=2000;I<=2022;I++) {
    if(bisextile(I)) document.write(I+" est une année bissextile<BR>");
   }