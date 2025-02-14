//theater data
const cinema = {

    name:"imax",
    location:"kukatpally",
    movies:[
        {
            title:"puspha-2",
            show:["10.am","6.pm"],
            seats:[60,60]
        },
        {
            title:"thandel",
            show:["2.pm","10.pm"],
            seats:[60,60],

        },
        {
            title:"laila",
            show:["8.am","11.am"],
            seata:[100,100],
        }
    ]
}
console.log("cinemas:",cinema)
console.log("theater:",cinema.name)
console.log("firstmovie:",cinema.movies[1].title)