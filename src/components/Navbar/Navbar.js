import Avatar from '../Avatar'
import Badge from '../Badge'

const Navbar = () => (
  <header className='navbar bg-secondary'>
    <section className='navbar-section navbar-left'>
      <h3 className='m-0 mx-2'>Navbar Title</h3>
    </section>
    <section className='navbar-section'>
      <Badge title='Notifications' count={12} />
      <a href='#link-1' className='btn btn-link'>Link 1</a>
      <a href='#link-2' className='btn btn-link'>Link 2</a>
      <a href='#link-3' className='btn btn-link'>Link 3</a>
      <Avatar initials='JS' />
    </section>
  </header>
)

export default Navbar