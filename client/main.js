const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const newComplimentInput = document.getElementById("newComplimentInput")
const newComplimentBtn = document.getElementById("newComplimentBtn")

const errCallback = err => console.log(err)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addCompliment = (event) => {
    event.preventDefault();

    console.log('hi')

    const data = { compliments: newComplimentInput.value };
  
    axios.post("http://localhost:4000/api/compliment", data)
      .then(res => {
        const newCompliments = res.data;
        console.log(newCompliments);
      })
      .catch(err => {
        console.error(err);
      });
  };

  


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newComplimentBtn.addEventListener('click', addCompliment)

