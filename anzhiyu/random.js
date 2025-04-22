var posts=["2025/04/22/这是第一篇文章/","2025/04/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };