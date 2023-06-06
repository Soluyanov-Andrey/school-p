
function sum_f(nameTag:string):void {
 
  let el: HTMLElement | null = document.getElementById(nameTag);

  el!.addEventListener('click', function() {
    let el1: HTMLElement | null = document.getElementById("hh");
    el1!.scrollIntoView({behavior: "smooth"});
});

}

