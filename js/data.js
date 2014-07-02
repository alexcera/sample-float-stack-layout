var DATA = [
    {
        name: "Bay Hotel",
        loc: "Telok Blangah Rd",
        dist: 10,
        img: "img/bay-hotel.jpg",
        price: "150",
        deal_price: "150",
        currency: "$",
        star_rating: 3
    },
    {
        name: "Crowne Plaza Hotel",
        loc: "Changi Airport",
        dist: 20,
        img: "img/crown-plaza.jpg",
        price: "275",
        deal_price: "270",
        currency: "S$",
        star_rating: 4
    },
    {
        name: "Dorsett Regency",
        loc: "New Bridge Rd",
        dist: 3,
        img: "img/dorset-regency.jpg",
        price: "260",
        deal_price: "260",
        currency: "S$",
        star_rating: 4
    },
    {
        name: "The Fullerton Hotel Singapore",
        loc: "Fullerton Square",
        dist: 7,
        img: "img/fullerton.jpg",
        price: "300",
        deal_price: "300",
        currency: "S$",
        star_rating: 5
    },
    {
        name: "Link Hotel",
        loc: "Tiong Bahru Rd",
        dist: 13,
        img: "img/link-hotel.jpg",
        price: "150",
        deal_price: "150",
        currency: "S$",
        star_rating: 3
    },
    {
        name: "Marina Bay Sands",
        loc: "Bayfront Ave",
        dist: 11,
        img: "img/marina-bay-sands.jpg",
        price: "400",
        deal_price: "380",
        currency: "S$",
        star_rating: 5
    },
    {
        name: "Singapore Marriott Hotel",
        loc: "Orchard Rd",
        dist: 11,
        img: "img/marriott.jpg",
        price: "360",
        deal_price: "360",
        currency: "S$",
        star_rating: 5
    },
    {
        name: "Raffles Hotel",
        loc: "Beach Rd",
        dist: 8,
        img: "img/raffles-hotel.jpg",
        price: "290",
        deal_price: "290",
        currency: "S$",
        star_rating: 4
    },
    {
        name: "Rendezvous Hotel",
        loc: "Bras Basah Rd",
        dist: 9,
        img: "img/rendezvous-hotel.jpg",
        price: "350",
        deal_price: "350",
        currency: "S$",
        star_rating: 4
    },
    {
        name: "Trader's Hotel",
        loc: "Cuscaden Rd",
        dist: 12,
        img: "img/traders-hotel.jpg",
        price: "220",
        deal_price: "200",
        currency: "S$",
        star_rating: 3
    }
];


DATA.sortAscByProp = function(prop) {
    var temp = this.slice(0);
    temp.sort(function(a, b) {
        return a[prop] - b[prop];
    });
    return temp;
};

DATA.sortDescByProp = function(prop) {
    var temp = this.slice(0);
    temp.sort(function(a, b) {
        return b[prop] - a[prop];
    });
    return temp;
}