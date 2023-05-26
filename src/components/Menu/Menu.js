import Avatar from '../Avatar'

const Menu = () => (
  <div className='columns'>
    <div className='column col-4 col-xs-12'>
      <ul className='menu'>
        <li className='menu-item'>
          <div className='tile tile-centered'>
            <div className='tile-icon'><Avatar initials='JS' /></div>
            <div className='tile-content'>John Smith</div>
          </div>
        </li>
        <li className='divider'></li>
        <li className='menu-item'><a className='active' href='#menus'>My profile</a>
          <div className='menu-badge'>
            <label className='form-checkbox'>
              <input type='checkbox' />
              <i className='form-icon'></i>Public
            </label>
          </div>
        </li>
        <li className='menu-item'><a href='#menus'>Settings</a>
          <div className='menu-badge'>
            <label className='label label-primary'>2</label>
          </div>
        </li>
        <li className='menu-item'><a href='#menus'>Logout</a></li>
      </ul>
    </div>
    <div className='column col-4 col-xs-12'>
      <ul className='menu'>
        <li className='divider' data-content='LINKS'></li>
        <li className='menu-item'><a href='#menus'>Slack</a></li>
        <li className='menu-item'><a href='#menus'>Hipchat</a></li>
        <li className='menu-item'><a href='#menus'>Skype</a></li>
      </ul>
    </div>
    <div className='column col-4 col-xs-12'>
      <ul className='menu'>
        <li className='menu-item'>
          <label className='form-checkbox'>
            <input type='checkbox' checked='' readOnly /><i className='form-icon'></i> form-checkbox
          </label>
        </li>
        <li className='menu-item'>
          <label className='form-radio'>
            <input type='radio' checked='' readOnly /><i className='form-icon'></i> form-radio
          </label>
        </li>
        <li className='menu-item'>
          <label className='form-switch'>
            <input type='checkbox' checked='' readOnly /><i className='form-icon'></i> form-switch
          </label>
        </li>
      </ul>
    </div>
  </div>
)

export default Menu