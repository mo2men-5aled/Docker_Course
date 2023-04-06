const reciever = (req, res) => {
  res.json({ msg: `Hello ${req.body.name}` });
};

module.exports = reciever;
