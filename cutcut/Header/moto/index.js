const bgPic = document.querySelector('.wrapper');
const white = document.querySelector('.white');
const darkblue = document.querySelector('.darkblue');

white.onclick = function () {
  bgPic.style.backgroundImage = 'url(https://images.unsplash.com/photo-1623079398404-4a024f3f4aee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)';
};

darkblue.onclick = function () {
  bgPic.style.backgroundImage = "url(https://images.unsplash.com/photo-1623079478319-945f25f0a97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNjb290ZXJ8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=1920&q=60)"
};