let buttonDown:string ="buttonDown";
let guideMarkB:string ="guideMarkB";

let buttonUp:string ="buttonUp";
let guideMarkA:string ="guideMarkA";

function moveToTag(button:string, tag:string):void{
 
  let getButton: HTMLElement | null = document.getElementById(button);


  function toggleMenu (tag:string ) {
    
    let element: HTMLElement | null = document.getElementById(tag);
    element!.scrollIntoView({behavior: "smooth"});

  }

  getButton!.addEventListener('click',toggleMenu.bind(getButton, tag));
}

moveToTag(buttonDown,guideMarkB);
moveToTag(buttonUp,guideMarkA);