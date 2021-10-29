window.onload = () => {
    const mas_prize = [
        'Ти дуже миленька',
        'Від твоєї краси темніють очі!',
        'Ти чарівна і неймовірна!',
        'Люди щасливі просто бути поруч з тобою',
        'Світ став би набагато кращим, якщо більшість людей були б схожі на тебе',
        'Твоя посмішка зачаровує',
        'Ти найдобріша людина на світі',
        'Ти найкрасивіша з усіх казкових принцес',
        'Всесвіт створив своє найкраще творіння - тебе',
        'Є межа досконалості - це ти',
        'Як жити на світі з такою красою?',
        'Буть завжди щасливою',
        'Нехай в тоєму житті не буде місця для скуки',
        'Вам не соромно бути такою гарною?'
    ]
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    const box = document.querySelector('.box')
    console.log(box);
    box.addEventListener("click", ()=> {
        // const div = document.createElement('div')
        // div.setAttribute('class', 'prize')
        // div.innerHTML = mas_prize[getRandomInt(2)]
        document.body.innerHTML = `<div class="prize">${mas_prize[getRandomInt(mas_prize.length-1)]}</div> <div class="ttt">З Хеловіном. Бажаю веселого і захоплюючого життя без страхів, втрат, прикрощів та негараздів. Нехай чорний кіт ніколи не перебігає тобі жодної дороги, нехай кожен день твого життя сплітаються в одну велику і міцну павутину щастя</div>`
    })

}