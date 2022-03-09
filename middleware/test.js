const checkAuthorisation = ((req, res, next) => {
  console.log(req.session.userName)
  if (req.session.userName) {
     next();
  }

    console.log('hhhhelo');
    res.sendStatus(313);
  
});

module.exports = { checkAuthorisation };
