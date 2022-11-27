GitHubCalendar(".calendar", "brajesh623", { responsive: true,tooltips:true });
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
document.querySelector("#resume1").addEventListener("click",function(){
  window.open("https://drive.google.com/file/d/1Op6iUVHvJnWarOur3EImWwD5rpeqe8Ui/view?usp=share_link","_blank");
});
document.querySelector("#resume2").addEventListener("click",function(){
  window.open("https://drive.google.com/file/d/1Op6iUVHvJnWarOur3EImWwD5rpeqe8Ui/view?usp=share_link","_blank");
});
