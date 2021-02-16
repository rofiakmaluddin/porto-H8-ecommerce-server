const errHandler = (err,req,res,next) => {
  const errors = []
  let status = 500
  if (err.name === 'login error') {
    errors.push(err.message)
    status = err.status
  } else if (err.name === 'auth error'){
    errors.push(err.message)
    status = err.status
  } else if (err.name === 'SequelizeValidationError'){
    err.errors.forEach(e => {
      errors.push(e)
    })
    status = 400
  } else if (err.name === 'SequelizeUniqueConstraintError'){
    err.errors.forEach(e => {
      errors.push(e)
    })
    status = 400
  } else {
    errors.push('something wrong')
  }
  console.log(errors);
  res.status(status).json(errors)
}

module.exports = errHandler