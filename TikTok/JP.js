hostname = *.tiktokv.com, *.byteoversea.com, *.tik-tokapi.com

# 解锁TikTok，下载美区TikTok，支持17.9.0以上版本
(?<=_region=)CN(?=&) url 307 JP
(?<=&mcc_mnc=)4 url 307 2
^(https?:\/\/dm[\w-]+\.\w+\.com\/.+)(\?)(.+) url 302  $1$3