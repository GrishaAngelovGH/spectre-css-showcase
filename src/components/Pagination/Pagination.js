const Pagination = () => {
  return (
    <ul className='pagination'>
      <li className='page-item disabled'>
        <a href='#' tabIndex='-1'>Previous</a>
      </li>
      <li className='page-item active'>
        <a href='#'>1</a>
      </li>
      <li className='page-item'>
        <a href='#'>2</a>
      </li>
      <li className='page-item'>
        <a href='#'>3</a>
      </li>
      <li className='page-item'>
        <span>...</span>
      </li>
      <li className='page-item'>
        <a href='#'>12</a>
      </li>
      <li className='page-item'>
        <a href='#'>Next</a>
      </li>
    </ul>
  )
}

export default Pagination