const names = [
  "Dr. Slice",
  "Dr. Pressure",
  "Prof. Possibility",
  "Prof. Prism",
  "Dr. Impulse",
  "Prof. Spark",
  "Dr. Wire",
  "Prof. Goose",
  "MF Doom",
  "MR Fantastic",
  "Slim Shady",
  "Ruby da Cherry",
  "$crim",
];

const occupations = [
  "gardener",
  "programmer",
  "teacher",
  "mechanic",
  "welder",
  "dog walker",
  "rapper",
  "elf",
];

const jobsList = document.querySelector("#jobsList");
const addButton = document.querySelector("#addButton");
const spanCount = document.querySelector("#spanCount");
addButton.addEventListener("click", function () {
  jobs.push(generateRandom());
  render();
});

jobsList.addEventListener("click", function (ev) {
  console.log(ev);
});
function generateRandom() {
  const nameIdx = Math.floor(Math.random() * names.length);
  const name = names[nameIdx];
  const occupationIdx = Math.floor(Math.random() * occupations.length);
  const occupation = occupations[occupationIdx];
  const price = Math.ceil(Math.random() * 100);
  return {
    name,
    occupation,
    price,
  };
}

function render() {
  const lis = jobs
    .map(function (jobs) {
      return `<li>${jobs.name} is a ${jobs.occupation} and makes $${jobs.price} an hour<li/>`;
    })
    .join(" ");
  console.log(lis);
  jobsList.innerHTML = lis;
}

const jobs = [];
jobs.push(generateRandom());
render();
