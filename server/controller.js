const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A feather in the hand is better than a bird in the air.', 'A fresh start will put you on your way.'  ];

module.exports = {

    getCompliment: (req, res) => {
     
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.send(randomFortunes);
    },

    addCompliment: (req, res) => {
        
        let newCompliment = req.body.compliments;

        compliments.push(newCompliment);

        res.status(200).send(compliments);

    },

    addFortune: (req, res) => {
        
        let newFortunes = req.body.fortunes;

        fortunes.push(newFortunes);

        res.status(200).send(fortunes);

    },



    deleteCompliment: (req, res) => {

        if (compliments.length <= 3) {

            res.status(400).send("Cannot remove more compliments");

        } else {

            
            let removedCompliment = compliments.pop();

            res.status(200).send(removedCompliment);
        }
    },
}