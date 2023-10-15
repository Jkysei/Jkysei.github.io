function addScript_mathjax(){
	document.write('<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"></script>');
    document.write('<script type="text/x-mathjax-config">MathJax.Hub.Config({tex2jax: {inlineMath: [["$","$"], ["\\(","\\)"]]},});</script>')
}
try{
    addScript_mathjax();
}
catch(err){
    console.log("Mathjax Failed");
}




