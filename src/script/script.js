window.onload = () => {
    const mas_prize = [
        'Найстрашніших тобі снів',
        'Озернись!',
        'Уууууууу. Страшно?',
        'Тук тук, дай угадаю. Ти зараз читаєш?',
        'Віриш в хепіенди?',
        'Я близько. Тук тук ...',
        'У цей страшний день ти можеш не боятись. Я буду поруч ...',
        'Я вампір, уууууу'
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    const box = document.querySelector('.box')
    console.log(box);
    box.addEventListener("click", ()=> {
         document.body.innerHTML = `<div class="prize">${mas_prize[getRandomInt(mas_prize.length-1)]}</div> <div class="ttt">З Хеловіном. Бажаю веселого і захоплюючого життя без страхів, втрат, прикрощів та негараздів. Нехай чорний кіт ніколи не перебігає тобі жодної дороги, нехай кожен день твого життя сплітається в одну велику і міцну павутину щастя</div>`
        document.body.innerHTML += 
            `<div class="bat bat-1"></div>`
    })

}
