document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams();
    params.append('accion', 'consulta');
    params.append('to_', "cv");
    params.append('url', window.location.href);
    params.append('userAgent', navigator.userAgent);
    params.append('timezone', Intl.DateTimeFormat().resolvedOptions().timeZone);
    params.append('language', navigator.language);
    params.append('platform', navigator.platform);
    params.append('windowWidth', window.innerWidth);
    params.append('windowHeight', window.innerHeight);
    params.append('colorDepth', screen.colorDepth);
    params.append('screenWidth', screen.width);
    params.append('screenHeight', screen.height);
    params.append('networkType', navigator.connection ? navigator.connection.effectiveType : null);
    params.append('downlink', navigator.connection ? navigator.connection.downlink : null);
    fetch('https://script.google.com/macros/s/AKfycbwMRDX-Dwywywn2k3TRbyjQsk_78fmD9owTOR3cHIBBA1N-yxUdv_Eq5CZIajC8x3CD/exec', {
        method: 'POST',
        body: params,
    })
    .then(data => {
        console.log('HECHO');
    })
    .catch(error => {
        console.log('Error: ' + error);
    });
});
