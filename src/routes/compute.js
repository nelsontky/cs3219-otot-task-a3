module.exports = (req, res) => {
    let x = 0.0001;

    for (let i = 0; i < 1000000; i++) {
      x += Math.sqrt(x);
    }

    res.status(200).send('' + x);
};
