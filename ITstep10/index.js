const a = 'USA'
const b = 'EN'
const c = 'UK'
const Card = prompt('Введіть номер карти')
const Name = prompt('Введіть ваше імя')
const Contry = prompt('Введіть країну в якій прописані UK, USA, EN')
if (Contry === a, b, c) {
    const Age = prompt('Введіть свій вік')
    if (Age >= 18) {
    } else {
        const Age2 = prompt('Введіть свій вік ще раз')
    } if (Contry === c) {
        alert('Доброго дня ' + Name + ', Ваш рік народження ' + Age + '. Вам буде надіслано кошти на карту ' + Card + '. По містю проживання UK')
    } if (Contry === a) {
        alert('Good afternoon ' + Name + ', your year of birth is ' + Age + '. Funds will be sent to your card ' + Card + '. By place of residence USA ' )
    } if (Contry === b) {
        alert('Good afternoon ' + Name + ', your year of birth is ' + Age + '. Funds will be sent to your card ' + Card + '. By place of residence EN ' )
    }
}
