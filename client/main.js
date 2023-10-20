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
  
    const data = { compliments: newComplimentInput.value}; //I don't understand why this only works when I place it in an object like this, I relearned how to do this online after searching through tons of different forums/websites.
  
    axios.post("http://localhost:4000/api/compliment", data)
      .then(res => {
        const compliments = res.data;
        console.log(compliments);
      })
      .catch(err => {
        console.error(err);
      });
  };

newComplimentBtn.addEventListener('click', addCompliment) //I don't understand why the output of this is an object, but it places the new compliment in the array as I wanted it to. It took me a really long time to get this to work and I don't understand where I went wrong to be honest. 
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)


