

//you might like

const shoesYouMightLike = [ 


    {
    name: "Nike Air Max 90 Premium",
    gender: "Men's Shoes",
    price: "$105.97",
    img: "./images/shoe1.png"
    },
    {
    name: "Nike Air Max Terrascape 90",
    gender: "Men's Shoes",
    price: "$97.97",
    img: "./images/shoe2.png"
    },
    {
    name: "Nike Air Max 97",
    gender: "Men's Shoes",
    price: "$175.00",
    img: "./images/shoe3.png"
    },
    {
    name: "Nike Air Max SC",
    gender: "Men's Shoes",
    price: "$85.00",
    img: "./images/shoe4.png"
    }
    ,
    {
    name: "Nike Air Max Excee",
    gender: "Men's Shoes",
    price: "$90.00",
    img: "./images/shoe5.png"
    },
    {
    name: "Nike Air Max Plus",
    gender: "Men's Shoes",
    price: "$175.00",
    img: "./images/shoe6.png"
    },
    {
    name: "Nike Air Max 90 SE",
    gender: "Men's Shoes",
    price: "$98.97",
    img: "./images/shoe7.png"
    },
    {
    name: "Nike Air Max 97",
    gender: "Men's Shoes",
    price: "$175.00",
    img: "./images/shoe8.png"
    },
    {
    name: "Nike Air Max 90 GTX",
    gender: "Men's Shoes",
    price: "$108.97",
    img: "./images/shoe9.png"
    },
    {
    name: "Nike Air Max 95 Essential",
    gender: "Men's Shoes",
    price: "$175.00",
    img: "./images/shoe10.png"
    },
    {
    name: "Nike Air Max 90 G",
    gender: "Men's Shoes",
    price: "$130.00",
    img: "./images/shoe11.png"
    }

];

const mightLikeContainer = document.getElementById('mightLike');

shoesYouMightLike.forEach(shoe => {
    const div = document.createElement('div')
    div.classList.add('mightLike')

    const img = document.createElement('img')
    img.src = shoe.img;
    img.classList.add('shoeMightLikeImage')
    div.appendChild(img)

    const nameLabel = document.createElement('div')
    nameLabel.classList.add('shoeName')
    nameLabel.innerHTML = shoe.name
    div.appendChild(nameLabel)

    const genderLabel = document.createElement('div')
    genderLabel.classList.add('genderName')
    genderLabel.innerHTML = shoe.gender
    div.appendChild(genderLabel)

    const priceLabel = document.createElement('div')
    priceLabel.classList.add('priceShoe')
    priceLabel.innerHTML = shoe.price;
    div.appendChild(priceLabel)


    mightLikeContainer.appendChild(div)

})



//shoesin Column and Main






const shoesInColumn = [
    {
        nameMain: "Air Max",
        imageMain: "./images/shoetwo.png",
        image: "./images/shoeone.png",
    },
    {
        name: "Air Max",
        image: "./images/shoetwo.png",
    },
    {
        name: "Air Max",
        image: "./images/shoethree.png",
    },
    {
        name: "Air Max",
        image: "./images/shoefour.png",
    },
    {
        name: "Air Max",
        image: "./images/shoeone.png",
    },
];

const shoeColumn = document.getElementById('shoeColumn');
const mainShoeContainer = document.getElementById('mainShoe');

const mainShoeImg = document.createElement('img');
mainShoeImg.src = shoesInColumn[0].imageMain;
mainShoeImg.classList.add('mainImage');
mainShoeContainer.appendChild(mainShoeImg);

shoesInColumn.forEach((shoes) => {
    const div = document.createElement('div');
    div.classList.add('shoeColumn');

    const img = document.createElement('img');
    img.src = shoes.image;
    img.classList.add('columnImage');
    div.appendChild(img);

    shoeColumn.appendChild(div);
});

shoeColumn.addEventListener('click', (event) => {
    const clickedShoe = event.target;
    if (clickedShoe.tagName === 'IMG') {
        mainShoeImg.src = clickedShoe.src;
    }
});


// buttons 

const buttonsDiv = document.getElementById('sizeSelect');

const sizes = ['6','6.5','7','7.5','8','8.5','9','9.5','10','10.5','11','11.5','12','12.5','13','13.5']

sizes.forEach((size, index) => {
    const button = document.createElement('button')
    button.classList.add('size')
    button.id = size
    button.textContent = size
    buttonsDiv.appendChild(button)


    if ((index + 1) % 7 === 0) {
        buttonsDiv.appendChild(document.createElement('br'));
      }

})

buttonsDiv.addEventListener('click', (event) => {
    const sizeSelected = event.target.textContent
    console.log("Size selected: " + sizeSelected);
})


// description
// Nike Air Max

function setShoeDescription(description)  {
const shoeDescription = document.getElementById('description')
shoeDescription.innerHTML = description
}

setShoeDescription('Nothing as fly, nothing as comfortable, nothing as proven.<br>The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole,<br> stitched overlays and classic TPU details.<br> Classic colors celebrate your fresh look while Max Air cushioning adds comfort to the journey.')




//WOMEN SECTION


