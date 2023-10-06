const complimentBtn = document.getElementById("complimentButton")
const addComplimentButton = document.getElementById("addComplimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const addCompliment = () => {

};

complimentBtn.addEventListener('click', getCompliment)
addComplimentButton.addEventListener('click', addCompliment)