import { Dimensions } from 'react-native';

const MoveFinger = (entities, props) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

  let arrow = entities[2];
  let square = entities[3];

  let direction = arrow.direction;

  props.touches.filter(t => t.type === "move").forEach(t => {

    const { pageX, pageY } = t.delta;

    if (Math.abs(pageX) > Math.abs(pageY)) {
      if (pageX > 0) { direction = 'right' }
      else { direction = 'left' }
    } else {
      if (pageY > 0) { direction = 'down' }
      else { direction = 'up'; }
    }
  });

  const movements = {
    up: -10,
    right: 10,
    down: 10,
    left: -10,
  };

  const newPosition = [...square.position]

  if (square && square.position) {
    const delta = props.time.delta/16
    const movements = {
      up: square.position[1] - delta,
      right: square.position[0] + delta,
      left: square.position[0] - delta,
      down: square.position[1] + delta,
    };

    console.log('tick', direction);
    if (direction === 'left' || direction === 'right') {
      newValue = movements[direction];
      newPosition[0] = newValue >= screenWidth || newValue < 0 ? screenWidth/2 : newValue
    }
    if (direction === 'up' || direction === 'down') {
      newValue = movements[direction];
      newPosition[1] = newValue >= screenHeight || newValue < 0 ? screenHeight/2 : newValue
    }
  }

  square.position = newPosition
  arrow.direction = direction;

  return entities;
};

export { MoveFinger };