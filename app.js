import './style.css'

const memes = [
  {
    name: "Six Seven",
    image: "https://rollercoaster.ie/wp-content/uploads/2025/10/oardefault.jpg",
    description: "SIX SEVENNNNNN",
    tag: "unfunny"
  },
  {
    name: "Stupid Dog",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNlyYspKWhLLscuk875wsYFb1FU3lHuJs0Q&s",
    description: "老天保佑金山银山全都有",
    tag: "unfunny"
  },
  {
    name: "Mambo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOxubOxYxDyqQl_qvz7ybQNTPzdZjIpFPdg&s",
    description: "哈基米南北路多",
    tag: "funny"
  },
  {
    name: "Koby Bryant",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/977.png",
    description: "Man! What can I say",
    tag: "funny"
  },
];
function inject(memes) {
  const container = document.querySelector('.container');
  container.innerHTML = "";
  memes.forEach(meme => {
    container.insertAdjacentHTML('beforeend', `
      <div class="card" data-type="${meme.tag}">
        <h2 class="card-name">${meme.name}</h2>
        <img class="card-img" src="${meme.image}" alt="${meme.name}" />
        <h3 class="card-description">${meme.description}</h3>
      </div>
    `);
  });
}
inject(memes);
document.getElementById("memeForm").addEventListener("submit", function(meme) {
  meme.preventDefault(); 

  const newMeme = {
    name: document.getElementById("memeName").value,
    description: document.getElementById("memeDescription").value,
    image: document.getElementById("memeImage").value,
    tag: document.getElementById("memeTag").value
  };

  memes.push(newMeme);
  inject(memes);         
  meme.target.reset();   
});
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
    document.querySelector(".btn").textContent = "Change to Dark"
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
    document.querySelector(".btn").textContent = "Change to Light"
  }
});

