import Avatar from '../Avatar'

const Tiles = () => (
  <div className='columns'>
    <div className='column col-4 col-mx-auto bg-gray' style={{ marginTop: 50, marginBottom: 50 }}>
      <div className='tile'>
        <div className='tile-icon'>
          <figure className='avatar avatar-lg'><Avatar initials='JS' /></figure>
        </div>
        <div className='tile-content'>
          <p className='tile-title'>The Avengers</p>
          <p className='tile-subtitle'>Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle...</p>
        </div>
        <div className='tile-action'>
          <button className='btn btn-primary'>Join</button>
          <button className='btn'>Contact</button>
        </div>
      </div>
    </div>
  </div>
)

export default Tiles