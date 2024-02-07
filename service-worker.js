self.addEventListener('fetch', function(event){
  if(event.request.url.includes('TODO.com/TODO')){
    event.respondWith(
      caches.match(event.request).then(function(response){
        return response || fetch(event.request).then(function(response){
          return caches.open('mon-cache-api').then(function(caches){
            caches.put(event.request, response.clone())
            return response;
          })
        })
      })
    )
  }
})