!function(t){"use strict";function e(e,a){const i=e.dataset.id,s=e.dataset.type,o=e.dataset.album_id,c=e.dataset.count,r=e.dataset.api_key,n=e.dataset.link_type,l=e.dataset.link_target,h=e.dataset.lazy,d=(Math.random()+1).toString(36).substring(7);let m=`https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=${r}&user_id=${i}&per_page=${c}&nojsoncallback=1`;"album"===s&&o&&(m=`https://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&api_key=${r}&photoset_id=${o}&user_id=${i}&per_page=${c}&nojsoncallback=1`);const p=e.offsetWidth,u=getComputedStyle(e).gridTemplateColumns.split(" ").length,f=parseInt(p/u),g="(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)";t.getJSON(m,function(i){if("ok"!=i.stat)return;let c="s";switch(!0){case 75<=f&&149>=f:c="q",matchMedia(g).matches&&(c="m");break;case 150<=f&&239>=f:c="m",matchMedia(g).matches&&(c="n");break;case 240<=f&&319>=f:c="n",matchMedia(g).matches&&(c="w");break;case 320<=f&&399>=f:c="w",matchMedia(g).matches&&(c="z");break;case 400<=f&&639>=f:c="z",matchMedia(g).matches&&(c="c");break;case 640<=f&&799>=f:c="c",matchMedia(g).matches&&(c="b");break;case 800<=f:c="b"}a&&(c="c");let r,m="";r="album"===s&&o?i.photoset.photo:i.photos.photo;for(let t=0;t<r.length;t++){const e=r[t];let a=e.owner,p="";"album"===s&&o&&(a=i.photoset.owner,p="/in/album-"+o);const u="//farm"+e.farm+".static.flickr.com/"+e.server+"/"+e.id+"_"+e.secret+"_"+c+".jpg";let g="//www.flickr.com/photos/"+a+"/"+e.id+p;"lightbox"===n&&(g="//farm"+e.farm+".static.flickr.com/"+e.server+"/"+e.id+"_"+e.secret+"_b.jpg");const k=[];n&&k.push('href="'+g+'"'),k.push('data-title="'+e.title+'"'),l&&k.push('target="'+l+'"'),"lightbox"===n&&k.push('data-rel="iLightbox['+d+']"');const w=[];let b='src="'+u+'"';const _=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${f}' height='auto' viewBox='0 0 ${f} auto'%3E%3Crect width='${f}' height='100%25' fill='%23ff0' fill-opacity='0'/%3E%3C/svg%3E`;w.push('alt="'+e.title+'"'),"avada"===h?(b='src="'+_+'"',w.push('data-orig-src="'+u+'"'),w.push('class="lazyload"')):"wordpress"===h&&w.push('loading="lazy"'),w.push(b),m+='<div class="flickr-image"><a '+k.join(" ")+"><img "+w.join(" ")+"/></a></div>"}e.innerHTML=m,a&&!window.fusionFlickrItems&&(window.fusionFlickrItems=m),e.classList.remove("loading"),"lightbox"===n&&t(e).find("a").iLightBox(window.avadaLightBox.prepare_options(d,!1))})}t(".fusion-flickr-element").each(function(){e(this)}),t(window).on("load fusion-element-render-fusion_flickr",function(t,a){const i=document.querySelector(`[data-cid="${a}"] .fusion-flickr-element`);i&&e(i,!0)})}(jQuery);