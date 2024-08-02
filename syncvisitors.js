// SyncVisitor onload by Nguyen Bao
var visitorCount = localStorage.getItem('visitorCount');

if (visitorCount === null) {
  visitorCount = 0;
} else {
  visitorCount = parseInt(visitorCount);
}

visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.getElementById('visits').innerHTML = visitorCount;