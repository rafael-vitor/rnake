import { Dimensions } from 'react-native';

const MoveFinger = (entities, props) => {
  const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

  let finger = entities[1];
  let arrow = entities[2];
  let square = entities[3];

  props.touches.filter(t => t.type === "move").forEach(t => {
    let direction;

    if (finger && finger.position) {
      finger.position = [ finger.position[0] + t.delta.pageX, finger.position[1] + t.delta.pageY ];

      const { pageX, pageY } = t.delta;


      if (Math.abs(pageX) > Math.abs(pageY)) {
        if (pageX > 0) { direction = 'right' }
        else { direction = 'left' }
      } else {
        if (pageY > 0) { direction = 'down' }
        else { direction = 'up'; }
      }
    }

    const movements = {
      up: -10,
      right: 10,
      down: 10,
      left: -10,
    };

    const newPosition = [...square.position]

    if (square && square.position) {
      if (direction === 'left' || direction === 'right') {
        newValue = square.position[0] + movements[direction];
        newPosition[0] = newValue >= screenWidth || newValue < 0 ? screenWidth/2 : newValue
      }
      if (direction === 'up' || direction === 'down') {
        newValue = square.position[1] + movements[direction];
        newPosition[1] = newValue >= screenHeight || newValue < 0 ? screenHeight/2 : newValue
      }
    }

    square.position = newPosition
    arrow.direction = direction;
  });

  props.touches.filter(t => t.type === "end").forEach(t => {
    if (finger && finger.position) {
      finger.position = [props.screen.width/2, props.screen.height/2];
    }
  });

  return entities;
};

export { MoveFinger };