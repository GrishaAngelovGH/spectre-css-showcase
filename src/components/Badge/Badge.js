const Badge = ({ title, count }) => (
  <span className='badge' data-badge={count}>
    {title}
  </span>
)

export default Badge