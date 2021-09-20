/**
 * Выводит информацию об объекте в консоль
 * 
 * @param {*} Data 
 */
export function debugPrint(Data, Title = "", OriginalFlag = false, TraceFlag = false) {
    if (Title.length) {
        console.log(" %c %s", "color: blue; font-weight: bold;", Title);
    }
    const print = TraceFlag ? console.trace : console.log;
    if (OriginalFlag) {
        print(Data);
    }
    if (typeof Data === typeof [1] || typeof Data === typeof { a: 1 }) {
        for (let k in Data) {
            print(
                `===> %c Data[${k}]: %c `,
                "color: gray; font-weight: bold;",
                "color: green; font-weight: normal;",
                Data[k]
            );
        }
    } else {
        print(`===> %c %s`, "color: green; font-weight: bold;", Data);
    }
}

export function colorPrint(Info, Color = "blue", BoldFlag = true) {
    const Style = `color: ${Color};` + BoldFlag ? ` font-weight: bold;` : "";
    console.log("%c %s", Style, Info);
}

/**
 * проверяет статус в полученном ответе функцией fetch
 * 
 * @param {object} Response - объект ответа от сервера, полученный через fetch
 * @param {number} ResponseStatus - код статуса, который нужно проверить
 * @returns {boolean}
 */
export function checkFetchResponseStatus(Response, ResponseStatus) {
    // для fetch, 401 ошибка возвращается с обычным ответом
    return "status" in Response && Response["status"] == ResponseStatus;
}
/**
 * возвращает статус в полученном ответе функцией fetch,
 * если в объекте нет поля "status", то вернется 0
 * 
 * @param {object} Response - объект ответа от сервера, полученный через fetch
 * @returns {number}
 */
 export function getFetchResponseStatus(Response) {
    return "status" in Response ? Response["status"] : 0;
}

/**
 * генерирует URL для GET-запроса, добавляя к строке пары key=value
 * из объекта Options,
 * использует стандартный объект URL и его значение searchParams
 * 
 * @param {string} Url 
 * @param {object} Options 
 * @returns {string}
 */
export function generateGetUrl(Url, Options) {
    /**
     *  новый генерируемый URL
     */
    let NewURL = new URL(Url, window.location.origin);
    if (Options) {
        for (let key in Options) {
            NewURL.searchParams.append(key, Options[key]);
        }
    }
    return NewURL.href;
}