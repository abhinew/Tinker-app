// export default function nextImage() {
//     return owners[0].url[+1]
// }

// export function previousImage() {
//     if (owners[0].url.length < 1){
//     return owners[0].url[0]
//     } else {
//     return owners[0].url[-1]
//     }
// }

export function findOwnerIndex() {
    //let currentImage = event.target.value;
    //let currentOwnerIndex = owners.find(currentImage);
    console.log("currentOwnerIndex");
}

export function previousImage() {
    return owners[0].url.length - 1
}


export default function nextImage() {
    return owners[0].url[+1]
}



export const owners = [
    {
        ownerID: 0,
        name: "Tim",
        Location: "Amsterdam",
        pricePerMonth: 860,
        size: 100,
        bathrooms: 1,
        bedrooms: 2,
        url: ["https://cloud.funda.nl/valentina_media/097/400/696_720x480.jpg", "https://cloud.funda.nl/valentina_media/097/400/698_1080.jpg", "https://cloud.funda.nl/valentina_media/097/400/699_1080.jpg"],
        likeByTenant: [],
        like: [],
        dislike: []
    },
    {
        ownerID: 1,
        name: "Arien",
        Location: "Amsterdam",
        pricePerMonth: 760,
        size: 80,
        bathrooms: 1,
        bedrooms: 2,
        url: ["https://cloud.funda.nl/valentina_media/097/135/058_2160.jpg", "https://cloud.funda.nl/valentina_media/097/135/074_2160.jpg", "https://cloud.funda.nl/valentina_media/097/135/075_1080.jpg"],
        likeByTenant: [],
        like: [],
        dislike: []
    },
    {
        ownerID: 2,
        name: "Wouter",
        Location: "Amsterdam",
        pricePerMonth: 960,
        size: 110,
        bathrooms: 1,
        bedrooms: 3,
        url: ["https://cloud.funda.nl/valentina_media/097/615/625_2160.jpg"],
        likeByTenant: [],
        like: [],
        dislike: []
    },
    {
        ownerID: 3,
        name: "Rein",
        Location: "Amsterdam",
        pricePerMonth: 560,
        size: 50,
        bathrooms: 1,
        bedrooms: 1,
        url: ["https://cloud.funda.nl/valentina_media/097/285/435_720x480.jpg"],
        likeByTenant: [],
        like: [],
        dislike: []
    },
    {
        ownerID: 4,
        name: "Alex",
        Location: "Amsterdam",
        pricePerMonth: 1060,
        size: 100,
        bathrooms: 1,
        bedrooms: 2,
        url: ["https://cloud.funda.nl/valentina_media/095/533/790_720x480.jpg"],
        likeByTenant: [],
        like: [],
        dislike: []
    },
]
