const Steps = () => (
  <div className='column col-12'>
    <ul className='step'>
      <li className='step-item'><a className='tooltip' href='#steps' data-tooltip='Step 1 Tooltip'>Step 1</a></li>
      <li className='step-item'><a className='tooltip' href='#steps' data-tooltip='Step 2 Tooltip'>Step 2</a></li>
      <li className='step-item active'><a className='tooltip' href='#steps' data-tooltip='Step 3 Tooltip'>Step 3</a></li>
      <li className='step-item'><a className='tooltip' href='#steps' data-tooltip='Step 4 Tooltip'>Step 4</a></li>
    </ul>
  </div>
)

export default Steps