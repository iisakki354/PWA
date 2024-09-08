window.onload = () => {  /* pwa tehty ohjeiden mukaisesti*/
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}
