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
                `===> %c Data[${k}]: %c %s`,
                "color: gray; font-weight: bold;",
                "color: green; font-weight: normal;",
                Data[k]
            );
        }
    } else {
        print(`===> %c %s`, "color: green; font-weight: bold;", Data);
    }
}

/**
 * проверяет статус в полученном ответа,
 * ответ приходит в разном виде в зависимости от используемой библиотеки
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