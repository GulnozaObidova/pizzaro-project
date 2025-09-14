// const cartCount = document.getElementById('cart-count');
// let totalCount = Number(localStorage.getItem('cartCount')) || 0;
// cartCount.textContent = `${totalCount} items`;

const food = [
  {
    name: 'Blueberry shake',
    desc: '£1.50',
    type: 'Wraps',
    img: 'img/blueberry shake.jpg'
  },
  {
name:'Chocolate cake',
desc:'£1.50',
type:'Wraps',
img:'img/chocolate cake.jpg'
  },
  {
    name:'Chocolate muffin',
    desc:'£1.50',
    type:"Wraps",
    img:'img/chocolate muffin.jpg'
  },
  {
name:'Summer pizza',
desc:'Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli Flakes,Lemon Pepper',
type:'Pizza sets',
img:'img/Summer-pizza.png'
  },
  {
    name:'Apricot Chicken',
    desc:'Crispy Bacon, tasty ham, pineapple, onion and mozzarella',
    type:'Pizza sets',
    img:'img/Apricot-chicken.png'
  },
  {
    name:'Pepperoni pizza',
    desc:'Olive oil, garlic, mozzarella, onions, mushrooms',
    type:'Pizza sets',
    img:"img/Pepperoni-pizza.png"
  },
  {
    name:'Bacon burger',
    desc:'A mighty meaty double helping of all the reasons you love our burger.',
    type:'Burgers',
    img:'img/Bacon-burger.png'
  },
  {
    name:'Cheese burger',
    desc:'A mighty meaty double helping of all the reasons you love our burger.',
    type:'Burgers',
    img:'img/Cheese-butter.png',
  },
  {
    name:'Chicken burger',
    desc:"A mighty meaty double helping of all the reasons you love our burger.",
    type:'Burgers',
    img:'img/Chicken-burger.png',
  },
];
function showFoods(filteredFoods) {
  const container = document.getElementById('foodContainer');
  container.innerHTML = '';

  filteredFoods.forEach(food => {
    const foodDiv = document.createElement("div");
    foodDiv.classList.add("food-item");

    foodDiv.innerHTML = `
      <img src="${food.img}" alt="${food.name}">
      <h3>${food.name}</h3>
      <p class="food-desc">${food.desc}</p>
      <button class="food-button">Add to Cart</button>
    `;

    container.appendChild(foodDiv);
  });
}

function filteredFood(type, clickedButton) {
  if (type === 'all') {
    showFoods(food);
  } else {
    const filtered = food.filter(item => item.type === type);
    showFoods(filtered);
  }

  // remove active state from all buttons
  const allButtons = document.querySelectorAll('.menu-choices');
  allButtons.forEach(btn => btn.classList.remove('active-filter'));

  // add active state to clicked button
  if (clickedButton) {
    clickedButton.classList.add("active-filter");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // show all foods initially
  showFoods(food);

  // find the "All" button
  const defaultButton = document.querySelector('.menu-choices[data-type="all"]');
  if (defaultButton) {
    filteredFood('all', defaultButton);
  }

  // add event listeners to each filter button
  const buttons = document.querySelectorAll('.menu-choices');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      filteredFood(type, this);
    });
  });
});

// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentSlide = 0;
  let slideInterval;

  // Function to show a specific slide
  function showSlide(n) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap-around for slide index
    if (n >= slides.length) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = n;
    }
    
    // Add active class to current slide and dot
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Function to move to next slide
  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  // Function to start automatic slideshow
  function startSlideshow() {
    slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
  }

  // Function to stop automatic slideshow
  function stopSlideshow() {
    clearInterval(slideInterval);
  }

  // Event listeners for next/prev buttons
  nextButton.addEventListener('click', () => {
    stopSlideshow();
    nextSlide();
    startSlideshow();
  });

  prevButton.addEventListener('click', () => {
    stopSlideshow();
    showSlide(currentSlide - 1);
    startSlideshow();
  });

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopSlideshow();
      showSlide(index);
      startSlideshow();
    });
  });

  // Pause slideshow when hovering over carousel
  const carousel = document.querySelector('.carousel-container');
  carousel.addEventListener('mouseenter', stopSlideshow);
  carousel.addEventListener('mouseleave', startSlideshow);

  // Start the slideshow
  startSlideshow();
});

