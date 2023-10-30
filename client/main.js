const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const newComplimentInput = document.getElementById("newComplimentInput")
const newComplimentBtn = document.getElementById("newComplimentBtn")
const newFortuneInput = document.getElementById("newFortuneInput")
const addFortuneBtn = document.getElementById("newFortuneBtn")
const deleteComplimentBtn = document.getElementById("deleteComplimentBtn")

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

    const data = { compliments: newComplimentInput.value };
  
    axios.post("http://localhost:4000/api/compliment", data)
      .then(res => {
        newComplimentInput.value = ''
        const newCompliments = res.data;
        console.log(newCompliments);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const addFortune = (event) => {
    event.preventDefault();

    const data = { fortunes: newFortuneInput.value };
  
    axios.post("http://localhost:4000/api/fortune", data)
      .then(res => {
        const newFortune = res.data;
        console.log(newFortune);
      })
      .catch(err => {
        console.error(err);
      });
  };


const deleteCompliment = (event) => {
    event.preventDefault();

    axios.delete("http://localhost:4000/api/compliment")
    .then(res => {
      const data = res.data;
      alert(data);
    })
    .catch(err => {
      alert(err.response.data)
    });
};

  

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
newComplimentBtn.addEventListener('click', addCompliment)
addFortuneBtn.addEventListener('click', addFortune)
deleteComplimentBtn.addEventListener('click', deleteCompliment)


