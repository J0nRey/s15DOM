var heading = document.createElement("h1") //--> creo mi h1
var headingText = document.createTextNode("Hola mundo") //--> creo mi texto


//Element.appenchild( child ) ingresa el elemento hijo

heading.appendChild(headingText)    //--> Agrego mi  texto a mi h1
//document.body.appendChild(heading) //--> Agrego mi h1 con el texto a mi body


namesArray = [
    "Jaime",
    "Beto" ,
    "Mariana"
]

const printList = () => {
    let list = document.createElement( "ul" )

    namesArray.forEach( name => {
        let listItem = document.createElement( "li" )
        let itemText = document.createTextNode( name )

        listItem.appendChild( itemText )

        list.appendChild( listItem )
    })

    document.body.appendChild(list)
}

printList()


//Practica
/*hacer una tabla con los nombres de los mentores y 
los promedios de cada asignatura junto con el promedio general*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]


const printTable1 = () => {

    let headersArray = [
        "Mentor__",
        "HTML____",
        "CSS_____",
        "JS______",
        "ReactJS_",
        "suma____",
        "Promedio"
    ]

     let dataTable = document.createElement( "table" )
     let dataHeader = document.createElement( "thead" )
     let headerRow = document.createElement( "tr" )

     headersArray.forEach( header => {

         let head = document.createElement( "th" )
         let headText = document.createTextNode( header )
         head.appendChild(headText)
         headerRow.appendChild(head)

     })

     dataHeader.appendChild( headerRow )
     dataTable.appendChild( dataHeader )
     document.body.appendChild( dataTable )

     let dataTableBody = document.createElement("tbody")
     mentorsArray.forEach( item => {

            let suma = item.scores.reduce((accum,current)=>{
                return accum += current.score
            },0)
            let promedio = Math.round(suma / item.scores.length)

     let HTML = item.scores.find( score => score.signature === "HTML").score
     let CSS = item.scores.find( score => score.signature === "CSS").score
     let JS = item.scores.find( score => score.signature === "JS").score
     let ReactJS = item.scores.find( score => score.signature === "ReactJS").score

        let itemRow = document.createElement("tr")      // creamos la fila

        let nameTd = document.createElement("td")           
        let htmlTd = document.createElement("td")
        let cssTd = document.createElement("td")
        let jscriptTd = document.createElement("td")
        let reacTd = document.createElement("td")

        let sumaTd = document.createElement("td")
        let promTd = document.createElement("td")

        let nameText = document.createTextNode( item.name)  
        let htmlText = document.createTextNode( HTML )
        let cssText = document.createTextNode( CSS )
        let jscriptText = document.createTextNode( JS )
        let reacText = document.createTextNode( ReactJS )
        
        let sumaText = document.createTextNode( suma )
        let promText = document.createTextNode( promedio )

        nameTd.appendChild(nameText)                        
        htmlTd.appendChild(htmlText)
        cssTd.appendChild(cssText)
        jscriptTd.appendChild(jscriptText)
        reacTd.appendChild(reacText)

        sumaTd.appendChild(sumaText)
        promTd.appendChild(promText)

        itemRow.appendChild(nameTd)                         
        itemRow.appendChild(htmlTd)
        itemRow.appendChild(cssTd)
        itemRow.appendChild(jscriptTd)
        itemRow.appendChild(reacTd)
        
        itemRow.appendChild(sumaTd)
        itemRow.appendChild(promTd)


        dataTableBody.appendChild( itemRow )
     })

     dataTable.appendChild(dataTableBody)
 }
 
 printTable1()


 const printTable2 = () => {
     
 let dataTable = document.createElement( "table" )
 let dataHeader = document.createElement( "thead" )
 let headerRow = document.createElement( "th" )

 let head = document.createElement( "th" )
 let headText = document.createTextNode( "Promedio General" )
 head.appendChild(headText)
 headerRow.appendChild(head)

 dataHeader.appendChild( headerRow )
 dataTable.appendChild( dataHeader )
 document.body.appendChild( dataTable ) 

 let dataTableBody = document.createElement("tbody")

 
let prom = 0
 mentorsArray.forEach( item => {
    
    let suma = item.scores.reduce((accum,current)=>{
        return accum += current.score
    },0)
    let promedio = Math.round(suma / item.scores.length)
        prom += promedio / 4 // debo encontrar como sacar el numero de mentores

        console.log(item.scores.length)
        
  })
//     let promGen = prom / item.scores.length

    let itemRow = document.createElement("tr")      // creamos la fila
    let pgenTd = document.createElement("td")
    let pgenText = document.createTextNode( prom )
    pgenTd.appendChild(pgenText)
    itemRow.appendChild(pgenTd)
    dataTableBody.appendChild( itemRow )
    dataTable.appendChild(dataTableBody)  
}

 printTable2()


/* 
 let testArray = [
     {
         name:"jonathan",
         phone:"5525342596",
         mail:"j.reyes_alatorre@hotmail.com"
     },
     {
        name:"Miriam",
        phone:"5560677661",
        mail:"miriam.reyes_alatorre@hotmail.com"
    }
 ]

 const printTable = () => {

    let headersArray = [
        "Nombre",
        "Telefono",
        "Mail"
    ]

     let dataTable = document.createElement( "table" )    //  *
     let dataHeader = document.createElement( "thead" )  //  *
     let headerRow = document.createElement( "tr" )       //  *

     headersArray.forEach( header => {                      //*   Encabezado
         let head = document.createElement( "th" )          //*
         let headText = document.createTextNode( header )   //*
         head.appendChild(headText)                         //*
         headerRow.appendChild(head)                        //*
     })

     dataHeader.appendChild( headerRow )                    //*
     dataTable.appendChild( dataHeader )                    //*
     document.body.appendChild( dataTable )                 //*

     let dataTableBody = document.createElement("tbody")    //*   Datos
     testArray.forEach( item => {                           //*
        let itemRow = document.createElement("tr")          //*

        let nameTd = document.createElement("td")           //**
        let phoneTd = document.createElement("td")
        let mailTd = document.createElement("td")

        let nameText = document.createTextNode( item.name)  //**
        let phoneText = document.createTextNode( item.phone)
        let mailText = document.createTextNode( item.mail)

        nameTd.appendChild(nameText)                        //**
        phoneTd.appendChild(phoneText)
        mailTd.appendChild(mailText)

        itemRow.appendChild(nameTd)                         //**
        itemRow.appendChild(phoneTd)
        itemRow.appendChild(mailTd)

        dataTableBody.appendChild( itemRow )                //*
     })

     dataTable.appendChild(dataTableBody)                   //*
 }

 printTable() */