function fsckTheHorse() {
  $("#egg").empty().html(' \
      <a id="egg-close" title="Close" onclick="stopFsckingTheHorse();"><i class="fas fa-times"></i></a> \
      <video id="egg-video" loop> \
          <source src="https://blog.t-rg.ws/ee/horses_are_sexy_loop.mp4" type="video/mp4"> \
          <source src="https://blog.t-rg.ws/ee/horses_are_sexy_loop.webm" type="video/webm"> \
          <source src="https://blog.t-rg.ws/ee/horses_are_sexy_loop.ogv" type="video/ogg"> \
      </video> \
  ');
  $("#egg").fadeIn();
  $("#egg-video").get(0).play();
}

function stopFsckingTheHorse() {
  $("#egg-video").get(0).pause();
  $("#egg").fadeOut();
  $("#egg").empty();
}

var egg = new kc(fsckTheHorse);
