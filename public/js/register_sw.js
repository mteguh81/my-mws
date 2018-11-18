// TODO: 1. Untuk memulai service worker, Create file register, file ini akan diincludekan ke index.html dan restaurant.html
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("../sw.js")
    .then(registration => {
      console.log(
        `Service worker registration successful, scope is ${registration.scope}`
      );
    })
    .catch(error => {
      console.log(`Service worker registration failed, error: ${error}`);
    });
}