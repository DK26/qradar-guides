__ezcl=function(){var a,d=function(k){for(var p,l=k+'=',m=decodeURIComponent(document.cookie),n=m.split(';'),o=0;o<n.length;o++){for(p=n[o];' '===p.charAt(0);)p=p.substring(1);if(0===p.indexOf(l))return p.substring(l.length,p.length)}return''},e=function(){new Image().src=a+'?pvID='+_ezaq.page_view_id+'&dID='+_ezaq.domain_id},f=function(k,l,m){k.addEventListener?k.addEventListener(l,m,!1):k.attachEvent('on'+l,m)},h=function(){f(document.body,'ezCMPComplete',function(){if(('undefined'==typeof document.visibilityState||'prerender'!==document.visibilityState)&&'undefined'!=typeof _ezaq&&_ezaq.hasOwnProperty('page_view_id')){var k=d('ezCMPCookieConsent');if(''!==k)for(var n,l=k.split('|'),m=0;m<l.length&&(n=l[m].split('='),2===n.length);m++){var o=n[0],p=n[1];if('0'===p){'3'===o&&(new Image().src='//g.ezoic.net/cmp/expirecookies');continue}if('undefined'!=typeof cmpCookies&&'undefined'!=typeof cmpCookies[o])for(var q=0;q<cmpCookies[o].length;q++)document.cookie=cmpCookies[o][q]}e()}})};return{init:function(){a='/detroitchicago/cl.gif',('undefined'!=typeof ezJsu&&!0===ezJsu||'undefined'!=typeof _ez_sa&&!0===_ez_sa||'undefined'!=typeof isAmp&&!0===window.isAmp||'undefined'!=typeof ezWp&&!0===ezWp)&&(a='//g.ezoic.net'+a)},handle:function(k){!0===k?e():''===d('ezCMPCookieConsent')?h():e()}}}(),__ezcl.init(),__ezcl.handle();