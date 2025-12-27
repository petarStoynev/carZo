const container = document.querySelector('.card-container');

const carData = [
    {
        title: "Porsche 911 GT3",
        price: "$180,000",
        desc: "Low mileage, excellent condition",
        img: "porsche911.jpg",
        category: "Sport"
    },
    {
        title: "Tesla Model S",
        price: "$95,000",
        desc: "Long range, fast '67",
        img: "tesla.jpg",
        category: "Electric"
    },
    {
        title: "Ford Mustang",
        price: "$45,000",
        desc: "Fully restored, collector item",
        img: "mustang.jpg",
        category: "Classic"
    },
    {
        title: "Audi R8",
        price: "$160,000",
        desc: "V10 Performance",
        img: "audir8.jpg",
        category: "Supercar"
    },
    {
        title: "Mercedes G-Wagon",
        price: "$140,000",
        desc: "Matte black, AMG G63 trim.",
        img: "gwagon.jpg",
        category: "SUV"
    },
    {
        title: "BMW M4 Competition",
        price: "$85,000",
        desc: "Carbon package, drift mode enabled.",
        img: "m4.jpg",
        category: "Sport"
    },
    {
        title: "Toyota Supra MK4",
        price: "$70,000",
        desc: "Legendary 2JZ engine, unmodified.",
        img: "supra.jpg",
        category: "Classic"
    },
    {
        title: "Land Rover Defender",
        price: "$65,000",
        desc: "Rugged off-road tires, winch included.",
        img: "defender.jpg",
        category: "SUV"
    },
    {
        title: "Ferrari 488 Pista",
        price: "$320,000",
        desc: "Track focused, red with white stripes.",
        img: "ferrari.jpg",
        category: "Supercar"
    },
    {
        title: "Rivian R1T",
        price: "$75,000",
        desc: "All-electric adventure truck, quad motor.",
        img: "rivian.jpg",
        category: "Electric"
    },
    {
        title: "Chevrolet Corvette C8",
        price: "$72,000",
        desc: "Mid-engine layout, convertible.",
        img: "corvette.jpg",
        category: "Sport"
    },
    {
        title: "Lamborghini Huracan",
        price: "$230,000",
        desc: "V10 naturally aspirated, AWD.",
        img: "lambo.jpg",
        category: "Supercar"
    }
];

const cardsPerPage = 3;
let currentPage = 1;

function renderCards(page) {
    container.innerHTML = '';

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const carsToShow = carData.slice(startIndex, endIndex);

    carsToShow.forEach((car, index) => {
        const realIndex = startIndex + index;

        const carHTML = `<div class="car-card" onClick="openDetail(${realIndex})"> 
              <div class="card-image">
                <img src="${car.img}" alt="${car.title}">
              </div>
              <div class="card-content">
                <span class="car-category">${car.category}</span>
                <h3 class="car-title">${car.title}</h3>
                <p class="car-price">${car.price}</p>
                <p class="car-desc">${car.desc}</p>
              </div>
            </div>
        `;

        container.innerHTML += carHTML;
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCards(currentPage);
        document.querySelector('.card-section').scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(carData.length / cardsPerPage);

    if (currentPage < totalPages) {
        currentPage++;
        renderCards(currentPage);
        document.querySelector('.card-section').scrollIntoView({ behavior: 'smooth' });
    }
})



function openDetail(index) {
    const car = carData[index];

    document.getElementById('detail-img').src = car.img;
    document.getElementById('detail-category').innerText = car.category;
    document.getElementById('detail-title').innerText = car.title;
    document.getElementById('detail-price').innerText = car.price;
    document.getElementById('detail-desc').innerText = car.desc;

    document.querySelector('.hero-content').style.display = 'none';
    document.querySelector('.card-section').style.display = 'none';
    document.querySelector('.pagination-container').style.display = 'none';

    document.getElementById('detail-view').style.display = 'block';

    window.scrollTo(0, 0);
}


function showPage(pageId) {
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.card-section').style.display = 'none';
    document.querySelector('.pagination-container').style.display = 'none';
    document.getElementById('detail-view').style.display = 'none';

    document.getElementById('about-view').style.display = 'none';
    document.getElementById('news-view').style.display = 'none';
    document.getElementById('contacts-view').style.display = 'none';

    if (pageId === 'home') {
        document.querySelector('.hero-section').style.display = 'flex';
        document.querySelector('.hero-content').style.display = 'flex';
        document.querySelector('.card-section').style.display = 'flex';
        document.querySelector('.pagination-container').style.display = 'flex';
    } else if (pageId === 'about') {
        document.getElementById('about-view').style.display = 'block';
    } else if (pageId === 'news') {
        document.getElementById('news-view').style.display = 'block';
    } else if (pageId === 'contacts') {
        document.getElementById('contacts-view').style.display = 'block';
    }
}


renderCards(currentPage);