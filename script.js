document.addEventListener("DOMContentLoaded", function () {

  createHeader();
  createSubNav();
  createLeftSidebar();
  createRightMainbar();

  function eventListeners() {
    document
      .querySelector(".search-input")
      .addEventListener("input", filterProducts);
    document
      .querySelectorAll(".lowtoHigh")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("low-high"))
      );
    document
      .querySelectorAll(".hightoLow")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("high-low"))
      );
    document
      .querySelectorAll(".newestFirst")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("newestFirst"))
      );
    document
      .querySelectorAll(".oldestFirst")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("oldestFirst"))
      );
    document
      .querySelectorAll(".popularity")
      .forEach((btn) =>
        btn.addEventListener("click", () => sortProducts("popularity"))
      );

    // Section 2 event listeners
    document
      .querySelector(".sec2-remove-items")
      .addEventListener("click", clearAllFilters);
    // document
    //   .querySelector(".sec2-search-input")
    //   .addEventListener("input", filterItems);
    document
      .querySelectorAll(".sec2-input")
      .forEach((checkbox) =>
        checkbox.addEventListener("change", leftfilterProducts)
      );

    // Section 4 event listeners
    document
      .querySelectorAll(".sec4-input")
      .forEach((checkbox) =>
        checkbox.addEventListener("change", leftfilterProducts)
      );
    document
      .querySelector(".sec4-remove-items")
      .addEventListener("click", clearAllFilters);

    // Section 6 event listeners
    document
      .querySelectorAll(".sec6-input")
      .forEach((checkbox) =>
        checkbox.addEventListener("change", leftfilterProducts)
      );

    document
      .querySelector(".sec6-remove-items")
      .addEventListener("click", clearAllFilters);

  }

  function filterProducts() {
    const searchInput = document
      .querySelector(".search-input")
      .value.toLowerCase();
    const productSections = document.querySelectorAll(".right-Section");
    productSections.forEach((section) => {
      const productName = section
        .querySelector(".row-left h2")
        .innerHTML.toLowerCase();
      section.style.display = productName.includes(searchInput)
        ? "flex"
        : "none";
    });
  }

  function sortProducts(order) {
    const products = [...document.querySelectorAll(".right-sec-div")];
    const container = document.querySelector(".right-sec");

    if (order === "low-high" || order === "high-low") {
      products.sort((a, b) => {
        const priceA = parseFloat(
          a.querySelector(".curr-price").innerHTML.replace(/[^0-9.-]+/g, "")
        );
        const priceB = parseFloat(
          b.querySelector(".curr-price").innerHTML.replace(/[^0-9.-]+/g, "")
        );
        return order === "low-high" ? priceA - priceB : priceB - priceA;
      });
    }

    container.innerHTML = "";
    products.forEach((product) => container.appendChild(product));
  }

  // function filterItems() {
  //   const filterInput = document
  //     .querySelector(".sec2-search-input")
  //     .value.toLowerCase();
  //   document.querySelectorAll(".checkbox-li").forEach((item) => {
  //     const itemName = item.querySelector("span").innerHTML.toLowerCase();
  //     item.style.display = itemName.includes(filterInput) ? "block" : "none";
  //   });
  // }

  function leftfilterProducts() {
    const selectedRatingIds = Array.from(
      document.querySelectorAll(".sec4-input:checked")
    ).map((checkbox) => checkbox.id);

    const selectedBrands = Array.from(
      document.querySelectorAll(".sec2-input:checked")
    ).map((cb) => cb.value.toLowerCase());

    const selectedRams = Array.from(
      document.querySelectorAll(".sec6-input:checked")
    ).map((checkbox) => checkbox.id);

    const products = document.querySelectorAll(".right-sec-div");

    products.forEach((productElement, index) => {
      const product = flipkart.right.rightSections[index];
      const productRating = parseFloat(product.ratings);
      const productBrand = productElement
        .querySelector(".brand")
        .innerHTML.toLowerCase();

      const matchesRating =
        selectedRatingIds.length === 0 ||
        selectedRatingIds.some((id) => {
          if (id === "4") {
            return productRating >= 4;
          }
          if (id === "3") {
            return productRating >= 3;
          }
          return false;
        });

      const matchesBrand =
        selectedBrands.length === 0 ||
        selectedBrands.some((brand) => productBrand.includes(brand));

      console.log(product.name);
      console.log(product.RAM);

      const productRAM = product.RAM ? parseInt(product.RAM, 10) : 0;

      const matchesRAM =
        selectedRams.length === 0 ||
        selectedRams.some((id) => {
          if (id === "8+") {
            return productRAM >= 8;
          }
          if (id === "6+") {
            return productRAM >= 6;
          }
          if (id === "6") {
            return productRAM === 6;
          }
          if (id === "4") {
            return productRAM === 4;
          }
          if (id === "3") {
            return productRAM === 3;
          }
          if (id === "1+") {
            return productRAM <= 1;
          }
          return false;
        });

      productElement.style.display =
        matchesRating && matchesBrand && matchesRAM ? "flex" : "none";
    });
    toggleClearAllVisibility(2);
    toggleClearAllVisibility(4);
    toggleClearAllVisibility(6);
  }

//   function clearAllFilters(sectionNumber) {
//     console.log('Clearing filters for section:', sectionNumber);

//     if (typeof sectionNumber !== 'number' || isNaN(sectionNumber)) {
//         console.error("Invalid section number provided:", sectionNumber);
//         return;
//     }

//     // Clear all checked checkboxes in the specified section
//     document
//         .querySelectorAll(`.sec${sectionNumber}-input:checked`)
//         .forEach((checkbox) => {
//             checkbox.checked = false;
//         });

//     // Update the visibility of the "Clear All" button and hide it
//     toggleClearAllVisibility(sectionNumber);

//     // Reapply filters
//     leftfilterProducts();
// }

// function toggleClearAllVisibility(sectionNumber) {
//     const removeItemsElement = document.querySelector(`.sec${sectionNumber}-remove-items`);
//     const checkboxes = document.querySelectorAll(`.sec${sectionNumber}-input:checked`);

//     if (removeItemsElement) {
//         if (checkboxes.length > 0) {
//             removeItemsElement.style.display = "block";
//         } else {
//             removeItemsElement.style.display = "none";
//         }
//     } else {
//         console.error(`Element '.sec${sectionNumber}-remove-items' not found.`);
//     }
// }

function toggleClearAllVisibility(sectionNumber) {
  const removeItemsElement = document.querySelector(
    `.sec${sectionNumber}-remove-items`
  );
  const checkboxes = document.querySelectorAll(
    `.sec${sectionNumber}-input:checked`
  );

  if (removeItemsElement) {
    removeItemsElement.style.display =
      checkboxes.length > 0 ? "block" : "none";
  } else {
    console.error(`Element '.sec${sectionNumber}-remove-items' not found.`);
  }
}

function clearAllFilters() {
  [2, 4, 6].forEach((sectionNumber) => {
    document
      .querySelectorAll(`.sec${sectionNumber}-input:checked`)
      .forEach((checkbox) => {
        checkbox.checked = false;
      });
    toggleClearAllVisibility(sectionNumber);
  });

  leftfilterProducts();
}

function hideClearAllButton(sectionNumber) {
    const removeItemsElement = document.querySelector(`.sec${sectionNumber}-remove-items`);
    if (removeItemsElement) {
        removeItemsElement.style.display = "none";
    }
}

  // selector for sortby filters---blue underline--

  document.querySelectorAll(".filter-txt").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".filter-txt").forEach((item) => {
        item.id = "";
      });

      this.id = "selected";
    });
  });

  eventListeners();
});



