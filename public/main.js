//AJAX加载CSS
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')//只用method 和url两个参数
    request.onload = () => {
        console.log('成功了')
        console.log(request.response)
        //创建style标签
        const style = document.createElement('style')
        //填充style 内容
        style.innerHTML = request.response
        //将style插入head
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
getJs.onclick = () => {
    const request = new XMLHttpRequest;
    request.open('GET', '/a.js')
    request.onload = () => {
        console.log('请求了JS')
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('请求Js失败了')
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/b.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成')
            if (request.status >= 200 && request.status < 300) {
                console.log('加载成功')
                const bhtml = document.createElement('div')
                bhtml.innerHTML = request.response
                document.body.appendChild(bhtml)
            }
            else { console.log('加载失败') }
        }

    }
    request.send()
}
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/c.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.responseXML)
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else { console.log('加载失败') }
        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/d.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const object = JSON.parse(request.response)
                console.log(object)
                myName.innerText = object.name + " ! "
            }
        }
    }
    request.send()
}
let n = 1
getPage.onclick = () => {

    console.log(n)
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                pageUl.appendChild(li)
            });
            n = n + 1
        }
    }
    request.send()
}

