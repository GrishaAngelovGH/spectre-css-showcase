import Avatar from "../Avatar"

const Panel = () => (
  <div className='column col-6 col-xs-12'>
    <div className='panel'>
      <div className='panel-header text-center'>
        <figure className='avatar avatar-lg'><Avatar initials='JS' /></figure>
        <div className='panel-title h5 mt-10'>John Smith</div>
        <div className='panel-subtitle'>221 B Baker Street</div>
      </div>
      <nav className='panel-nav'>
        <ul className='tab tab-block'>
          <li className='tab-item active'><a href='#panels'>Profile</a></li>
          <li className='tab-item'><a href='#panels'>Files</a></li>
          <li className='tab-item'><a href='#panels'>Tasks</a></li>
        </ul>
      </nav>
      <div className='panel-body'>
        <div className='tile tile-centered'>
          <div className='tile-content'>
            <div className='tile-title text-bold'>E-mail</div>
            <div className='tile-subtitle'>bruce.banner@hulk.com</div>
          </div>
          <div className='tile-action'>
            <button className='btn btn-link btn-action btn-lg tooltip tooltip-left' data-tooltip='Edit E-mail'>
              <i className='icon icon-edit'></i>
            </button>
          </div>
        </div>
        <div className='tile tile-centered'>
          <div className='tile-content'>
            <div className='tile-title text-bold'>Skype</div>
            <div className='tile-subtitle'>bruce.banner</div>
          </div>
          <div className='tile-action'>
            <button className='btn btn-link btn-action btn-lg'>
              <i className='icon icon-edit'></i>
            </button>
          </div>
        </div>
        <div className='tile tile-centered'>
          <div className='tile-content'>
            <div className='tile-title text-bold'>Location</div>
            <div className='tile-subtitle'>Dayton, Ohio</div>
          </div>
          <div className='tile-action'>
            <button className='btn btn-link btn-action btn-lg'>
              <i className='icon icon-edit'></i>
            </button>
          </div>
        </div>
      </div>
      <div className='panel-footer'>
        <button className='btn btn-primary btn-block'>Save</button>
      </div>
    </div>
  </div>
)

export default Panel