import React from 'react'

const AddUser = () => {
  return (
    <div class="container">
     <form>
  <div class="mb-3 m-5">
    <label class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="m-5">
    <label class="form-label"> User Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  
  <div class="m-5">
    <label class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="m-5">
    <label class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="m-5">
    <label class="form-label">Website names</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
<div class=" m-5">
<button type="submit" class="btn btn-primary">Submit</button>

</div>
</form>
    </div>
  )
}

export default AddUser
