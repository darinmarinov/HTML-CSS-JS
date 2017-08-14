
$(document).ready(function () {

    $.get("https://www.googleapis.com/youtube/v3/search?order=viewCount&part=snippet&channelId=UCuaQOyP2Yy3VbeiBXe84lAQ&maxResults=50&key=AIzaSyBa66yu9MuiVhFPGG-di30SEIiZL9ejjNs",
        function (data) {
            var results;
            $.each(data.items, function (i, item) {
                videoId = item.id.videoId;
                results = '<div class="col-md-4 "><div  class="iframe-wrp"> <iframe allowfullscreen id="videoElement" src=\"//www.youtube.com/embed/' + videoId + '\"></iframe></div></div>'
                $('#videos').append(results);
            });
            var ifr = $('.iframe-wrp iframe');
            for (var i = 0; i < ifr.length; i++) {
                if (ifr[i].src === "file://www.youtube.com/embed/undefined")
                    ifr[i].parentElement.parentElement.style.display = 'none'
            }
        }
)


});

