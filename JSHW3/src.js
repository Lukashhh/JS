{
    let yourName = prompt("Введите имя")
    alert("Привет, " + yourName + " !")
}
{
    let str = prompt('type what you want')
    let words = str.split(' ')
    let result = words.join(' блін,')
    console.log(result)
}



{
    let str = "cANBerRa"
    let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    console.log(result)
}



{
    let a = prompt()
    let b = a.length
    alert(b)

}

{
   
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result = str.indexOf("пиво")
    let index = result + "пиво".length
    let newStr = str.slice(0, result) + "чай" + str.slice(index)

    console.log(newStr)

}



{
    let firstName = prompt("Введіть своє ім'я:")
    let lastName = prompt("Введіть своє прізвище:")
    let middleName = prompt("Введіть своє по ім'я по-батькові:")

    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }

    let fullName = `${capitalize(firstName.trim())} ${capitalize(lastName.trim())} ${capitalize(middleName.trim())}`

    console.log(fullName)
}

{
    let str = "якийсь текст, в якому є один тег <br /> і всяке інше"
    let tagStart = str.indexOf("<")
    let tagEnd = str.indexOf(">")
    let tag = str.slice(tagStart, tagEnd + 1)
    let result = str.slice(0, tagStart) + str.slice(tagEnd + 1)
    console.log(result)
}

{
    let str = "якийсь текст у якому є один тег <br /> і всяке інше"
    let tagStart = str.indexOf("<")
    let tagEnd = str.indexOf(">")
    let tag = str.slice(tagStart, tagEnd + 1)
    let content = str.slice(0, tagStart) + tag.toUpperCase() + str.slice(tagEnd + 1)
    console.log(content)
}

{
    let input = prompt("Введіть рядок з переносами рядків (використовуйте \\n для переносу рядка):")
    let lines = input.split("\\n")
    let result = lines.join("\n")
    console.log(result)
}

{
    const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-]+)(?:\S+)?/;
    const userInput = prompt('Введіть текст із посиланням на YouTube:');

    const match = userInput.match(youtubeLinkRegex);
    if (match) {
        const videoId = match[1];
        const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        document.write(embedCode);
    }   else {
    alert('Посилання на YouTube не знайдено.');
}
}