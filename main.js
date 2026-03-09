window.addEventListener("load", () => {

  const music = document.getElementById("music");

  music.addEventListener("loadedmetadata", () => {
    music.currentTime = 52;
  });

  setTimeout(() => {
    music.play().catch(() => {
      console.log("Autoplay bloqueado");
    });
  }, 1000);
});

onload = () =>{
        document.body.classList.remove("container");
};
