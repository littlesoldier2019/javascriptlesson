const personAccount = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    incomes: [{
            description: 'Salary',
            amount: 4000
        },
        {
            description: 'Prize',
            amount: 5000
        }
    ],
    expenses: [{
            description: 'Rent',
            amount: 900
        },
        {
            description: 'Transport',
            amount: 100
        }
    ],

    addIncome: function () {
        const description = prompt('Enter description: ')
        const amount = Number(prompt('Enter amount: '))
        this.incomes.push({
            description,
            amount
        })
    },
    addExpense: function () {
        const description = prompt('Enter description: ')
        const amount = Number(prompt('Enter amount: '))
        this.expenses.push({
            description,
            amount
        })
    },
    totalIncome: function () {
        const total = this.incomes.reduce((acc, curr) => {
            return acc + curr.amount
        }, 0)
        return total
    },
    totalExpense: function () {
        return this.expenses.reduce((acc, curr) => acc + curr.amount)
    },
    accountBalance: function () {
        const balance = this.totalIncome() - this.totalExpense()
        return balance
    }
}

//===============

    const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const chart = document.querySelector('.chart')
    for (const num of data) {
        let div = document.createElement('div')
        div.className = 'bar'
​
        let alpha = 0.5 + num/200
        div.style.background = `rgba(255, 165, 0, ${alpha})`
        div.style.width = num * 2.5 + 'px'
        div.style.height = num * 2.5 + 'px'
        div.style.lineHeight = num * 2.5 + 'px'
        div.textContent = num
        chart.appendChild(div)
​
    }


//====================

const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    const chart = document.querySelector('.chart')
    for (const num of data) {
        let div = document.createElement('div')
        div.className = 'bar'
        let alpha = num / 100
        div.style.background = `rgba(0, 0, 0, ${alpha})`
        div.style.width = num * 10 + 'px'
        div.textContent = num
        chart.appendChild(div)
​
    }

//============

    /*console.log('Promise')

        const square = (n) => n * n

        const higherOrderFun = (callback) => {
            console.log('This is a higher order function')


            return callback(2)
        }

        console.log(higherOrderFun(square))

        // 

        const callback = (err, result) => {
            if (err) {
                return console.log(err)
            }
            return console.log(result)
        }
        //Callback



        const doSomething = callback => {
            setTimeout(() => {
                const skills = ['HTML', 'CSS', 'JS']
                callback(false, skills)
            }, 2000)
        }
        doSomething(callback) */

        const doPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //const skills = ['HTML', 'CSS', 'JS']
                const skills = []
                if (skills.length > 0) {
                    k
                    resolve(skills)
                } else {
                    reject('Something wrong has happened')
                }
            }, 2000)


        })

        console.log(doPromise)

        doPromise.then((skills) => {
            console.log(skills)
        }).catch(err => {
            console.log(err)
        })
        const url = 'https://restcountries.eu/rest/v2/all'
        //   fetch

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            
        }).catch((err) => {
            console.log(err.message)
        })

        // async and await
        const fetchData = async () => {
            const url = 'https://restcountries.eu/rest/v2/all'

            try {
                const response = await fetch(url)
                const data = await response.json()
                return data

            } catch (error) {
                console.log(error)
                return error

            }


        }

        let data = await fetchData();

        console.log('I am really fetching', data)


//======================
// Set is a collection of items
        // add(), has, delete, clear
        /*
        const nums = [3, 0, 1, 1, 2, 0, 2]
​
​
        const set = new Set(nums)
​
      for (const num of nums) {
             set.add(num)
​
         } */
        /*for (const s of set) {
            console.log(s)
        }
        console.log('The length of the set is ', set.size)
        console.log(set.has(3))
        set.delete(3)
        set.clear()
​
​
        console.log(set)
        const languages = ['Finnish', 'English', 'English', 'French', 'Spanish', 'Arabic']
        const setLangs = new Set(languages)
        console.log(setLangs)
​
        const arr = []
​
        for (const s of setLangs) {
            let count = 0;
            for (const l of languages) {
                if (s == l) {
                    count++
                }
            }
            arr.push({
                lang: s,
                count
            })
        }
        console.log(arr)
*/
        // Map
        // set, get, has, delete, size, clear
        ​
        const countriesMap = new Map()
        countriesMap.set('Finland', 'Helsinki')
        countriesMap.set('Sweden', 'Stockholm')
        const nums = [
            ['Finland', 'Helsinki'],
            [
                'Sweden', 'Stockholm'
            ]
        ]
        const numsMap = new Map(nums)
