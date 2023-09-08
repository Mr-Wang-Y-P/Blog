/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
// 最终版 封装 解决异步任务
function writeText(text,t, delay = 200) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            text.innerHTML = t; // 显示当前字符串 t
            resolve(); // Promise 完成
        }, delay) // 延迟 delay 毫秒后执行
    })
}

export async function main(str,text,delay=200) {
    while (true) { // 无限循环
        for (let j = 0; j < str.length; j++) {
            // 写入
            for (let i = 0; i <= str[j].length; i++) {
                await writeText(text,str[j].substr(0, i)) // 显示当前字符串的前 i 个字符
            }
            // 回退
            // 回退前先等一秒
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(); // 等待 1000 毫秒后 Promise 完成
                }, 1000) // 等待 1000 毫秒
            })
            for (let i = str[j].length; i >= 0; i--) {
                await writeText(text,str[j].substr(0, i), delay) // 显示当前字符串的前 i 个字符，间隔 200 毫秒
            }
        }
    }
}


