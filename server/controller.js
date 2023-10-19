const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

module.exports = {

    getCompliment: (req, res) => {
        
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.', 'A dubious friend may be an enemy in camouflage.', 'A faithful friend is a strong defense.', 'A feather in the hand is better than a bird in the air.', 'A fresh start will put you on your way.'  ];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.send(randomFortunes);
    },

    addCompliment(req, res) {

        let compliment = req.body

        compliments.push(compliment);
    },

    addName: (req, res) => {

        let name  = req.body

        compliments.post(name)
        
        
    }
}
    