​
        for (const [name, city] of countriesMap) {
            console.log(name, city)
​
        }
​
        countriesMap.forEach((item, index, arr) => {
            console.log('Countries from the for Each', item, index, arr)
        })
​
        Array.from(countriesMap).forEach(([nam, city], index, arr) => {
            console.log('Countries from the for Each', name, city, index, arr)
        })
​
​
        console.log(countriesMap.get('Finland'))
        console.log(numsMap.size)
        console.log(numsMap)
        console.log(countriesMap.has('Helsinki'))
        console.log('check here ', countriesMap.delete('Fin'))
        console.log('check here ', countriesMap.delete('Finland'))
        countriesMap.clear()
​
​
​
        console.log(countriesMap)

//====================
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.score = 0
        this.skills = []
    }
    getFullName() {
        return this.firstName + ' ' + this.lastName

    }
    get getScore() {
        return this.score
    }

    set setScore(score) {
        this.score += score

    }
    addSkill(skill) {

        this.skills = [...this.skills, ...skill]

    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]

    }

    static showDateTime() {
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let date = now.getDate();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        let dateMonthYear = date + "." + month + "." + year;
        let time = hours + ":" + minutes;
        let fullTime = dateMonthYear + " " + time;
        return fullTime;

    }
    getPersonInfo() {

        let fullName = this.getFullName()
        return `${fullName} is ${this.age}`
    }

}

const p1 = new Person('Asab', 'Yeta', 250)
const p2 = new Person('David', 'Cameroon', 60)

console.log(p1)
console.log(p2)
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p1.getScore)
p1.setScore = 10
console.log(p1.getScore)
console.log(p2.getScore)
p1.addSkill(['HTML'])
p1.addSkill(['CSS'])
p1.addSkill(['JavaScript'])
p1.addSkill(['React', 'Redux', 'Node', 'MongoDB'])
console.log(p1)
console.log(p2)
console.log(p1.getPersonInfo())

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())

class Student extends Person {
    constructor(firstName, lastName, age, country) {
        super(firstName, lastName, age)
        this.country = country
    }
    getPersonInfo() {
        return `${this.getFullName()} is ${this.age}. He is from ${this.country}`
    }


}

const s1 = new Student('John', 'David', 21, 'Finland')
console.log(s1)
console.log(Student.showDateTime())
console.log(s1.getPersonInfo())

//========================

<script>
        class Rectangle {
            constructor(width, height = 10) {
                this.width = width
                this.height = height
            }
​
        }
​
        const rect1 = new Rectangle(20, 20)
        const rect2 = new Rectangle(30, 50)
        const rect3 = new Rectangle(40, 40)
​
        console.log(rect1)
        console.log(rect2)
        console.log(rect3)
