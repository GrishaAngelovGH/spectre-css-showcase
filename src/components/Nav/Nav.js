const Nav = () => {
  return (
    <ul className='nav mx-2'>
      <li className='nav-item'>
        <a href='#'>Elements</a>
      </li>
      <li className='nav-item active'>
        <a href='#'>Layout</a>
        <ul className='nav'>
          {
            ['Flexbox grid', 'Responsive', 'Navbar', 'Empty states'].map((v, i) => (
              <li key={i} className='nav-item'>
                <a href='#'>{v}</a>
              </li>
            ))
          }
        </ul>
      </li>
      <li className='nav-item'>
        <a href='#'>Components</a>
      </li>
      <li className='nav-item'>
        <a href='#'>Utilities</a>
      </li>
    </ul>
  )
}

export default Nav