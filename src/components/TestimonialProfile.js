import classes from '../styles/TestimonialProfile.module.scss'

const TestimonialProfile = props => {
  return (
    <div className={classes.testimonial__profile}>
      <div>
        <img
          className={classes.testimonial__profile_img}
          src={props.testimonial.img}
          alt={props.testimonial.name}
        />
      </div>
      <div>
        <p className={classes.testimonial__profile_name}>
          {props.testimonial.name}
        </p>
        <p className={classes.testimonial__profile_verified}>
          {props.testimonial.verified}
        </p>
      </div>
    </div>
  )
}

export default TestimonialProfile
