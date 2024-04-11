// ParallaxContainer.jsx
import PropTypes from 'prop-types';

const ParallaxContainer = ({ children, speed, backgroundColor }) => {
  const parallaxStyle = {
    transform: `translateY(${window.scrollY * speed}px)`,
    backgroundColor: backgroundColor
  };

  return <div className="parallax-container" style={parallaxStyle}>{children}</div>;
}

ParallaxContainer.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ParallaxContainer;