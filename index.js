'use strict';

var Timer = Monitor.Timer;
var FPSBoard = Monitor.FPSBoard;

var fpsBoard_1 = new FPSBoard({
  containerStyles: {
    left: 0
  }
});

var fpsBoard_2 = new FPSBoard({
  container: '#test_container',
  width: 100,
  height: 60,
  boardColor: '#222',
  textColor: '#d2ff1d',
  containerStyles: {
    position: 'absolute'
  }
});

var timer_1 = new Timer();
timer_1.update(function() {
  fpsBoard_1.tick();
  fpsBoard_2.tick();
});

timer_1.start();