​
​
        class Person {
            constructor(firstName, lastName, age, country) {
                this.firstName = firstName
                this.lastName = lastName
                this.age = age
                this.country = country
                this.score = 0
                this.skills = []
​
            }
            getFullName() {
                let fullName = this.firstName + ' ' + this.lastName
                return fullName
            }
            get getScore() {
                return this.score
            }
​
            set setScore(score) {
                this.score += score
            }
            addSkill(skill) {
                this.skills.push(skill)
            }
            getPersonInfo() {
                let fullName = this.getFullName()
                let lastIndex = this.skills.length - 1
                let skills = this.skills.slice(0, lastIndex).join(', ') + `, and ${this.skills[lastIndex]}`
                let info = `${fullName} is ${this.age}. He lives ${this.country}. He knows ${skills}.`
                return info
            }
            static favoriteSkill() {
                const skills = ['HTML', 'CSS', 'JS', 'React', 'Python']
                let index = Math.floor(Math.random() * skills.length)
                return skills[index]
​
            }
            static showDateTime() {
​
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                let date = now.getDate();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                if (hours < 10) {
                    hours = "0" + hours;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                let
                    dateMonthYear = date + "." + month + "." + year;
                let time = hours + ":" + minutes;
                let
                    fullTime = dateMonthYear + " " + time;
                return fullTime;;
​
            }
​
        }
​
        const p1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland')
        const p2 = new Person('John', 'Doe', 25, 'UK')
        const p3 = new Person('Antti', 'Sami', 20, 'Finland')
        const p4 = new Person('Oby', 'Ninisto', 25, 'Finland')
​
        console.log(p1)
        console.log(p2)
        console.log(p3)
​
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python']
​
        for (const skill of skills) {
            p1.addSkill(skill)
        }
​
        console.log(p1.getPersonInfo())
​
        console.log(p1.getFullName())
        console.log(p2.getFullName())
        console.log(p3.getFullName())
        console.log(Person.favoriteSkill())
​
        p1.setScore = 5
​
        console.log(p1.getScore)
​
        console.log(p4.getFullName())
        p4.addSkill('HTML')
        p4.addSkill('CSS')
        p4.addSkill('JS')
        p4.setScore = 10
        console.log(p4.getScore)
        console.log(p4)
        console.log(Person.showDateTime())
​
        // example of inheritance
​
        class Student extends Person {
            constructor(firstName, lastName, age, country, gender) {
                super(firstName, lastName, age, country)
                this.gender = gender
​
            }
            getPersonInfo() {
                let lastIndex = this.skills.length - 1
                let skills = this.skills.slice(0, lastIndex).join(', ') + `, and ${this.skills[lastIndex]}`
                let pronoun = this.gender == 'Male' ? 'He' : 'She'
                let info =
                    `${this.getFullName()} is ${this.age}. ${pronoun} lives ${this.country}. ${pronoun} knows
                    ${skills}.`
                return info
            }
​
​
​
​
        }
​
        const st1 = new Student('David', 'Smith', 25, 'USA', 'Male')
        const st2 = new Student('Marta', 'John', 20, 'Finland', 'Female')
        console.log(st1)
​
        console.log(st1.getFullName())
        console.log(st1.getPersonInfo())
        console.log(st2.getPersonInfo())

        //============================

        n('Antti', 'Sami', 20, 'Finland')
        const p4 = new Person('Oby', 'Ninisto', 25, 'Finland')
​
        console.log(p1)
        console.log(p2)
        console.log(p3)
​
        console.log(p1.getFullName())
        console.log(p2.getFullName())
        console.log(p3.getFullName())
​
        p1.setScore = 5
​
        console.log(p1.getScore)
​
        console.log(p4.getFullName())
        p4.setScore = 10
        console.log(p4.getScore)
        console.log(p4)

//===================================

const flexContainer = document.querySelector('.flex-container')
       
        let content = ''
        for (const country of countriesObj) {
            let {
                name,
                capital,
                population,
                languages,
                flag,
            } = country
​
            content += `<div>
                <h2>${name}</h2>
                <p>${capital}</p>
                <p>${population}</p>
                <img src=${flag}>
            </div>`
​
        }
        console.log(content)
        flexContainer.innerHTML = content 


//=================

<script>
        console.log(countries)
        const flexContainer = document.querySelector(‘.flex-container’)
        const url = ‘https://restcountries.eu/rest/v2/all’
        fetch(url)
            .then(response => response.json())
            .then(countries => {
                for (const country of countries) {
                    let {
                        name,
                        capital,
                        population,
                        region,
                        languages,
                        flag,
                        topLevelDomain: domain
                    } = country
                    flexContainer.innerHTML += `<div>
                        <h2>${name}</h2>
                        <p>${capital}</p>
                        <p>${population}</p>
                        <img src=${flag}>
                         </div>`
                }
            })
    </script>