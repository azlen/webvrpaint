var hands = [document.querySelector('#hand'), document.querySelector('#hand2')]

var controller = Leap.loop({
  host: '192.168.21.18',
  enableGestures: true,
  //optimizeHMD: true
}, function(frame) {
  frame.hands.forEach(function(hand, hand_index) {
    if(hand == undefined) {
      hands[hand_index].setAttribute('visible', false);
      return;
    }
    hands[hand_index].setAttribute('visible', true);
    var position = hand.palmPosition;
    var velocity = hand.palmVelocity;
    var direction = hand.direction;
    //direction.push(direction[0])
    //direction.shift()

    hands[hand_index].querySelector('.palm').setAttribute('position', position.map(function(x){return x/100}).join(' '))

    hand.fingers.forEach(function(finger, finger_index) {
      hands[hand_index].querySelector('.fingers').children[finger_index].setAttribute('position', finger.tipPosition.map(function(x){return x/100}).join(' '));
    })
    //hands[i].setAttribute('rotation', direction.map(x=>x*180).join(' '))
    //document.querySelector('#blob').style.transform = 'translate('+direction[0]*100+'px, '+direction[1]*100+'px)'
  })
});

/*var ws = new WebSocket("ws://192.168.21.18:8080");
ws.onmessage = function(event) {
  var frame = JSON.parse(event.data);

  frame.hands.forEach(function(hand, hand_index) {
    if(hand == undefined) {
      hands[hand_index].setAttribute('visible', false);
      return;
    }
    hands[hand_index].setAttribute('visible', true);
    var position = hand.palmPosition;
    var velocity = hand.palmVelocity;
    var direction = hand.direction;
    //direction.push(direction[0])
    //direction.shift()

    hands[hand_index].querySelector('.palm').setAttribute('position', position.map(x=>x/100).join(' '))

    hand.fingers.forEach(function(finger, finger_index) {
      hands[hand_index].querySelector('.fingers').children[finger_index].setAttribute('position', finger.tipPosition.map(x=>x/100).join(' '));
    })
    //hands[i].setAttribute('rotation', direction.map(x=>x*180).join(' '))
    //document.querySelector('#blob').style.transform = 'translate('+direction[0]*100+'px, '+direction[1]*100+'px)'
  })
}*/
