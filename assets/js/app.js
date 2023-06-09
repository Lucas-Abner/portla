document.querySelectorAll(".box").forEach((item) => {
      item.addEventListener("dragstart", dragStart);
      item.addEventListener("dragend", dragEnd);
  });

document.querySelectorAll(".box").forEach((item) => {
    if(window.innerWidth <= 1000){
      item.addEventListener("click", clickedItem);
    }
});
  
  document.querySelector(".project-action").addEventListener("dragover", dragOver);
  document.querySelector(".project-action").addEventListener("dragleave", dragLeave);
  document.querySelector(".project-action").addEventListener("drop", dropItem);
  
  function dragStart(e) {
    e.currentTarget.classList.add("active");
  }
  
  function dragEnd(e) {
    e.currentTarget.classList.remove("active");
  }
  
  function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("hover");
  }
  
  function dragLeave(e) {
    e.currentTarget.classList.remove("hover");
  }
  
  function dropItem(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("hover");
  
    if (e.currentTarget.querySelector(".box") === null) {
      document.querySelector(".project-action--area").style.display = "none";
      document.querySelector(".project-active").style.display = "flex";
      let dragItem = document.querySelector(".box.active");
      
      checkProject(dragItem);
    }
  }
  
function checkProject(boxActive) {
    let boxContent = +boxActive.textContent;
    let videoElement = document.querySelector(".video-on");
    let tagA = document.querySelector(".git");
    let tagB = document.querySelector(".site");
    

    if (boxContent === 1) {
        videoElement.src = "./assets/midia/voto.mp4";
        tagA.setAttribute("href", "https://github.com/Lucas-Abner/how-did-we-do");
        tagB.setAttribute("href", "https://lucas-abner.github.io/how-did-we-do/");
    } else if (boxContent === 2) {
        videoElement.src = "./assets/midia/years.mp4";
        tagA.setAttribute("href", "https://github.com/Lucas-Abner/age-calculator");
        tagB.setAttribute("href", "https://lucas-abner.github.io/age-calculator/");
    } else if (boxContent === 3) {
        videoElement.src = "./assets/midia/bateria.mp4";
        tagA.setAttribute("href", "https://github.com/Lucas-Abner/drum");
        tagB.setAttribute("href", "https://lucas-abner.github.io/drum/");
    } else if (boxContent === 4) {
        videoElement.src = "./assets/midia/bank.mp4";
        tagA.setAttribute("href", "https://github.com/Lucas-Abner/project-bank");
        tagB.setAttribute("href", "https://lucas-abner.github.io/project-bank/");
    }
}

function clickedItem(e){
    e.preventDefault();

    e.currentTarget.classList.add("active");
    let dragItem = document.querySelector(".box.active");

    if(dragItem){
      let boxContent = +dragItem.textContent;
      let videoElement = document.querySelector(".video-on");
      let tagA = document.querySelector(".git");
      let tagB = document.querySelector(".site");
      document.querySelector(".project-action--area").style.display = "none";
      document.querySelector(".project-active").style.display = "flex";
      

      if (boxContent === 1) {
          videoElement.src = "./assets/midia/voto.mp4";
          tagA.setAttribute("href", "https://github.com/Lucas-Abner/how-did-we-do");
          tagB.setAttribute("href", "https://lucas-abner.github.io/how-did-we-do/");
      } else if (boxContent === 2) {
          videoElement.src = "./assets/midia/years.mp4";
          tagA.setAttribute("href", "https://github.com/Lucas-Abner/age-calculator");
          tagB.setAttribute("href", "https://lucas-abner.github.io/age-calculator/");
      } else if (boxContent === 3) {
          videoElement.src = "./assets/midia/bateria.mp4";
          tagA.setAttribute("href", "https://github.com/Lucas-Abner/drum");
          tagB.setAttribute("href", "https://lucas-abner.github.io/drum/");
      } else if (boxContent === 4) {
          videoElement.src = "./assets/midia/bank.mp4";
          tagA.setAttribute("href", "https://github.com/Lucas-Abner/project-bank");
          tagB.setAttribute("href", "https://lucas-abner.github.io/project-bank/");
      }

      setTimeout(()=>{
        dragItem.classList.remove("active");
      }, 200)
    }
}
  
  function dropItemNeutral(e) {
    e.preventDefault();
  
    let dragItem = document.querySelector(".box.active");
    e.currentTarget.appendChild(dragItem);
  }


  // Validação do form

  const nameInput = document.querySelector(".input-name");
  const passwordInput = document.querySelector(".input-password");
  const emailInput = document.querySelector(".input-email");

  document.querySelector(".btn-form").addEventListener("click", checkInputs);

  function checkInputs(e){
    e.preventDefault();

    if(nameInput.value == "" || passwordInput.value == "" || emailInput.value == ""){
      nameInput.style.borderBottom = "2px solid red";
      passwordInput.style.borderBottom = "2px solid red";
      emailInput.style.borderBottom = "2px solid red";
    }
  }