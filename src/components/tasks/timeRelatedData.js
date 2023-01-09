export const currentTime = () => {
    let time = new Date()
    return `${time.getFullYear()}-${time.getMonth() + 1 < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1
        }-${time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()}T${time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
        }:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`
}