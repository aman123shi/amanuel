export interface ProjectDTO {
    title:string,
    description:string,
    images:string[]
    hasDemoLink:boolean
    link:string
}
export const ProjectLists:ProjectDTO[] = [
    {
        title:"A movie Review Site",
        description:"A great movie review site Built by Angular with PrimeNG components and which uses themoviedb.com free API which has the functionality of search movies,view trailers,filter by genres and many more",
        images:[
            'assets/images/movie_review1.png',
            'assets/images/movie_review2.png',
            'assets/images/movie_review3.png',
            'assets/images/movie_review4.png',
        ],
        hasDemoLink:true,
        link:'https://et-movie-review.herokuapp.com/',
     },
     {
        title:"House and Car Rental Admin Dashboard",
        description:"A Admin DashBoard for Agents and Admins powered by Angular,Express,MongoDB and Redis with Full authentication and different role which has the functionality of with all CRUD operations of system main components and with different Charting for visualization with different filter mechanism",
        images:[
            'assets/images/rental_angular1.png',
            'assets/images/rental_angular2.png',
            'assets/images/rental_angular3.png',
        
        ],
        hasDemoLink:false,
        link:'https://github.com/aman123shi/House_And_Car_Rental_Frontend-admin_Dashboard',
     },
     {
        title:"Ethiopian gregorian Calendar Converter",
        description:"I built this project when i needed a Library to Covert Ethiopian Date to Gregorian and vise versa but by that time i couldn't find one and did some research and build it then i created some Interface around it for demonstration I use Bootstrap,Handlebars,JQuery and Express",
        images:[
            'assets/images/et-calendar.png',

        
        ],
        hasDemoLink:false,
        link:'https://github.com/aman123shi/Ethiopian-Gregorian-Calendar-converter',
     },
   
     {
        title:"House and Car Rental Client",
        description:"This is client Flutter App which lets them create account post a property search, filter by category, view their properties and Book properties Technologies used are Flutter,Dio,Bloc,Twilio for Sms,Chapa for Payment Integration,Express and MongoDB ",
        images:[
            'assets/images/rental_flutter1.png',
            'assets/images/rental_flutter2.png',
            'assets/images/rental_flutter3.png',
        
        ],
        hasDemoLink:false,
        link:'https://github.com/aman123shi',
     },
     {
        title:"Body mass index calculator",
        description:"This is a simple Body Mass Index Calculator Flutter App with Beautiful UI.",
        images:[
            'assets/images/bmi1.jpg',
            'assets/images/bmi2.jpg',
        ],
        hasDemoLink:false,
        link:'https://github.com/aman123shi/BMI_Calculator_Flutter_app',
     },
     {
        title:"Chapa Payment for Node.js",
        description:"an open source contribution for Node.js/Express.js integration just to get started with",
        images:[
            'assets/images/chapa.png',
        
        ],
        hasDemoLink:false,
        link:'https://github.com/aman123shi/chapa-node-express-boilerplate',
     },
];