function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "image/pic_bulboff.gif"
    } else {
      pic = "image/pic_bulbon.gif"
    }
    document.getElementById('myImage').src = pic;
  }