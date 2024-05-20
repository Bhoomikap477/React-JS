function IndianTime(){
  let date = new Date();
  let formattedTime = date.toLocaleDateString();
  return <h2>This is the current time : {formattedTime} - { date.toLocaleTimeString()}</h2>;
}
export default IndianTime;
