import money from "../../images/money.jpg"

const InboxData = [
//#region Message data
    {
        type: "message",
        name: "Alex Soap",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "1h ago"
    },
    {
        type: "message",
        name: "Lima Price",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "3 June"
    },
    {
        type: "message",
        name: "Salah Dean",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "1 June"
    },
    {
        type: "message",
        name: "Kevin Doe",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "31 May"
    },
    {
        type: "message",
        name: "Paolo Ghost",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "31 May"
    },
    {
        type: "message",
        name: "Luca Marccano",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "29 May"
    },
    {
        type: "message",
        name: "Tina Boaz",
        subject: "Lorem ipsum dolor sit amet consectetur",
        day: "29 May"
    },
//#endregion

//#region News & Highlight data
    {
        type: "news",
        by: "Finance Department",
        subject: "Announces First Quarter 2023 Financial Results",
        detail: "Lorem ipsum dolor sit amet consectetur ...",
        image: money,
        day: "7 May"
    },
    {
        type: "news",
        by: "IT Department",
        subject: "Introducing new features of the ePhone 18",
        detail: "Lorem ipsum dolor sit amet consectetur ...",
        image: "../../../src/images/ePhone.jpg",
        day: "17 Apr"
    },
    {
        type: "news",
        by: "Human resources Department",
        subject: "Announces of changes in work schedule Work from home",
        detail: "Lorem ipsum dolor sit amet consectetur ...",
        image: "../../../src/images/work.jpg",
        day: "22 Feb"
    },
    {
        type: "news",
        by: "CEO",
        subject: "Greeting from CEO",
        detail: "Lorem ipsum dolor sit amet consectetur ...",
        image: "../../../src/images/ceo.jpg",
        day: "5 Jan"
    },
//#endregion
]

export default InboxData