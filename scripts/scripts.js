function changeColor(div){
    base = 'rgb(' + 78 + ',' + 103 + ',' + 133 + ')'
    change = 'rgb(' + 122 + ',' + 139 + ',' + 166 + ')'
    if (div == "info_div"){
        document.getElementById("info_div").style.backgroundColor = change
        document.getElementById("books_div").style.backgroundColor = base
        document.getElementById("poem_div").style.backgroundColor = base
        document.getElementById("interests_div").style.backgroundColor = base
        document.getElementById("schedule_div").style.backgroundColor = base
    }
    else if (div == "books_div"){
        document.getElementById("info_div").style.backgroundColor = base
        document.getElementById("books_div").style.backgroundColor = change
        document.getElementById("poem_div").style.backgroundColor = base
        document.getElementById("interests_div").style.backgroundColor = base
        document.getElementById("schedule_div").style.backgroundColor = base
    }
    else if (div == "poem_div"){
        document.getElementById("info_div").style.backgroundColor = base
        document.getElementById("books_div").style.backgroundColor = base
        document.getElementById("poem_div").style.backgroundColor = change
        document.getElementById("interests_div").style.backgroundColor = base
        document.getElementById("schedule_div").style.backgroundColor = base
    }
    else if (div == "interests_div"){
        document.getElementById("info_div").style.backgroundColor = base
        document.getElementById("books_div").style.backgroundColor = base
        document.getElementById("poem_div").style.backgroundColor = base
        document.getElementById("interests_div").style.backgroundColor = change
        document.getElementById("schedule_div").style.backgroundColor = base
    }
    else {
        document.getElementById("info_div").style.backgroundColor = base
        document.getElementById("books_div").style.backgroundColor = base
        document.getElementById("poem_div").style.backgroundColor = base
        document.getElementById("interests_div").style.backgroundColor = base
        document.getElementById("schedule_div").style.backgroundColor = change
    }
}
