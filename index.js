GitHubCalendar(".calendar", "brajesh623", { responsive: true });
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
sleep(100).then(() => {
  let x=document.querySelector(".contrib-number").innerText;
  x=x.split(" ");
  x=(+(x[0])--);
  x=x-(x%10);


  document.querySelector("#contrib-number").innerText="";
  document.querySelector("#contrib-number").innerText=x+"+";
})
