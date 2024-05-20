


const showInfo = () => {
let y = 0;
const webButton = document.querySelector("#web-button");
 webButton.addEventListener("click", function (evt) {
window.location.href = "https://www.instagram.com/oneplus_usa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
const instaButton = document.querySelector("#insta-button");
const facebookButton = document.querySelector("#facebook-button");
const whatsappButton = document.querySelector("#whatsapp-button");
const gmailButton = document.querySelector("#gmail-button");

// webButton.setAttribute("visible", true);
  instaButton.setAttribute("visible", true);
setTimeout(() => {
  facebookButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  whatsappButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  gmailButton.setAttribute("visible", true);
}, 0);
setTimeout(()=>{
  booknowButton.setAttribute("visible", true)
}, 0);



let currentTab = "";

instaButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/oneplus_usa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
facebookButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/oneplus_usa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
whatsappButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/oneplus_usa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
gmailButton.addEventListener("click", function (evt) {
  window.location.href =
    "9993161115rohan@gmail.com";
});




};

const showPortfolio = (done) => {
  const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
  const scardPreviewButton = document.querySelector("#scard-preview-button");

  const id = setInterval(() => {
      clearInterval(id);
      paintandquestPreviewButton.addEventListener('click', () => {
          paintandquestPreviewButton.setAttribute("visible", false);
          document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
          document.querySelector("#paintandquest-video-mp4").play();
      });

      scardPreviewButton.addEventListener('click', () => {
          scardPreviewButton.setAttribute("visible", false);
          document.querySelector("#scard-video-link").setAttribute("src", "#scard-video");
          document.querySelector("#scard-video").play();
      });
  }, 10);

  if (done && typeof done === 'function') {
      done();
  }
}

AFRAME.registerComponent('mytarget', {
  init: function() {
      this.el.addEventListener('targetFound', event => {
          console.log("target found");
          showPortfolio(() => {
              setTimeout(() => {
                  showInfo();
              }, 0);
          });
      });
      this.el.addEventListener('targetLost', event => {
          console.log("target found");
      });
  }
});