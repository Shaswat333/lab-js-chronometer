class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime=0;
    this.intervalId= null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if(this.currentTime < 3){
      setInterval(() => {
        if(printTimeCallback){
          printTimeCallback()
        }
        this.currentTime++;
      },1000)
    } if (this.currentTime > 3) {
      setInterval(() => {
        this.currentTime +=3;
      },3000)

    }
  }

  getMinutes() {
    // ... your code goes here
    const minutes= Math.floor(this.currentTime/60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = Math.floor((this.currentTime) % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return(`0${value}`)
    } if (value > 10) {
      return (`${value}`)
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.currentTime)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
