const  yesBtn  =  documento . querySelector ( '#yesBtn' ) ;

síBtn . addEventListener ( 'clic' , función  ( )  {
    alerta ( 'Sabia que ibas a decir que si' )
} ) ;

const  noBtn  =  documento . querySelector ( '#noBtn' ) ;

noBtn _ addEventListener ( 'mouseover' ,  función  ( )  {
    const  randomX  =  parseInt ( Math . random ( ) * 100 ) ;
    const  randomY  =  parseInt ( Math . random ( ) * 100 ) ;
    noBtn _ estilo _ setProperty ( 'superior' , randomY + '%' ) ;
    noBtn _ estilo _ setProperty ( 'izquierda' , randomX + '%' ) ;
    noBtn _ estilo _ setProperty ( 'transformar' , `traducir(- ${ randomX } %,- ${ randomY } %)` ) ;
} )
