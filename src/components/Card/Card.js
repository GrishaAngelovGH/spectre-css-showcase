const Card = () => (
  <div className='columns'>
    <div className='column col-4 col-mx-auto'>
      <div className='card bg-gray'>
        <div className='card-header'>
          <div className='card-title h5'>Google</div>
          <div className='card-subtitle text-gray'>Software and hardware</div>
        </div>
        <div className='card-body'>Organize the world’s information and make it universally accessible and useful.</div>
        <div className='card-image'>
          <img className='img-responsive' src='https://9to5mac.com/wp-content/uploads/sites/6/2014/08/yosemite.jpg?quality=82&strip=all' alt='OS X Yosemite' />
        </div>
        <div className='card-footer'>
          <a className='btn btn-primary mx-2' href='#cards'>Search</a>
          <a className='btn btn-primary' href='#cards'>Share</a>
        </div>
      </div>
    </div>
  </div>
)

export default Card