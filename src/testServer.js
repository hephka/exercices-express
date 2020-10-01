import axios from 'axios'

let data = await Promise.all([
    axios.get('http://localhost:7777/').then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/aboutme')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/aboutyou')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/vote/28')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/palindrome/tenet')
        .then((dataHttp) => dataHttp.data),
    axios
        .get('http://localhost:7777/oddtest/465')
        .then((dataHttp) => dataHttp.data),
]).catch((err) => {
    console.error(err)
})
console.log(data)
