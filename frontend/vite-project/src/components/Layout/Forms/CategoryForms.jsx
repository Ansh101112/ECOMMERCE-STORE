import React from 'react';

const CategoryForms = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type='text' 
            className='form-control' 
            placeholder='Enter new category' 
            value={value} 
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CategoryForms;