// City Dropdown Functionality
const cityDropdown = document.querySelector('.city-dropdown');
const cityName = document.querySelector('.city-name');
const cityList = document.querySelector('.city-list');

cityDropdown.addEventListener('mouseenter', () => {
  cityList.style.display = 'block';
});

cityDropdown.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!cityList.matches(':hover')) {
      cityList.style.display = 'none';
    }
  }, 200);
});

cityList.addEventListener('mouseleave', () => {
  cityList.style.display = 'none';
});

cityList.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    cityName.textContent = item.textContent;
    cityList.style.display = 'none';
  });
});

// Menu Tabs Functionality
const menuTabs = document.querySelectorAll('.menu-choices');
const menuCategories = document.querySelectorAll('.category');

menuTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    menuTabs.forEach(t => t.classList.remove('active'));
    
    // Add active class to clicked tab
    tab.classList.add('active');
    
    // Get category from data attribute
    const category = tab.getAttribute('data-category');
    
    // Show the corresponding category content
    menuCategories.forEach(cat => {
      if (cat.getAttribute('data-category') === category) {
        cat.classList.add('active');
      } else {
        cat.classList.remove('active');
      }
    });
  });
});



const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.target;

    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    // Show the correct tab content
    document.getElementById(target).classList.add('active');
  });
});



// Always define cartCount + totalCount at the very top
const cartCount = document.getElementById('cart-count');
let totalCount = Number(localStorage.getItem('cartCount')) || 0;

// Show saved count immediately when page loads
cartCount.textContent = `${totalCount} items`;

function toggleCartBtn(button) {
  totalCount++;
  localStorage.setItem('cartCount', totalCount);
  cartCount.textContent = `${totalCount} items`;

  let container = button.parentElement;
  let viewCartBtn = container.querySelector(".view-cart-btn");

  if (viewCartBtn.style.display === "inline-block") {
    viewCartBtn.style.display = "none";   // hide if already visible
  } else {
    viewCartBtn.style.display = "inline-block"; // show if hidden
  }
}

const addBtn = document.getElementById('add-to-cart');
const viewBtn = document.getElementById('view-cart');

addBtn.addEventListener('click', () => {
  viewBtn.style.display = 'inline-block'; // show the "View the Cart" button
});

viewBtn.addEventListener('click', () => {
  // Redirect to cart page (replace with your cart URL)
  window.location.href = "/cart.html";
  // Or for testing without a page, you can do:
  // alert("Redirecting to cart...");
});

viewBtn.addEventListener('click', () => {
  alert("View the Cart clicked!");
});

// Handle product add/remove
const products = document.querySelectorAll(".suggested-pizza-sets");
products.forEach(product => {
  const buyBtn = product.querySelector(".add-btn");
  let productCount = 0;
  let controls = null;

  buyBtn.addEventListener("click", () => {
    productCount = 1;
    totalCount++;
    localStorage.setItem("cartCount", totalCount);
    cartCount.textContent = `${totalCount} items`;

    // hide Buy button
    buyBtn.style.display = "none";

    // create controls dynamically
    controls = document.createElement("div");
    controls.classList.add("controls");

    const minusBtn = document.createElement("button");
    minusBtn.classList.add('add-btn');
    minusBtn.textContent = "-";

    const quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.textContent = productCount;

    const plusBtn = document.createElement("button");
    plusBtn.classList.add('add-btn');
    plusBtn.textContent = "+";

    controls.appendChild(minusBtn);
    controls.appendChild(quantity);
    controls.appendChild(plusBtn);
    product.appendChild(controls);

    // plus click
    plusBtn.addEventListener("click", () => {
      productCount++;
      totalCount++;
      localStorage.setItem("cartCount", totalCount);
      quantity.textContent = productCount;
      cartCount.textContent = `${totalCount} items`;
    });

    // minus click
    minusBtn.addEventListener("click", () => {
      if (productCount > 0) {
        productCount--;
        totalCount--;
        if (totalCount < 0) totalCount = 0;

        localStorage.setItem("cartCount", totalCount);
        quantity.textContent = productCount;
        cartCount.textContent = `${totalCount} items`;
      }

      if (productCount === 0) {
        controls.remove();
        buyBtn.style.display = "inline-block";
      }
      localStorage.removeItem("cartCount");
    });
    localStorage.clear();

    localStorage.removeItem("cartCount");
totalCount = 0;
cartCount.textContent = "1 item";

  });
});







  