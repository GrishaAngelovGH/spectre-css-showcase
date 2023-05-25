const EmptyState = () => (
  <div className='columns'>
    <div className='column col-4 col-mx-auto'>
      <div className='empty'>
        <div className='empty-icon'><i className='icon icon-3x icon-mail'></i></div>
        <p className='empty-title h5'>You've successfully signed up</p>
        <p className='empty-subtitle'>Click the button to invite your friends</p>
        <div className='empty-action'>
          <button className='btn btn-primary'>Invite your friends</button>
        </div>
        <div className='empty-action'>
          <button className='btn btn-link'>Skip</button>
        </div>
      </div>
    </div>
  </div>
)

export default EmptyState