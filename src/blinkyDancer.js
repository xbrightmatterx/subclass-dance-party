var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  
  this.name = "blinky";
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass(this.name);

  this.lastTimeOut;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){

    // call the old version of step at the beginning of any call to this new version of step
//    this.oldStep();
    makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    //  debugger;
    this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function(){
  makeDancer.prototype.lineUp.call(this);

}
