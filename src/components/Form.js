import React from 'react'

const Form = () => {
  return (
    <>
    <form className='row form'>

<div className="col-md-12 col-auto">
    <label htmlFor="company" className='mb-2 form-label'>Company name</label>
    <input type="text" className="form-control" id="company" placeholder='e.g. Example Inc' />
</div>

<div className="col-md-12 col-auto">
    <label htmlFor="Industry" className='mb-2'>Industry</label>
    <select className="form-select form-control " >
        <option defaultValue>select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
</div>


<div className="col-md-12 col-auto">
    <label htmlFor="Companysize" className='form-label mb-2'>Company size </label>
    <div className='csize'>

        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
        <label className="btn " htmlFor="option1">1-20</label>

        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
        <label className="btn " htmlFor="option2">21-50</label>

        <input type="radio" className="btn-check " name="options" id="option3" autoComplete="off" defaultChecked={true} />
        <label className="btn " htmlFor="option3">51-200</label>

        <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off" />
        <label className="btn " htmlFor="option4">201-500</label>
        <input type="radio" className="btn-check" name="options" id="option5" autoComplete="off" />
        <label className="btn " htmlFor="option5">500+</label>
    </div>

</div>

<button type="button" className="btn btnn">Get Started</button>

</form>
    
    </>
  )
}

export default Form