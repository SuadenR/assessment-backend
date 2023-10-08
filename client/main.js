const complimentBtn = document.getElementById("complimentButton")
const addComplimentBtn = document.getElementById("Compliment-Input")
const fortuneBtn = document.getElementById("fortuneButton")
const submitname = document.getElementById("submit-name-button")
const nameInput = document.getElementById("name-input")

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

const addCompliment = () => {
    axios.post("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert('You have added a compliment!');
})
};

const addName = (event) => {{
    event.preventDefault()

    let newName = { 
       name: nameInput.value
    }

    axios.post('/api/names')
}
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitname.addEventListener('submit', addName)


addComplimentBtn.addEventListener('submit', addCompliment) //I do not know how to make this work. I tried creating a form to add new compliments to the existing random compliments array but cannot work out the backend. 

