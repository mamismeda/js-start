let myscript ;

myscript = " my first javascript example code "

console.log(myscript.slice(9, -13));
console.log(myscript.replace("first", "second"));
console.log(myscript.split());
console.log(myscript.search("code"));
console.log(myscript.startsWith(" "));
console.log(myscript.toUpperCase());
console.log(myscript.trim());

let pic = `images/layer.png`;
let tran = ` Michael Jordan `;
let nodex = `NODIA U.P`;
let interFace = `User interface designer and fornt-end developer`;
let sage = `Massage`;
let foly =`Following`;
let skill =`SKILLS`;
let Ui =`UI/UX`;
let dev =`Front end development`;
let tml = `HTML`;
let sasi =`CSS`;
let jasy =`Javascript`;
let reac =`React`;
let nody =`Node`;

let botScript = `
<div id="topScript" class="container d-flex justify-content-center align-items-center pt-5">
<div class="col-5 text-white text-center top-diver">
       <div class="prof">
           <p>PRO</p>
       </div>
       <div class="pict m-auto mb-4">
        <img class="img-fluid" src="${pic}" alt="wick">
      </div>
        <h3>${tran}</h3>
        <h6>${nodex}</h6>
        <p class="px-3"> ${interFace}</p>
        <a class="atry" href="">${sage}</a>
        <a class="atry" href="">${foly}</a>
        <div>
            <p class="skil mt-4">${skill}</p>
         <div class="d-flex bot-diver">
            <p class="me-4">${Ui}</p>
            <p class="me-4">${dev}</p>
            <p class="me-4">${tml}</p>
            <p class="me-4">${sasi}</p>
            <p class="me-4">${jasy}</p>
            <p class="me-4">${reac}</p>
            <p class="me-4">${nody}</p>
        </div>
     </div>
</div>
</div> 
`
topScript.innerHTML = botScript ;






