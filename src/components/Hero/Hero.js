const Hero = ({ title, subTitle }) => (
  <div className='hero bg-gray text-center'>
    <div className='hero-body'>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  </div>
)

export default Hero