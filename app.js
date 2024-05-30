let container = document.getElementById('container')
let filterInformation = document.getElementById('filterInformation')

async function usa() {
    try {
        let usaInformation = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
        let usaInfo = await usaInformation.json()
        let foo = (usaInfoElement) => {
            usaInfoElement.forEach((element) => {
                let informationDiv = document.createElement('div')
                informationDiv.className = 'informationDiv'
                container.appendChild(informationDiv)

                let infoYear = document.createElement('p')
                infoYear.innerText = element.Year
                infoYear.className = 'infoYear'
                informationDiv.appendChild(infoYear)

                let nationText = document.createElement('p')
                nationText.innerText = element.Nation
                nationText.className = 'nationText'
                informationDiv.appendChild(nationText)

                let populationText = document.createElement('p')
                populationText.innerText = element.Population
                populationText.className = 'populationText'
                informationDiv.appendChild(populationText)
            });
        }
        foo(usaInfo.data)


        filterInformation.addEventListener('keyup', (event) => {
            let yearVal = event.target.value

            let filterUsaInfo = usaInfo.data.filter((element) => {

                return element.Year.startsWith(yearVal)
            })
            container.innerText = ''
            foo(filterUsaInfo)
        })
    } catch (erorr) {
        console.log(erorr);
    }
}


usa()