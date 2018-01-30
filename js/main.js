! function () {
    let container = document.querySelector('#code');
    let styleTag = document.querySelector('#styleTag');
    var duration = 30;
    let id;

    function writeCode(prefix, code, fn) {
        let n = 0;
        id = setTimeout(function run() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n < code.length) {
                id = setTimeout(run, duration);
            } else {
                fn && fn.call();
            }
        }, duration)
    }
    let code = `.preview{
        height: 100%;
        border: 1px solid green;
        background-color: #fbe54a;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }
    .nose{
        width: 0px;
        height: 0px;
        border :11px solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }
    .eye{
        width: 49px;
        height: 49px;
        background-color: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    .eye::after{
        content: "";
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        border: 2px solid #000000;
        top: -2px;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height: 68px;
        background-color: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 90px;
    }
    .face.right{
        left: 50%;
        margin-left: 90px;
    }
    .upper_lip{
        height: 25px;
        width: 80px;
        border: 4px solid black;
        border-top: none;
        position: absolute;
        top: 50px;
        background-color: #fbe54a;
    }
    .upper_lip.left{
        border-bottom-left-radius: 40px 25px;    
        border-right: none;
        transform: rotate(-20deg);
        right: 50%;
        
    }
    .upper_lip.right{
        border-bottom-right-radius: 40px 25px;
        border-left: none;
        transform: rotate(20deg);
        left: 50%;    
    }
    .lower_lip_wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        /* z-index: -1; */
        height: 110px;
        width: 300px;
        overflow: hidden;
    }
    .lower_lip{
        width: 300px;
        height: 3500px;
        background-color: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lower_lip::after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background-color: #fc4a62;
        left: 50%;
        margin-left: -50px;
        border-radius: 100px/100px;
    }`;
    writeCode('', code);

    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget);
        let speed = $button.attr('data-speed');
        $button.addClass('active')
            .siblings('.active').removeClass('active');
        switch (speed) {
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 30;
                break;
            case 'fast':
                duration = 1;
                break;
            case 'stop':
                window.clearTimeout(id);
                container.innerHTML = code;
                styleTag.innerHTML = code;
                container.scrollTop = container.scrollHeight;
                break;
        }
    })
}.call();