// const MoveFinger = (entities, { touches }) => {
// const MoveFinger = (entities, { events, touches }) => {
const MoveFinger = (entities, props) => {
  // console.log(props)
  // if (events.length > 0) console.log(events);

  // console.log(props.touches.map(t => t.type));

  props.touches.filter(t => t.type === "move").forEach(t => {
    let finger = entities[t.id + 1];
    let arrow = entities[2];
    if (finger && finger.position) {
      finger.position = [
        finger.position[0] + t.delta.pageX,
        finger.position[1] + t.delta.pageY
      ];

      const { pageX, pageY } = t.delta;

      if (Math.abs(pageX) > Math.abs(pageY)) {
        if (pageX > 0) { console.log('right'); arrow.direction = 'right' }
        else {
          console.log('left'); arrow.direction = 'left'
        }
      } else {
        if (pageY > 0) { console.log('down'); arrow.direction = 'down' }
        else console.log('top'); arrow.direction = 'top'
      }
    }
  });


  props.touches.filter(t => t.type === "end").forEach(t => {
    let finger = entities[1];
    if (finger && finger.position) {
      // finger.position = [ props.screen.height/2, props.screen.width/2 ];
      finger.position = [props.screen.width/2, props.screen.height/2];
    }
  });


  return entities;
};

export { MoveFinger };