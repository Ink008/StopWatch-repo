var clock = document.getElementById("clock");
var main_btn = document.getElementById("main-btn");
var reset_btn = document.getElementById("reset-btn");

second = 0;
milisecond = 0;
var countingInterval;

function toggle()
{
  if(main_btn.innerHTML == "Start")
  {
    main_btn.innerHTML = "Stop";
    countingInterval = setInterval(counting, 10);
  }
  else
  {
    main_btn.innerHTML = "Start";
    clearInterval(countingInterval);
  }
}
function stop()
{
  milisecond = 0; second = 0;
  clock.innerHTML = "0.00s";
  toggle();
}
function counting()
{
  ++milisecond;
  if(milisecond > 99) 
  {
    milisecond = 0;
    ++second;
  }
  clock.innerHTML = second + "." + milisecond + "s";
}